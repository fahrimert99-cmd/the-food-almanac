#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Sahne görselleri: NVIDIA FLUX gravür illüstrasyonları (yedek: Gemini, Pollinations).

  python3 uzun_en/araclar/gorsel.py --proje SLUG                     # eksik görselleri (ve kapak arka planını) üret
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43          # tek sahne için ADAY üret (NN.aday.jpg)
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43 --aciklama "..." --tohum 7
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43 --kabul  # adayı kalıcı yap

Görseller projeler/SLUG/images/ altına yazılır (git'e girmez; GitHub sürümünde arşivlenir), uretim.json
hangi tarifle ve hangi sağlayıcıyla üretildiklerini tutar. Kart/grafik sahnelerinde görsel yoktur: yazılar ve
sayılar AI'a çizdirilmez, Remotion'da kodla çizilir.
"""
import argparse, base64, concurrent.futures as cf, hashlib, json, os, re, shutil, sys, threading, time
import urllib.error, urllib.parse, urllib.request

from PIL import Image, ImageStat

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

W, H = 1920, 1080
# Görsel dili: eski bilim kitabı gravürü (taramalı mürekkep + suluboya), kâğıt zemin. Her parça NVIDIA
# filtresinde denendi: renk listeleri filtreye takılıyor, "callout lines" görsele sayı/etiket ekletiyor.
STIL = ("Vintage hand-colored engraving illustration in the style of an old science book: fine black "
        "pen-and-ink linework with cross-hatching and stippling, soft watercolor tints, clean "
        "off-white paper background, clean educational layout, crisp high detail, 16:9 landscape.")
# NVIDIA FLUX güvenlik filtresi "gore", "anatomy" gibi kelimelerde (olumsuz cümlede bile) simsiyah döndürür.
YASAK = ("Absolutely no text, no letters, no words, no numbers, no labels, no captions, no title, "
         "no watermark, no logo, no chemical formula letters, no photograph, no 3D render.")
SAG_BOS = (" Composition: the main illustration fills the left two-thirds of the page, the right "
           "third is left as empty off-white paper.")
KAPAK_YER = (" Composition: the main subject is large and fills the right half of the page, the left half "
             "is left as plain empty off-white paper.")
GEMINI_MODEL = os.environ.get("UZUN_GEMINI_IMAGE_MODEL", "").strip() or "gemini-2.5-flash-image"
PUAN = {"elle": 100, "nvidia": 90, "gemini": 90, "pollinations": 30, "yedek": 0}
_KAPALI = set()
_NVIDIA_HATA = [0]
_kilit = threading.Lock()


def _hash(*p):
    return hashlib.sha1("\x1f".join(str(x) for x in p).encode()).hexdigest()[:16]


def puan(kaynak):
    return PUAN.get((kaynak or "").split(":")[0], 0)


def _kapat(ad, neden):
    with _kilit:
        if ad not in _KAPALI:
            _KAPALI.add(ad)
            O.log(f"   ! {ad} bu çalıştırmada devre dışı: {neden}")


def _bos_mu(yol):
    """Filtreye takılınca dönen düz siyah/tek renk görseli yakalar."""
    try:
        st = ImageStat.Stat(Image.open(yol).convert("L").resize((64, 36)))
        return st.stddev[0] < 4 or st.mean[0] < 6
    except Exception:
        return True


def _guvenli_prompt(prompt):
    """Filtreye takılan tarif için ikinci deneme: kan/yara çağrışımlı kelimeler yumuşatılır."""
    yeni = prompt
    for a, b in (("anatomical ", ""), ("anatomy", "natural history"),
                 ("red blood cells", "small red discs"), ("blood vessel", "tube-shaped vessel"),
                 ("blood sample tubes", "sample tubes"), ("bloodstream", "flowing stream"),
                 ("blood", ""), ("muscle fiber cross-section", "fiber bundle"), ("cut-away", "open")):
        yeni = re.sub(a, b, yeni, flags=re.I)
    return re.sub(r"\s{2,}", " ", yeni)


def _kapla(src, hedef, boyut=(W, H), kalite=92, alt_kirp=0.0):
    im = Image.open(src).convert("RGB")
    if alt_kirp:
        im = im.crop((0, 0, im.width, round(im.height * (1 - alt_kirp))))
    tw, th = boyut
    oran = max(tw / im.width, th / im.height)
    im = im.resize((max(tw, round(im.width * oran)), max(th, round(im.height * oran))), Image.LANCZOS)
    x, y = (im.width - tw) // 2, (im.height - th) // 2
    im.crop((x, y, x + tw, y + th)).save(hedef, "JPEG", quality=kalite)


def _nvidia(prompt, cikti, tohum=0):
    if not re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "") or "nvidia" in _KAPALI:
        return None
    try:
        import nvidia_gorsel as NA
    except Exception as e:
        _kapat("nvidia", f"modül yüklenemedi: {e}")
        return None
    govde = NA._gorsel_govde
    modeller = [NA.GORSEL_MODEL] + ([NA.GORSEL_YEDEK] if NA.GORSEL_YEDEK and NA.GORSEL_YEDEK != NA.GORSEL_MODEL else [])
    for m in modeller:
        for pr in (prompt, _guvenli_prompt(prompt)):
            if tohum:                                          # farklı kompozisyon için FLUX tohumu
                NA._gorsel_govde = lambda mm, p, w, h: dict(govde(mm, p, w, h), seed=tohum)
            try:
                ok = NA._gorsel_tek(m, pr, cikti, 1344, 768, 300)
            finally:
                NA._gorsel_govde = govde
            if not ok:
                break
            if not _bos_mu(cikti):
                _NVIDIA_HATA[0] = 0
                return f"nvidia:{m}"
            O.log(f"      nvidia [{m}] boş/siyah görsel (güvenlik filtresi)" + (" -> yumuşatılmış tarifle tekrar" if pr is prompt else ""))
            os.remove(cikti)
    _NVIDIA_HATA[0] += 1
    if _NVIDIA_HATA[0] >= 5:
        _kapat("nvidia", "art arda 5 görsel başarısız")
    return None


def _gemini(prompt, cikti):
    key = (os.environ.get("GEMINI_API_KEY") or "").strip()
    if not key or "gemini" in _KAPALI:
        return None
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={key}"
    body = {"contents": [{"parts": [{"text": "Generate an image: " + prompt}]}],
            "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}}}
    try:
        req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=180) as r:
            d = json.loads(r.read().decode())
        for cand in d.get("candidates", []):
            for part in cand.get("content", {}).get("parts", []):
                if part.get("inlineData", {}).get("data"):
                    with open(cikti, "wb") as f:
                        f.write(base64.b64decode(part["inlineData"]["data"]))
                    return f"gemini:{GEMINI_MODEL}"
    except urllib.error.HTTPError as he:
        if he.code in (400, 401, 403, 404, 429):          # ücretsiz katmanda kota yok -> bir daha deneme
            _kapat("gemini", f"HTTP {he.code}")
    except Exception as e:
        O.log(f"      gemini hata: {str(e)[:120]}")
    return None


def _pollinations(prompt, cikti, tohum=0):
    if "pollinations" in _KAPALI:
        return None
    url = (f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt[:900], safe='')}"
           f"?width=1344&height=768&nologo=true&model=flux&seed={tohum}")
    for deneme in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "uzun-en/1.0"})
            with urllib.request.urlopen(req, timeout=180) as r:
                ham = r.read()
            if len(ham) > 1500:
                with open(cikti, "wb") as f:
                    f.write(ham)
                return "pollinations"
        except urllib.error.HTTPError as he:
            if he.code in (402, 429, 500, 502, 503) and deneme < 3:
                time.sleep(20 * (deneme + 1))
                continue
            return None
        except Exception:
            if deneme < 3:
                time.sleep(10)
                continue
    return None


def sahne_prompt(sahne):
    yer = SAG_BOS if sahne.get("baslik") else ""
    return f"{sahne['gorsel'].rstrip('.')}.{yer} {STIL} {YASAK}"


def kapak_prompt(proje):
    return f"{proje['kapak']['gorsel'].rstrip('.')}.{KAPAK_YER} {STIL} {YASAK}"


def uret(prompt, hedef, min_puan=-1, tohum=0, sira=None):
    """Sağlayıcı zinciriyle görsel üretir, 1920x1080'e oturtur. Kaynak adı | None (hedef yalnızca başarıda yazılır)."""
    ham = hedef + ".ham"
    sira = sira or [x.strip() for x in (os.environ.get("UZUN_GORSEL_SIRA") or "nvidia,gemini,pollinations").split(",")]
    kaynak, alt_kirp = None, 0.0
    for x in sira:
        if PUAN.get(x, 0) <= min_puan:
            continue
        kaynak = (_nvidia(prompt, ham, tohum) if x == "nvidia" else _gemini(prompt, ham) if x == "gemini"
                  else _pollinations(prompt, ham, tohum) if x == "pollinations" else None)
        if kaynak == "pollinations":
            alt_kirp = 0.07                                   # sağ alttaki filigranı at
        if kaynak and os.path.exists(ham) and os.path.getsize(ham) > 1500 and not _bos_mu(ham):
            break
        kaynak = None
    try:
        if kaynak:
            _kapla(ham, hedef, alt_kirp=alt_kirp)
    except Exception as e:
        O.log(f"      görsel açılamadı ({kaynak}): {e}")
        kaynak = None
    finally:
        if os.path.exists(ham):
            os.remove(ham)
    return kaynak


class Kayit:
    """images/uretim.json: anahtar -> {hash, kaynak}"""

    def __init__(self, yol):
        self.yol = yol
        self.d = O.json_oku(yol, {}) or {}

    def al(self, k):
        return self.d.get(str(k))

    def yaz(self, k, v):
        with _kilit:
            self.d[str(k)] = v
            O.json_yaz(self.yol, self.d)


def hepsi(slug, proje):
    img = os.path.join(O.proje_dir(slug), "images")
    os.makedirs(img, exist_ok=True)
    kay = Kayit(os.path.join(img, "uretim.json"))
    hedefler = [(s["id"], sahne_prompt(s), os.path.join(img, f"{s['id']:02d}.jpg"))
                for s in proje["sahneler"] if s.get("tip", "gorsel") == "gorsel" and s.get("gorsel")]
    if (proje.get("kapak") or {}).get("gorsel"):
        hedefler.append(("kapak", kapak_prompt(proje), os.path.join(img, "kapak.jpg")))
    isler = []
    for k, pr, hedef in hedefler:
        r = kay.al(k)
        if os.path.exists(hedef) and r is None:              # elle konmuş görsel: dokunma
            kay.yaz(k, {"hash": _hash(pr), "kaynak": "elle"})
            continue
        if os.path.exists(hedef) and r and (r.get("kaynak") == "elle" or (r.get("hash") == _hash(pr) and puan(r.get("kaynak")) >= 90)):
            continue
        ayni = os.path.exists(hedef) and r and r.get("hash") == _hash(pr)
        isler.append((k, pr, hedef, puan(r.get("kaynak")) if ayni else -1))
    O.log(f"görseller: {len(hedefler)} hedef, {len(isler)} üretilecek")
    eksik = []

    def is_(x):
        k, pr, hedef, min_p = x
        kaynak = uret(pr, hedef, min_puan=min_p)        # tohum yalnızca tek iş parçacıklı aday aracında
        if kaynak:
            kay.yaz(k, {"hash": _hash(pr), "kaynak": kaynak})
            O.log(f"   ✓ {k} ({kaynak})")
        elif not os.path.exists(hedef):
            eksik.append(k)
            O.log(f"   ✗ {k} üretilemedi")

    paralel = 2 if re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "") else 1
    with cf.ThreadPoolExecutor(max_workers=paralel) as ex:
        list(ex.map(is_, isler))
    dusuk = [k for k, _, h in hedefler if os.path.exists(h) and puan((kay.al(k) or {}).get("kaynak")) < 90]
    O.log(f"görseller bitti: eksik {eksik or 'yok'}, düşük kaliteli {dusuk or 'yok'}")
    return eksik


def aday(slug, proje, n, aciklama, tohum, kabul):
    """Ajanlar için: tek sahnenin görselini yeniden üretip incelemeye sunar (yalnızca NVIDIA)."""
    img = os.path.join(O.proje_dir(slug), "images")
    anahtar = "kapak" if n == 0 else n
    sahne = None if n == 0 else next(s for s in proje["sahneler"] if s["id"] == n)
    ad = "kapak" if n == 0 else f"{n:02d}"
    ay, aym = os.path.join(img, f"{ad}.aday.jpg"), os.path.join(img, f"{ad}.aday.json")
    if kabul:
        if not os.path.exists(ay):
            raise SystemExit("aday yok: önce --kabul olmadan üretin")
        m = O.json_oku(aym, {})
        shutil.move(ay, os.path.join(img, f"{ad}.jpg"))
        os.remove(aym)
        # proje.json'a dokunulmaz (paralel ajanlar çakışmasın): kayıt projedeki tarifin özetini tutar,
        # böylece görsel bir sonraki çalıştırmada yeniden üretilmez; kullanılan yeni tarif ayrıca saklanır.
        pr = kapak_prompt(proje) if sahne is None else sahne_prompt(sahne)
        Kayit(os.path.join(img, "uretim.json")).yaz(anahtar, {"hash": _hash(pr), "kaynak": m.get("kaynak", "nvidia"),
                                                              "aciklama": m.get("aciklama") or None, "tohum": m.get("tohum")})
        O.log(f"kabul edildi: images/{ad}.jpg")
        return
    if not os.environ.get("NVIDIA_API_KEY", "").strip():
        raise SystemExit("NVIDIA_API_KEY yok")
    if sahne is None:
        if aciklama:
            proje = dict(proje, kapak=dict(proje["kapak"], gorsel=aciklama))
        pr = kapak_prompt(proje)
    else:
        pr = sahne_prompt(dict(sahne, gorsel=aciklama) if aciklama else sahne)
    kaynak = uret(pr, ay, tohum=tohum, sira=["nvidia"])
    if not kaynak:
        raise SystemExit("NVIDIA görsel üretemedi (filtre/hata) — tarifi yumuşatıp tekrar deneyin")
    O.json_yaz(aym, {"kaynak": kaynak, "aciklama": aciklama, "tohum": tohum})
    O.log(f"aday: {os.path.relpath(ay, O.REPO)} ({kaynak}) — Read ile inceleyin; uygunsa --kabul")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--sahne", type=int, help="tek sahne adayı (0 = kapak görseli)")
    ap.add_argument("--aciklama", default="", help="yeni İngilizce sahne tarifi (stil/yasak metni otomatik eklenir)")
    ap.add_argument("--tohum", type=int, default=0)
    ap.add_argument("--kabul", action="store_true")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    proje = O.proje(slug)
    if a.sahne is not None:
        return aday(slug, proje, a.sahne, a.aciklama, a.tohum, a.kabul)
    eksik = hepsi(slug, proje)
    sys.exit(1 if eksik else 0)


if __name__ == "__main__":
    main()
