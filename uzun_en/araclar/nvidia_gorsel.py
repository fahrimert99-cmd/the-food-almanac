#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""NVIDIA NIM (build.nvidia.com, ücretsiz) görsel üretimi: FLUX.1-dev, yedek DiffusionGemma.

Env: NVIDIA_API_KEY; isteğe bağlı NVIDIA_GORSEL_MODEL, NVIDIA_GORSEL_YEDEK.
"""
import base64, json, os, re, time, urllib.error, urllib.request

# flux.1-dev hesapta erişilebilir görsel model (SDXL/SD3 -> 404, schnell -> zaman aşımı); >=~30 adım ister.
GORSEL_MODEL = os.environ.get("NVIDIA_GORSEL_MODEL", "").strip() or "black-forest-labs/flux.1-dev"
GORSEL_YEDEK = os.environ.get("NVIDIA_GORSEL_YEDEK", "google/diffusiongemma-26b-a4b-it").strip()


def _anahtar():
    return re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "")


def _base64_cikar(d):
    """Yanıtın farklı şemalarından görsel baytlarını çıkarır."""
    aday = None
    if isinstance(d, dict):
        if isinstance(d.get("artifacts"), list) and d["artifacts"]:
            aday = d["artifacts"][0].get("base64") or d["artifacts"][0].get("b64_json")
        elif isinstance(d.get("data"), list) and d["data"]:
            aday = d["data"][0].get("b64_json") or d["data"][0].get("base64")
        else:
            aday = d.get("image") or d.get("b64_json") or d.get("base64")
    if not aday or not isinstance(aday, str):
        return None
    if "," in aday and aday.strip().startswith("data:"):
        aday = aday.split(",", 1)[1]
    try:
        return base64.b64decode(aday)
    except Exception:
        return None


def _nvcf_iste(url, data, hdr, timeout):
    """POST: senkron (200) ya da asenkron (202 + NVCF-REQID -> durum yoklaması) yanıtı işler."""
    req = urllib.request.Request(url, data=data, headers=hdr)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        status = getattr(r, "status", 200)
        reqid = r.headers.get("NVCF-REQID") or r.headers.get("nvcf-reqid")
        govde = r.read().decode()
    son = time.time() + timeout
    while status == 202 and reqid and time.time() < son:
        time.sleep(5)
        s = urllib.request.Request(f"https://api.nvidia.com/v2/nvcf/exec/status/{reqid}", headers=hdr)
        with urllib.request.urlopen(s, timeout=timeout) as sr:
            status = getattr(sr, "status", 200)
            govde = sr.read().decode()
    return json.loads(govde)


def _gorsel_govde(model, prompt, w, h):
    """Model ailesine göre istek gövdesi (gorsel.py tohum için bunu sarar)."""
    m = model.lower()
    if "diffusiongemma" in m or "gemma" in m:
        return {"prompt": prompt, "width": w, "height": h, "seed": 0}
    return {"prompt": prompt, "width": w, "height": h, "steps": 4 if "schnell" in m else 50, "seed": 0}


def _gorsel_tek(model, prompt, cikti, w, h, timeout):
    """Tek model ile görsel dener. Yol | None."""
    hdr = {"Content-Type": "application/json", "Accept": "application/json", "Authorization": f"Bearer {_anahtar()}"}
    try:
        d = _nvcf_iste(f"https://ai.api.nvidia.com/v1/genai/{model}",
                       json.dumps(_gorsel_govde(model, prompt, w, h)).encode(), hdr, timeout)
    except urllib.error.HTTPError as he:
        try:
            govde = he.read().decode()[:140]
        except Exception:
            govde = ""
        print(f"      (NVIDIA görsel [{model}] HTTP {he.code}: {govde})")
        return None
    except Exception as e:
        print(f"      (NVIDIA görsel [{model}] atlandı: {str(e)[:120]})")
        return None
    ham = _base64_cikar(d)
    if not ham:
        return None
    os.makedirs(os.path.dirname(cikti) or ".", exist_ok=True)
    with open(cikti, "wb") as f:
        f.write(ham)
    return cikti if os.path.getsize(cikti) > 1000 else None
