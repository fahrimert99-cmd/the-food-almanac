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


_UYARILDI = set()


def _uyar(neden):
    if neden not in _UYARILDI:
        _UYARILDI.add(neden)
        print(f"::warning::Cloudflare görsel yedeği kullanılamıyor: {neden}")


def _hesap():
    """(hesap_id, token). Secret'a yanlışlıkla 'curl ...' komutu yapıştırıldıysa içinden ayıklar; hesap kimliği
    32 haneli onaltılık değilse ('Could not route to /accounts/curl...' 404'ü) Cloudflare hiç denenmez."""
    ham_h = os.environ.get("CLOUDFLARE_ACCOUNT_ID") or ""
    ham_t = os.environ.get("CLOUDFLARE_API_TOKEN") or ""
    if not ham_h.strip() or not ham_t.strip():
        return "", ""
    m = re.search(r"\b[0-9a-f]{32}\b", ham_h, re.I)
    if not m:
        _uyar("CLOUDFLARE_ACCOUNT_ID 32 haneli hesap kimliği değil (Cloudflare panelinde Account ID; "
              "'curl ...' komutu değil) — secret'ı düzeltin")
        return "", ""
    t = re.search(r"Bearer\s+([A-Za-z0-9_\-]{20,})", ham_t)
    token = t.group(1) if t else re.sub(r"\s", "", ham_t)
    if not re.fullmatch(r"[A-Za-z0-9_\-]{20,}", token):
        _uyar("CLOUDFLARE_API_TOKEN geçerli bir API token'ı gibi görünmüyor — secret'ı düzeltin")
        return "", ""
    return m.group(0).lower(), token


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
            if he.code in (400, 404) and re.search(r"7003|7000|Could not route|No route", govde):
                _KAPALI.update(MODELLER)                       # adres/hesap hatası: hiçbir model çalışmaz
                _uyar(f"adres/hesap hatası (HTTP {he.code}) — CLOUDFLARE_ACCOUNT_ID'yi kontrol edin")
                return None
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
