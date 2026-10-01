#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Uzun "tüketici belgeseli" görselleri (rakip referansı: BİM/IKEA videoları).

- sahne_gorselleri(): her sahne için yapay zekâ ile fotoğraf gerçekliğinde
  sinematik görsel (NVIDIA FLUX -> Pollinations yedeği), ardından renk/gren
  işlemi; tarihî sahnelerde eski film görünümü (vinyet, gren, çizik) ve sağ
  altta kanal avatarı.
- kapak(): AI arka plan + solda iki satır Anton yazı (üst satır kırmızı
  etiket, alt satır kalın beyaz/siyah kontur) + kırmızı ok.
Görsel üretilemezse önceki başarılı görsel farklı kadrajla tekrar kullanılır;
hiç yoksa koyu degrade kart döner (render asla durmaz).
"""
from __future__ import annotations

import os
import random
from concurrent.futures import ThreadPoolExecutor

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

FONT_ANTON = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "font", "Anton-Regular.ttf")
FONT_YEDEK = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
AVATAR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "marka", "avatar.png")
KIRMIZI = (214, 32, 39)
STIL_EK = ("photorealistic cinematic documentary still, 35mm film look, natural "
           "lighting, shallow depth of field, rich detail, no watermark")
ARSIV_EK = "photographed in the early 2000s, documentary archival photo"


def _font(boy):
    try:
        return ImageFont.truetype(FONT_ANTON, boy)
    except Exception:
        return ImageFont.truetype(FONT_YEDEK, boy)


def _kapla(im, W, H):
    """Görseli W x H'yi tamamen kaplayacak şekilde ölçekleyip ortadan kırpar."""
    return ImageOps.fit(im.convert("RGB"), (W, H), Image.LANCZOS)


def _gren(im, guc):
    gurultu = Image.effect_noise(im.size, 64).convert("RGB")
    return Image.blend(im, gurultu, guc)


def _vinyet(im, guc):
    W, H = im.size
    maske = Image.new("L", (W, H), 0)
    ImageDraw.Draw(maske).ellipse((-W * 0.15, -H * 0.2, W * 1.15, H * 1.2), fill=255)
    maske = maske.filter(ImageFilter.GaussianBlur(min(W, H) * 0.18))
    koyu = Image.new("RGB", (W, H), (0, 0, 0))
    return Image.composite(im, Image.blend(im, koyu, guc), maske)


def sinematik(im):
    """Güncel sahne: hafif kontrast + sıcak ton + ince gren."""
    im = ImageEnhance.Contrast(im).enhance(1.10)
    im = ImageEnhance.Color(im).enhance(0.92)
    sicak = Image.new("RGB", im.size, (255, 170, 90))
    im = Image.blend(im, sicak, 0.05)
    return _vinyet(_gren(im, 0.035), 0.35)


def arsiv(im, tohum=0):
    """Tarihî sahne: soluk renk, kuvvetli vinyet, gren ve dikey çizikler."""
    im = ImageEnhance.Color(im).enhance(0.35)
    im = ImageEnhance.Contrast(im).enhance(0.92)
    im = Image.blend(im, Image.new("RGB", im.size, (120, 100, 70)), 0.10)
    im = _gren(im, 0.09)
    d = ImageDraw.Draw(im)
    r = random.Random(tohum)
    W, H = im.size
    for _ in range(r.randint(2, 5)):
        x = r.randint(0, W)
        d.line((x, 0, x + r.randint(-6, 6), H), fill=(225, 225, 215), width=1)
    return _vinyet(im, 0.75)


def _avatar_ekle(im):
    if not os.path.exists(AVATAR):
        return im
    W, H = im.size
    a = Image.open(AVATAR).convert("RGBA")
    boy = int(H * 0.075)
    a = a.resize((boy, boy), Image.LANCZOS)
    im = im.convert("RGBA")
    # Ken Burns yakınlaştırması kenarları kırpar: avatar güvenli alanda kalsın.
    im.alpha_composite(a, (W - boy - int(W * 0.085), H - boy - int(H * 0.10)))
    return im.convert("RGB")


def _kart(W, H):
    im = Image.new("RGB", (W, H), (14, 16, 22))
    ust = Image.new("RGB", (W, H), (40, 44, 58))
    maske = Image.linear_gradient("L").resize((W, H))
    return Image.composite(im, ust, maske)


# Gemini görsel modelleri (sıra önemli). Ücretsiz katmanda kota 0: Google
# projesinde faturalandırma açılınca kendiliğinden devreye girer; kota hatası
# alınca o koşuda bir daha denenmez ve NVIDIA/Pollinations'a düşülür.
GEMINI_GORSEL_MODELLER = [m.strip() for m in (os.environ.get("GEMINI_GORSEL_MODELLER") or
                          "gemini-3.1-flash-image,gemini-3-pro-image").split(",") if m.strip()]
_GEMINI_OLU = set()  # bu koşuda kota/yetki hatası veren anahtarlar


def _gemini_anahtarlar():
    """Görsel için denenecek anahtarlar. Önce GEMINI_IMAGE_API_KEY: faturalandırması
    açık AYRI projenin anahtarı (Shorts'un ücretsiz anahtarları ücretli olmasın)."""
    import json
    out = []
    for ad in ("GEMINI_IMAGE_API_KEY", "GEMINI_KEY_UZUN", "GEMINI_API_KEY", "GEMINI_KEY"):
        raw = (os.environ.get(ad) or "").strip()
        if raw.startswith("{"):
            try:
                raw = (json.loads(raw).get("gemini") or "").strip()
            except Exception:
                raw = ""
        if raw and raw not in out:
            out.append(raw)
    return out


def _gemini_gorsel(prompt, yol):
    """Gemini ile 16:9 görsel; başarısızsa None. Kotası 0 olan (faturalandırması
    kapalı) anahtar o koşuda bir daha denenmez; hepsi öyleyse NVIDIA'ya düşülür."""
    import base64, json, urllib.error, urllib.request
    for key in _gemini_anahtarlar():
        if key in _GEMINI_OLU:
            continue
        for model in GEMINI_GORSEL_MODELLER:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
            body = {"contents": [{"parts": [{"text": "Generate an image: " + prompt}]}],
                    "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}}}
            try:
                req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                             headers={"Content-Type": "application/json"})
                with urllib.request.urlopen(req, timeout=150) as r:
                    d = json.loads(r.read().decode())
                for c in d.get("candidates", []):
                    for part in (c.get("content") or {}).get("parts", []):
                        inl = part.get("inlineData") or part.get("inline_data")
                        if inl and inl.get("data"):
                            with open(yol, "wb") as f:
                                f.write(base64.b64decode(inl["data"]))
                            return yol
            except urllib.error.HTTPError as e:
                govde = e.read().decode(errors="replace")
                if e.code in (401, 403) or (e.code == 429 and "limit: 0" in govde):
                    _GEMINI_OLU.add(key)
                    print(f"      (Gemini görsel: bir anahtar kapalı — HTTP {e.code}, faturalandırma/kota)")
                    break  # bu anahtarın diğer modelleri de aynı projede: sonraki anahtara geç
            except Exception as e:
                print(f"      (Gemini görsel [{model}] hata: {str(e)[:80]})")
    return None


CF_MODEL = os.environ.get("CF_GORSEL_MODEL", "").strip() or "@cf/black-forest-labs/flux-1-schnell"
_CF_KAPALI = False


def _cloudflare_gorsel(prompt, yol):
    """Cloudflare Workers AI (FLUX schnell; günlük ücretsiz kota). CF_API_TOKEN +
    CF_ACCOUNT_ID gerekir. Yetki/kota hatasında o koşuda bir daha denenmez."""
    global _CF_KAPALI
    token = (os.environ.get("CF_API_TOKEN") or "").strip()
    hesap = (os.environ.get("CF_ACCOUNT_ID") or "").strip()
    if _CF_KAPALI or not (token and hesap):
        return None
    import base64, json, urllib.error, urllib.request
    url = f"https://api.cloudflare.com/client/v4/accounts/{hesap}/ai/run/{CF_MODEL}"
    # schnell kare (1024) üretir; 16:9'a kırpılacağı için yatay kompozisyon iste
    body = {"prompt": (prompt + ", wide horizontal composition, subject centered")[:2000], "steps": 8}
    try:
        req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                     headers={"Authorization": f"Bearer {token}",
                                              "Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=120) as r:
            d = json.loads(r.read().decode())
        b64 = (d.get("result") or {}).get("image")
        if b64:
            with open(yol, "wb") as f:
                f.write(base64.b64decode(b64))
            return yol
    except urllib.error.HTTPError as e:
        if e.code in (401, 403, 429):
            _CF_KAPALI = True
            print(f"      (Cloudflare görsel kapalı: HTTP {e.code} — anahtar/günlük kota)")
    except Exception as e:
        print(f"      (Cloudflare görsel hata: {str(e)[:80]})")
    return None


def _uret(prompt, yol):
    # Sıra: Gemini (faturalıysa) -> Cloudflare (ücretsiz kota) -> NVIDIA -> Pollinations
    if _gemini_gorsel(prompt, yol) or _cloudflare_gorsel(prompt, yol):
        return yol
    try:
        import nvidia_araclar as NA
        return NA.gorsel_uret(prompt, yol, genislik=1344, yukseklik=768)
    except Exception as e:
        print(f"      AI görsel hata: {str(e)[:80]}")
        return None


def sahne_gorselleri(sahneler, boyut, tmp, paralel=3):
    """Her sahne için bir ('image', yol) döndürür (sahne sayısı korunur)."""
    W, H = boyut
    isler = []
    for i, s in enumerate(sahneler):
        p = (s.get("gorsel_prompt") or s.get("gorsel") or "").strip() or "documentary scene"
        ek = f"{ARSIV_EK}, {STIL_EK}" if s.get("arsiv") else STIL_EK
        isler.append((i, f"{p}, {ek}", os.path.join(tmp, f"ai_{i:03d}.jpg")))

    def _is(a):
        i, p, yol = a
        sonuc = _uret(p, yol)
        if not sonuc:  # sadeleştirilmiş promptla bir kez daha (önceki kareyi tekrar kullanmaktan iyi)
            sonuc = _uret(", ".join(p.split(", ")[:2]) + ", photorealistic", yol)
        print(f"      Sahne {i + 1}/{len(isler)}: {'AI görsel ✓' if sonuc else 'üretilemedi'}")
        return i, sonuc

    with ThreadPoolExecutor(max_workers=max(1, paralel)) as ex:
        ham = dict(ex.map(_is, isler))

    cikti, son_iyi = [], None
    for i, s in enumerate(sahneler):
        kaynak = ham.get(i)
        try:
            im = Image.open(kaynak).convert("RGB") if kaynak else None
        except Exception:
            im = None
        if im is not None:
            son_iyi = im
        elif son_iyi is not None:
            # Yedek: önceki görselin farklı bir kadrajı (aynı kare tekrarlanmasın).
            w, h = son_iyi.size
            im = son_iyi.crop((w * 0.12, h * 0.12, w * 0.92, h * 0.92))
        else:
            im = _kart(W, H)
        im = _kapla(im, W, H)
        im = arsiv(im, i) if s.get("arsiv") else sinematik(im)
        im = _avatar_ekle(im)
        yol = os.path.join(tmp, f"sahne_{i:03d}.jpg")
        im.save(yol, quality=92)
        cikti.append(("image", yol))
    basarili = sum(1 for v in ham.values() if v)
    print(f"      AI görsel: {basarili}/{len(sahneler)} üretildi")
    return cikti


def _konturlu_yazi(d, xy, metin, font, dolgu, kontur, kalinlik):
    d.text(xy, metin, font=font, fill=dolgu, stroke_width=kalinlik, stroke_fill=kontur)


def _konu_kutusu(im, x_bas):
    """x_bas'ın sağındaki en parlak bölgenin kutusu (kapakta konunun yeri)."""
    W, H = im.size
    # Alt %28 hariç: zemindeki yansıma konu kutusunu ekranın altına uzatmasın.
    l = im.convert("L").crop((x_bas, 0, W, int(H * 0.72)))
    esik = sorted(l.getdata())[int(l.width * l.height * 0.985)]  # en parlak %1,5 (çekirdek, hale değil)
    if esik < 60:
        return None
    # MinFilter: tek tük parlak pikselleri (yansıma kırıntısı, gren) ayıkla
    k = l.point(lambda v: 255 if v >= esik else 0).filter(ImageFilter.MinFilter(3)).getbbox()
    return (k[0] + x_bas, k[1], k[2] + x_bas, k[3]) if k else None


def _ok(d, bas, son, renk=KIRMIZI, kalinlik=14, uc=46):
    """bas -> son yönünde kalın ok (uç son noktada)."""
    import math
    a = math.atan2(son[1] - bas[1], son[0] - bas[0])
    gx, gy = son[0] - uc * 0.8 * math.cos(a), son[1] - uc * 0.8 * math.sin(a)
    d.line((bas[0], bas[1], gx, gy), fill=renk, width=kalinlik)
    sol_k = (son[0] - uc * math.cos(a - 0.5), son[1] - uc * math.sin(a - 0.5))
    sag_k = (son[0] - uc * math.cos(a + 0.5), son[1] - uc * math.sin(a + 0.5))
    d.polygon([son, sol_k, sag_k], fill=renk)


def kapak(arka_prompt, ust, alt, cikti="output/uzun_kapak.jpg", W=1280, H=720, arka_yol=None,
          hazir=False):
    """Rakip tarzı kapak. arka_yol verilirse AI çağrılmaz.
    hazir=True: arka_yol zaten işlenmiş (kontrast + sol karartma uygulanmış) bir
    kapak zeminidir; yalnızca yazı ve ok basılır."""
    os.makedirs(os.path.dirname(cikti) or ".", exist_ok=True)
    bg = None
    if not arka_yol and arka_prompt:
        arka_yol = _uret(f"{arka_prompt}, {STIL_EK}, dramatic moody lighting, "
                         "main subject on the right side, darker empty left side",
                         os.path.splitext(cikti)[0] + "_bg.jpg")
    if arka_yol:
        try:
            bg = Image.open(arka_yol)
        except Exception:
            bg = None
    im = _kapla(bg, W, H) if bg else _kart(W, H)
    if hazir and bg:
        return _kapak_yaz(im, ust, alt, cikti, W, H)
    im = ImageEnhance.Contrast(im).enhance(1.18)
    im = ImageEnhance.Color(im).enhance(1.15)
    # Sol tarafı koyulaştır: yazı her arka planda okunsun.
    maske = Image.linear_gradient("L").rotate(90, expand=True).resize((W, H))
    im = Image.composite(im, Image.new("RGB", (W, H), (0, 0, 0)),
                         maske.point(lambda v: min(255, int(v * 1.6 + 40))))
    return _kapak_yaz(im, ust, alt, cikti, W, H)


def _kapak_yaz(im, ust, alt, cikti, W, H):
    """İşlenmiş zemine üst/alt satırı ve oku basar."""
    arka = im.copy()  # yazısız hâl: ok için konunun yeri buradan bulunur
    d = ImageDraw.Draw(im)
    ust, alt = (ust or "").strip().upper(), (alt or "").strip().upper()
    sol = int(W * 0.045)
    # Üst satır: kırmızı etiket içinde beyaz yazı
    f1 = _font(int(H * 0.20))
    while f1.size > 40 and d.textlength(ust, font=f1) > W * 0.52:
        f1 = _font(f1.size - 6)
    b = d.textbbox((0, 0), ust, font=f1)
    tw, th = b[2] - b[0], b[3] - b[1]
    y1 = int(H * 0.12)
    pad = int(f1.size * 0.12)
    d.rectangle((sol - pad, y1 - pad, sol + tw + pad, y1 + th + pad * 1.6), fill=KIRMIZI)
    _konturlu_yazi(d, (sol - b[0], y1 - b[1]), ust, f1, (255, 255, 255), (120, 0, 0), 2)
    # Alt satır: dev beyaz yazı, kalın siyah kontur + gölge
    f2 = _font(int(H * 0.30))
    while f2.size > 40 and d.textlength(alt, font=f2) > W * 0.52:
        f2 = _font(f2.size - 6)
    b2 = d.textbbox((0, 0), alt, font=f2)
    y2 = y1 + th + pad * 3
    golge = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(golge).text((sol - b2[0] + 8, y2 - b2[1] + 10), alt, font=f2, fill=(0, 0, 0, 200))
    im = Image.alpha_composite(im.convert("RGBA"), golge.filter(ImageFilter.GaussianBlur(6))).convert("RGB")
    d = ImageDraw.Draw(im)
    _konturlu_yazi(d, (sol - b2[0], y2 - b2[1]), alt, f2, (255, 255, 255), (0, 0, 0), max(4, f2.size // 22))
    # Kırmızı ok: konunun ÜSTÜNE değil, ona doğru (ilk önizlemede ok "A101"
    # yazısının üstüne binmişti). Konu = yazının sağındaki en parlak bölge.
    yazi_sag = sol + max(tw, b2[2] - b2[0]) + int(W * 0.02)
    konu = _konu_kutusu(arka, yazi_sag) if arka is not None else None
    if konu:
        kx0, ky0, kx1, ky1 = konu
        kcx = (kx0 + kx1) // 2
        if ky1 + 150 < H - 15:            # altında yer var: aşağıdan konuya
            _ok(d, (kcx - 70, ky1 + 150), (kcx - 10, ky1 + 18))
        elif kx0 - yazi_sag > 150:         # solunda yer var: soldan konuya
            kcy = (ky0 + ky1) // 2
            _ok(d, (kx0 - 150, kcy + 50), (kx0 - 18, kcy + 5))
        # yer yoksa ok çizilmez (konunun üstüne binmesindense hiç olmasın)
    im.save(cikti, quality=93)
    return cikti
