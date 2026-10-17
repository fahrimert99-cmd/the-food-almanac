#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cloudflare Workers AI görsel üretimi (ücretsiz: günde 10.000 neuron): FLUX.2 [klein] 4B, yedek FLUX.1 [schnell].

NVIDIA çöktüğünde aynı FLUX ailesiyle, aynı gravür stilinde görsel üretmek için. Günlük ücretsiz kota bitince
istekler reddedilir (ücret çıkmaz); o model bu çalıştırmada kapatılır.
Env: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN; isteğe bağlı CLOUDFLARE_GORSEL_MODELLER (virgülle, sırayla).
Yaklaşık maliyet (1344x768 = 6 adet 512'lik parça): klein-4b ~156 neuron, schnell (8 adım) ~106 neuron.
"""
import base64, json, os, re, urllib.error, urllib.request, uuid

MODELLER = [m.strip() for m in (os.environ.get("CLOUDFLARE_GORSEL_MODELLER") or
            "@cf/black-forest-labs/flux-2-klein-4b,@cf/black-forest-labs/flux-1-schnell").split(",") if m.strip()]
_KAPALI = set()


def _hesap():
    return (re.sub(r"\s", "", os.environ.get("CLOUDFLARE_ACCOUNT_ID") or ""),
            re.sub(r"\s", "", os.environ.get("CLOUDFLARE_API_TOKEN") or ""))


def var_mi():
    return all(_hesap())


def _multipart(alanlar):
    sinir = uuid.uuid4().hex
    parca = b"".join(f'--{sinir}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
                     for k, v in alanlar.items())
    return parca + f"--{sinir}--\r\n".encode(), f"multipart/form-data; boundary={sinir}"


def _istek(model, prompt, w, h, tohum):
    """FLUX.2 modelleri multipart form, FLUX.1 schnell JSON bekler (Cloudflare dokümanı)."""
    if "flux-2" in model:
        alanlar = {"prompt": prompt, "width": w, "height": h}
        if tohum:
            alanlar["seed"] = tohum
        return _multipart(alanlar)
    govde = {"prompt": prompt[:2048], "steps": 8}
    if tohum:
        govde["seed"] = tohum
    return json.dumps(govde).encode(), "application/json"


def _goruntu(ham, tur):
    if tur.startswith("image/"):
        return ham
    d = json.loads(ham.decode())
    r = d.get("result", d) if isinstance(d, dict) else {}
    b64 = (r or {}).get("image") if isinstance(r, dict) else None
    if not b64:
        return None
    if b64.startswith("data:"):
        b64 = b64.split(",", 1)[1]
    return base64.b64decode(b64)


def uret(prompt, cikti, tohum=0, w=1344, h=768, timeout=180):
    """Sırayla modelleri dener. 'cloudflare:<model>' | None. Kota/yetki hatasında model bu çalıştırmada kapanır."""
    hesap, token = _hesap()
    if not (hesap and token):
        return None
    for model in MODELLER:
        if model in _KAPALI:
            continue
        veri, tur = _istek(model, prompt, w, h, tohum)
        req = urllib.request.Request(f"https://api.cloudflare.com/client/v4/accounts/{hesap}/ai/run/{model}",
                                     data=veri, headers={"Authorization": f"Bearer {token}", "Content-Type": tur})
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                ham = _goruntu(r.read(), r.headers.get("Content-Type", ""))
        except urllib.error.HTTPError as he:
            try:
                govde = he.read().decode()[:200]
            except Exception:
                govde = ""
            print(f"      (Cloudflare [{model}] HTTP {he.code}: {govde})")
            if he.code in (401, 403, 429) or re.search(r"allocation|quota|limit|4006", govde, re.I):
                _KAPALI.add(model)
                print(f"      (Cloudflare [{model}] bu çalıştırmada kapatıldı: kota/yetki)")
            continue
        except Exception as e:
            print(f"      (Cloudflare [{model}] atlandı: {str(e)[:120]})")
            continue
        if not ham or len(ham) < 1000:
            print(f"      (Cloudflare [{model}] boş yanıt)")
            continue
        os.makedirs(os.path.dirname(cikti) or ".", exist_ok=True)
        with open(cikti, "wb") as f:
            f.write(ham)
        return f"cloudflare:{model.rsplit('/', 1)[-1]}"
    return None
