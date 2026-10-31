#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Sahne görselleri: NVIDIA FLUX gravür illüstrasyonları (yedek: Cloudflare FLUX, Gemini, Lemo, Pollinations).

  python3 uzun_en/araclar/gorsel.py --proje SLUG                     # eksik görselleri (ve kapak arka planını) üret
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sadece kapak      # yalnızca tarifi değişen kapak görselini üret
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43          # tek sahne için ADAY üret (NN.aday.jpg)
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43 --aciklama "..." --tohum 7
  python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne 43 --kabul  # adayı kalıcı yap
  python3 uzun_en/araclar/gorsel.py --proje SLUG --kalite            # çıkış 3: görsellerin çoğu yedek kaynaktan/eksik

Görseller projeler/SLUG/images/ altına yazılır (git'e girmez; GitHub sürümünde arşivlenir), uretim.json
hangi tarifle ve hangi sağlayıcıyla üretildiklerini tutar. Kart/grafik sahnelerinde görsel yoktur: yazılar ve
sayılar AI'a çizdirilmez, Remotion'da kodla çizilir.

Lemo yedeği: görsel servisleri üretemezse (slota zaman varken proje gece beklenir; plan.py --gorsel-ertele) eksik sahne
görselleri Pollinations'tan önce Lemo gravür motoruyla kodla çizilir (uzun_en/lemo/levha.mjs; tariften en çok üç nesne,
metinsiz natürmort). Kota gerekmez; kalite kapısı onları yine yedek sayar, kaliteli kaynak dönünce yeniden üretilir.
"""
import argparse, base64, concurrent.futures as cf, hashlib, json, os, re, shutil, subprocess, sys, tempfile, threading, time
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
KAPAK_YER = (" Composition: one compact, roughly square group with the objects overlapping, not spread out in a wide "
             "row; very large and close-up, filling the right half of the frame from top to bottom and slightly cropped "
             "by the right edge; the left half is plain empty pure white background.")
# Kapak, sahnelerden farklı olarak canlı ve doygun renkli: küçük resimde akışta göze çarpmalı (rakip analizi, ilk
# videonun %2,4 tıklama oranı). Zemin saf beyaz; kapak arka planı görselin zemin rengine boyanır.
KAPAK_STIL = ("Bright, vivid hand-painted editorial illustration with bold saturated colors, crisp clean outlines and "
              "soft shading, appetizing and glossy, high contrast, isolated on a plain pure white background, crisp "
              "high detail, 16:9 landscape.")
GEMINI_MODEL = os.environ.get("UZUN_GEMINI_IMAGE_MODEL", "").strip() or "gemini-2.5-flash-image"
PUAN = {"elle": 100, "nvidia": 90, "cloudflare": 90, "gemini": 90, "lemo": 50, "pollinations": 30, "yedek": 0}
ZINCIR = "nvidia,cloudflare,gemini,lemo,pollinations"
LEMO = os.path.join(O.KOK, "lemo")
KALITE_ESIK = 0.2      # görsellerin bundan fazlası eksik ya da yedek kaynaklıysa (NVIDIA/Gemini değil) kalite düşük
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


def _cloudflare(prompt, cikti, tohum=0, w=1344, h=768):
    """NVIDIA çöktüğünde aynı FLUX ailesi (Cloudflare Workers AI, günlük ücretsiz kota)."""
    if "cloudflare" in _KAPALI:
        return None
    try:
        import cloudflare_gorsel as CF
    except Exception as e:
        _kapat("cloudflare", f"modül yüklenemedi: {e}")
        return None
    if not CF.var_mi():
        return None
    for pr in (prompt, _guvenli_prompt(prompt)):
        kaynak = CF.uret(pr, cikti, tohum, w=w, h=h)
        if not kaynak:
            if CF.tukendi():
                _kapat("cloudflare", "günlük kota bitti ya da yetki yok")
            return None
        if not _bos_mu(cikti):
            return kaynak
        O.log(f"      {kaynak} boş/siyah görsel (güvenlik filtresi)" + (" -> yumuşatılmış tarifle tekrar" if pr is prompt else ""))
        os.remove(cikti)
    return None


def _kapla(src, hedef, boyut=(W, H), kalite=92, alt_kirp=0.0):
    im = Image.open(src).convert("RGB")
    if alt_kirp:
        im = im.crop((0, 0, im.width, round(im.height * (1 - alt_kirp))))
    tw, th = boyut
    oran = max(tw / im.width, th / im.height)
    im = im.resize((max(tw, round(im.width * oran)), max(th, round(im.height * oran))), Image.LANCZOS)
    x, y = (im.width - tw) // 2, (im.height - th) // 2
    im.crop((x, y, x + tw, y + th)).save(hedef, "JPEG", quality=kalite)


def _nvidia(prompt, cikti, tohum=0, w=1344, h=768):
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
                ok = NA._gorsel_tek(m, pr, cikti, w, h, 300)
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


# Shorts için dikey (9:16) sahne görseli: aynı tarif ve gravür stili, konu dikey çerçevenin ortasında; üstte başlık,
# altta altyazı için sakin alan. NVIDIA 768x1344 üretir, 1080x1920'ye oturtulur (yatay görseli kırpmaktan çok daha net).
# Shorts'ta üstte başlık, altta altyazı ve YouTube arayüzü var: konu çerçevenin ortasında (yüksekliğin ~%25-65'i), alt üçte
# bir boş kalmalı (kisa.py BANT). Konu yine de aşağıda kalırsa kisa.py dikey_yer görseli yukarı taşır.
DIKEY_YER = (" Composition: tall vertical 9:16 portrait frame, close-up; the main subject is large and centered in the middle "
             "of the frame, between about one quarter and two thirds of its height; the bottom third of the frame is plain empty "
             "surface or soft background with nothing important in it; plain calm background above the subject.")


def dikey_prompt(sahne):
    return f"{sahne['gorsel'].rstrip('.')}.{DIKEY_YER} {STIL} {YASAK}"


def dikey(proje, idler, cikti, img=None):
    """Shorts için seçili sahnelerin dikey görsellerini üretir: cikti/dikey_NN.jpg (1080x1920). Önce NVIDIA (iki tohum),
    olmazsa Cloudflare FLUX; ikisi de olmazsa kisa.py yatay görseli kırpar. Var olan dosyalar yeniden üretilmez.
    Üretilemeyenlerin listesini döndürür."""
    os.makedirs(cikti, exist_ok=True)
    sahneler = {s["id"]: s for s in proje["sahneler"]}
    eksik = []
    for n in idler:
        s = sahneler.get(n)
        if not s or not s.get("gorsel"):
            O.log(f"   ✗ dikey {n}: sahnede görsel tarifi yok")
            eksik.append(n)
            continue
        ham, hedef = os.path.join(cikti, f"dikey_{n:02d}.ham"), os.path.join(cikti, f"dikey_{n:02d}.jpg")
        if os.path.exists(hedef):
            continue
        kaynak = None
        for tohum in (0, 11):
            kaynak = _nvidia(dikey_prompt(s), ham, tohum=tohum, w=768, h=1344)
            if kaynak and os.path.exists(ham) and not _bos_mu(ham):
                break
            kaynak = None
        if not kaynak:
            kaynak = _cloudflare(dikey_prompt(s), ham, w=768, h=1344)
        if kaynak:
            _kapla(ham, hedef, boyut=(1080, 1920))
            O.log(f"   ✓ dikey {n} ({kaynak})")
        else:
            eksik.append(n)
            O.log(f"   ✗ dikey {n} üretilemedi")
        if os.path.exists(ham):
            os.remove(ham)
    # yatay görseli Lemo levhası olan sahnede kırpma levhayı bozar: dikey levha da kodla çizilir
    kay = Kayit(os.path.join(img, "uretim.json")) if img else None
    lem = [n for n in eksik if kay and (kay.al(n) or {}).get("kaynak") == "lemo"]
    if lem:
        ok = lemo_ciz([lemo_is(n, sahneler[n], os.path.join(cikti, f"dikey_{n:02d}.jpg"), w=1080, h=1920) for n in lem])
        for n in lem:
            if os.path.join(cikti, f"dikey_{n:02d}.jpg") in ok:
                eksik.remove(n)
                O.log(f"   ✓ dikey {n} (lemo)")
    return eksik


def kapak_prompt(proje):
    return f"{proje['kapak']['gorsel'].rstrip('.')}.{KAPAK_YER} {KAPAK_STIL} {YASAK}"


def uret(prompt, hedef, min_puan=-1, tohum=0, sira=None):
    """Sağlayıcı zinciriyle görsel üretir, 1920x1080'e oturtur. Kaynak adı | None (hedef yalnızca başarıda yazılır)."""
    ham = hedef + ".ham"
    sira = zincir() if sira is None else sira
    kaynak, alt_kirp = None, 0.0
    for x in sira:
        if PUAN.get(x, 0) <= min_puan or x == "lemo":     # lemo tek tek değil, hepsi() içinde toplu çizilir
            continue
        kaynak = (_nvidia(prompt, ham, tohum) if x == "nvidia" else _cloudflare(prompt, ham, tohum) if x == "cloudflare"
                  else _gemini(prompt, ham) if x == "gemini"
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


def zincir():
    return [x.strip() for x in (os.environ.get("UZUN_GORSEL_SIRA") or ZINCIR).split(",") if x.strip()]


# ------------------------------------------------------------------ Lemo yedeği: görseli kodla çizilen gravür levhası
# Sahne tarifindeki nesneler (ilk geçtiği sırayla, en çok üç) levha.js'in figürlerine eşlenir; eşleşme yoksa levha
# yapraklı bir dal çizer. Desenler sırayla denenir ve önce gelen (daha özel) desenin aldığı sözcükler sonrakilere sayılmaz:
# "magnifying glass" bardak, "quarter cup measure" fincan olmaz. Kap desenleri içeriğini de alır ("walnut halves in a bowl",
# "scale holding walnuts", "cup measure of walnut halves"): içerik kabın içinde çizilir, ayrı nesne olmaz. Çeşidi "*" olan
# desenin çeşidi ilk grubundan, ICERIK sözlüğüyle gelir.
_IC = r"(walnut halves|walnuts?|nuts|almonds|pecans|prunes?|plums|blueberries|berries|eggs?|oatmeal|oats|beans|lentils|yog(?:h)?urt|capsules|pills|tablets|rice|cereal)"
ICERIK = {"walnut": "walnuts", "nut": "walnuts", "almond": "walnuts", "pecan": "walnuts", "prune": "prunes", "plum": "prunes",
          "blueberr": "berries", "berr": "berries", "egg": "eggs", "oat": "oats", "bean": "beans", "lentil": "beans",
          "yog": "yogurt", "capsule": "pills", "pill": "pills", "tablet": "pills", "rice": "rice", "cereal": "cereal"}
LEMO_SOZLUK = [
    (r"magnifying glass|magnifier|\bloupe\b", "magnifier", None),
    (r"tape measure|measuring tape", "tape", None),
    (r"(?:cup measure|measuring cup|measuring jug)(?:\s+(?:of|with|filled with|holding))?(?:\s+\w+){0,2}?\s+" + _IC, "measure", "*"),
    (r"cup measure|measuring cups?|measuring jug", "measure", None),
    (r"paper (?:pill )?bags?|paper towels?", None, None),            # yalnızca sözcükleri tüketir: "paper" defter olmasın
    (r"bathroom scale|weighing scale|scale with (?:a )?(?:blank )?dial", "dial", None),
    (r"scales?\b[^.]{0,40}?\b(?:pan|tray)\s+(?:holding|with)(?:\s+\w+){0,2}?\s+" + _IC, "scale", "*"),
    (r"scales?\s+(?:holding|with|carrying)(?:\s+\w+){0,4}?\s+" + _IC, "scale", "*"),
    (r"balance|scales?\b", "scale", None),
    (r"(?:bowl|dish)\s+(?:of|with|filled with|full of|holding)(?:\s+\w+){0,2}?\s+" + _IC, "bowl", "*"),
    (_IC + r"(?:\s+\w+){0,3}?\s+in\s+(?:a|the|one|two)(?:\s+\w+)?\s+(?:bowl|dish)", "bowl", "*"),
    (r"\boat(?:meal|s)?\b|porridge", "bowl", "oats"), (r"yog(?:h)?urt", "bowl", "yogurt"), (r"cereal", "bowl", "cereal"),
    (r"soup|stew", "bowl", "soup"), (r"beans?\b|lentils?|chickpeas?", "bowl", "beans"), (r"\brice\b", "bowl", "rice"),
    (r"berr(?:y|ies)", "berries", None), (r"bowls?\b", "bowl", None),
    (r"(?:plate|platter)\s+(?:of|with)(?:\s+\w+){0,2}?\s+" + _IC, "plate", "*"),
    (r"\bplates?\b|\bplatters?\b|meal trays?|\bdish\b|\bmeals?\b", "plate", None),
    (r"kefir", "glass", "kefir"), (r"\bmilk\b", "glass", "milk"), (r"juice", "glass", "juice"), (r"smoothie", "glass", "smoothie"),
    (r"glass(?:es)?\b", "glass", "water"), (r"coffee|espresso|decaf", "cup", "coffee"), (r"\btea\b", "cup", "tea"),
    (r"\bmugs?\b|\bcups?\b", "cup", "coffee"), (r"olive oil|cruet|\boil\b", "bottle", "oil"), (r"vinegar", "bottle", "vinegar"),
    (r"pill bottle|supplement bottle|bottles? of (?:capsules|pills|tablets)|bottles\b", "bottle", "pills"), (r"bottle", "bottle", None),
    (r"\bjars?\b|honey", "jar", None), (r"capsules?", "pills", "capsule"),
    (r"\bpills?\b|tablets?|supplements?|vitamins?|medication", "pills", "tablet"), (r"garlic|onions?", "garlic", None),
    (r"\bkale\b", "leaves", "kale"), (r"spinach|leafy|greens\b|lettuce|leaves|\bleaf\b|herbs?\b", "leaves", None),
    (r"broccoli", "broccoli", None), (r"grapefruit", "fruit", "grapefruit"), (r"oranges?\b", "fruit", "orange"),
    (r"lemons?\b|limes?\b", "fruit", "lemon"), (r"apples?\b", "fruit", "apple"), (r"beet(?:root)?s?\b", "fruit", "beet"),
    (r"prunes?\b|plums?\b", "fruit", "prune"), (r"tomato(?:es)?", "fruit", "tomato"), (r"peach(?:es)?", "fruit", "peach"),
    (r"fruits?\b", "fruit", None), (r"\beggs?\b", "egg", None), (r"walnuts?|\bnuts?\b|almonds?|pecans?", "walnut", None),
    (r"salmon|sardines?|\bfish\b|mackerel", "fish", None), (r"bread|toast|\bloaf\b|whole.?grains?", "bread", None),
    (r"\bbones?\b|skeleton", "bone", None), (r"turmeric", "root", "turmeric"), (r"ginger|\broots?\b", "root", "ginger"),
    (r"test tubes?|sample tubes?|laboratory|\blab\b|\btubes?\b", "tubes", None),
    (r"(?:stack|stacks|pile|piles)\s+of(?:\s+\w+){0,2}?\s+(?:folders|files|papers|books|notebooks)", "notebook", "stack"),
    (r"notebooks?|\bbooks?\b|journal|\bfiles?\b|folders?|papers?\b|clipboard|calendar", "notebook", None), (r"spoons?\b", "spoon", None),
]


def _icerik(sozcuk):
    s = (sozcuk or "").lower()
    return next((v for k, v in ICERIK.items() if s.startswith(k)), None)


def lemo_nesneler(tarif, en_cok=3):
    """Sahne tarifindeki çizilebilir nesneler: [[ad, çeşit], …], tarifte geçtiği sırayla, her addan bir tane. Önce gelen
    desenin aldığı sözcükler sonrakilere sayılmaz; aynı nesnenin çeşidi en özel desenden gelir ("a glass of milk": süt)."""
    t, alinan, secilen = (tarif or "").lower(), [], {}
    for i, (desen, ad, cesit) in enumerate(LEMO_SOZLUK):
        for m in re.finditer(desen, t):
            if any(m.start() < b and a < m.end() for a, b in alinan):
                continue
            alinan.append((m.start(), m.end()))
            if ad is None:
                continue
            c = _icerik(m.group(1)) if cesit == "*" else cesit
            s = secilen.get(ad)
            if s is None:
                secilen[ad] = [m.start(), c, i]
            else:
                s[0] = min(s[0], m.start())
                if c and (s[1] is None or i < s[2]):
                    s[1], s[2] = c, i
    return [[ad, s[1]] for ad, s in sorted(secilen.items(), key=lambda e: e[1][0])][:en_cok]


def lemo_is(anahtar, sahne, cikti, w=W, h=H):
    return {"cikti": cikti, "w": w, "h": h, "nesneler": lemo_nesneler(sahne.get("gorsel", "")),
            "tohum": int(anahtar) if str(anahtar).isdigit() else 1, "sag_bos": bool(sahne.get("baslik")) and w > h}


def _lemo_hazir():
    if os.path.isdir(os.path.join(LEMO, "node_modules", "playwright-core")):
        return True
    if not shutil.which("npm"):
        return False
    r = subprocess.run(["npm", "ci", "--prefix", LEMO, "--no-audit", "--no-fund", "--loglevel=error"],
                       capture_output=True, text=True, timeout=600)
    if r.returncode:
        O.log(f"      lemo: npm ci başarısız: {(r.stderr or r.stdout).strip()[-300:]}")
    return r.returncode == 0


def lemo_ciz(isler):
    """Lemo levhalarını çizer; başarıyla yazılan çıktı yollarının kümesini döndürür."""
    if not isler or "lemo" in _KAPALI:
        return set()
    if not shutil.which("node") or not _lemo_hazir():
        _kapat("lemo", "node ya da playwright-core yok")
        return set()
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as f:
        json.dump(isler, f)
    try:
        r = subprocess.run(["node", os.path.join(LEMO, "levha.mjs"), f.name], capture_output=True, text=True,
                           timeout=60 + 30 * len(isler))
    except subprocess.TimeoutExpired:
        O.log("      lemo: zaman aşımı")
        return set()
    finally:
        os.remove(f.name)
    ok = set()
    for satir in r.stdout.splitlines():
        try:
            ok.add(json.loads(satir)["cikti"])
        except (ValueError, KeyError, TypeError):
            pass
    if r.returncode:
        O.log(f"      lemo: {len(isler) - len(ok)} levha çizilemedi: {r.stderr.strip()[-300:]}")
    return {p for p in ok if os.path.exists(p) and os.path.getsize(p) > 1500}


def _cf_var():
    return any(re.sub(r"\s", "", os.environ.get(f"CLOUDFLARE_ACCOUNT_ID{ek}") or "")
               and re.sub(r"\s", "", os.environ.get(f"CLOUDFLARE_API_TOKEN{ek}") or "") for ek in ("", "_2", "_3"))


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


def _hedefler(proje, img):
    hedefler = [(s["id"], sahne_prompt(s), os.path.join(img, f"{s['id']:02d}.jpg"))
                for s in proje["sahneler"] if s.get("tip", "gorsel") == "gorsel" and s.get("gorsel")]
    if (proje.get("kapak") or {}).get("gorsel"):
        hedefler.append(("kapak", kapak_prompt(proje), os.path.join(img, "kapak.jpg")))
    return hedefler


def _zayif(kay, k, hedef):
    """Eksik ya da yedek kaynaktan (pollinations) gelmiş görsel mi? Elle konanlar hiçbir zaman zayıf sayılmaz."""
    r = kay.al(k) or {}
    return not os.path.exists(hedef) or (r.get("kaynak") != "elle" and puan(r.get("kaynak")) < 90)


def kalite(slug, proje):
    """Görsellerin kaçı eksik/yedek kaynaklı? Oran KALITE_ESIK'i aşarsa ya da kapak görseli yedek kaynaklıysa 3 ile
    çıkar (iş akışı aşamayı ilerletmez)."""
    img = os.path.join(O.proje_dir(slug), "images")
    kay = Kayit(os.path.join(img, "uretim.json"))
    hedefler = _hedefler(proje, img)
    zayif = [k for k, _, h in hedefler if _zayif(kay, k, h)]
    oran = len(zayif) / max(1, len(hedefler))
    O.log(f"görsel kalitesi: {len(hedefler) - len(zayif)}/{len(hedefler)} FLUX/Gemini; eksik ya da yedek kaynaklı "
          f"{len(zayif)} (%{oran * 100:.0f}, eşik %{KALITE_ESIK * 100:.0f}){': ' + str(zayif) if zayif else ''}")
    if "kapak" in zayif:                                     # kapak tıklamayı belirler: tek başına bile yedek olamaz
        O.log("kapak görseli NVIDIA/Cloudflare/Gemini'den gelmedi — kapak yedek kaynakla bırakılmaz")
    sys.exit(3 if oran > KALITE_ESIK or "kapak" in zayif else 0)


def hepsi(slug, proje, sadece=None):
    """sadece: yalnızca bu anahtarlar ('kapak', 4, 7 ...) ele alınır; diğer görsellere dokunulmaz."""
    img = os.path.join(O.proje_dir(slug), "images")
    os.makedirs(img, exist_ok=True)
    kay = Kayit(os.path.join(img, "uretim.json"))
    hedefler = _hedefler(proje, img)
    if sadece:
        hedefler = [h for h in hedefler if str(h[0]) in sadece]
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
    sira = zincir()
    on, son = (sira[:sira.index("lemo")], sira[sira.index("lemo") + 1:]) if "lemo" in sira else (sira, [])

    def is_(x):
        k, pr, hedef, min_p = x
        kaynak = uret(pr, hedef, min_puan=min_p, sira=on)   # tohum yalnızca tek iş parçacıklı aday aracında
        if kaynak:
            kay.yaz(k, {"hash": _hash(pr), "kaynak": kaynak})
            O.log(f"   ✓ {k} ({kaynak})")
        elif not os.path.exists(hedef):
            eksik.append(k)
            O.log(f"   ✗ {k} üretilemedi")

    nvidia_var = bool(re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or ""))
    flux_var = nvidia_var or _cf_var()
    with cf.ThreadPoolExecutor(max_workers=2 if nvidia_var else 1) as ex:
        list(ex.map(is_, isler))
    # İkinci tur: NVIDIA'nın geçici hatası (HTTP 500) ya da filtresi yüzünden yedek kaynağa düşen ya da hiç üretilemeyen
    # görseller bir beklemeden sonra yalnızca FLUX kaynaklarıyla (NVIDIA, Cloudflare), farklı tohumla yeniden denenir. İlk geçişte art arda hatalar
    # yüzünden kapatılan NVIDIA her turda yeniden açılır (16 Ekim'de kısa bir HTTP 500 dalgası tüm videoyu yedek
    # kaynağa düşürmüştü). Sahneler henüz tasarlanmadığı için görsel değişmesi düzeni bozmaz. Sıralı çalışır.
    for tur in (1, 2):
        tekrar = [(k, pr, h) for k, pr, h in hedefler if _zayif(kay, k, h)]
        if not tekrar or not flux_var:
            break
        O.log(f"   {len(tekrar)} görsel NVIDIA/Cloudflare ile yeniden deneniyor (tur {tur})")
        time.sleep(45 * tur * tur)
        with _kilit:
            _KAPALI.discard("nvidia")
            _KAPALI.discard("cloudflare")
            _NVIDIA_HATA[0] = 0
        for k, pr, hedef in tekrar:
            r = kay.al(k) or {}
            kaynak = uret(pr, hedef, min_puan=puan(r.get("kaynak")) if os.path.exists(hedef) else -1, tohum=tur * 7,
                          sira=["nvidia", "cloudflare"])
            if kaynak:
                kay.yaz(k, {"hash": _hash(pr), "kaynak": kaynak})
                if k in eksik:
                    eksik.remove(k)
                O.log(f"   ✓ {k} ({kaynak}, tur {tur})")
    # Lemo yedeği: kaliteli kaynaklar üretemediyse eksik (ya da Pollinations'tan gelmiş) sahne görselleri kodla çizilir.
    # Kapak hariç: tıklamayı belirler, yedek kaynakla bırakılmaz (kalite kapısı).
    if "lemo" in sira:
        sahneler = {s["id"]: s for s in proje["sahneler"]}
        lem = [(k, pr, h) for k, pr, h in hedefler
               if k != "kapak" and k in sahneler and _zayif(kay, k, h) and puan((kay.al(k) or {}).get("kaynak")) < PUAN["lemo"]]
        if lem:
            O.log(f"   {len(lem)} görsel Lemo gravür levhası olarak kodla çiziliyor (görsel servisleri üretemedi)")
            ok = lemo_ciz([lemo_is(k, sahneler[k], h) for k, _, h in lem])
            for k, pr, h in lem:
                if h in ok:
                    kay.yaz(k, {"hash": _hash(pr), "kaynak": "lemo"})
                    if k in eksik:
                        eksik.remove(k)
                    O.log(f"   ✓ {k} (lemo)")
    for k, pr, h in hedefler:                               # zincirin geri kalanı (Pollinations): hâlâ eksik olanlar
        if son and not os.path.exists(h):
            kaynak = uret(pr, h, sira=son)
            if kaynak:
                kay.yaz(k, {"hash": _hash(pr), "kaynak": kaynak})
                if k in eksik:
                    eksik.remove(k)
                O.log(f"   ✓ {k} ({kaynak})")
    dusuk = [k for k, _, h in hedefler if os.path.exists(h) and _zayif(kay, k, h)]
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
    if not os.environ.get("NVIDIA_API_KEY", "").strip() and not _cf_var():
        raise SystemExit("NVIDIA_API_KEY ya da CLOUDFLARE_ACCOUNT_ID/CLOUDFLARE_API_TOKEN yok")
    if sahne is None:
        if aciklama:
            proje = dict(proje, kapak=dict(proje["kapak"], gorsel=aciklama))
        pr = kapak_prompt(proje)
    else:
        pr = sahne_prompt(dict(sahne, gorsel=aciklama) if aciklama else sahne)
    kaynak = uret(pr, ay, tohum=tohum, sira=["nvidia", "cloudflare"])
    if not kaynak:
        raise SystemExit("NVIDIA/Cloudflare görsel üretemedi (filtre/hata) — tarifi yumuşatıp tekrar deneyin")
    O.json_yaz(aym, {"kaynak": kaynak, "aciklama": aciklama, "tohum": tohum})
    O.log(f"aday: {os.path.relpath(ay, O.REPO)} ({kaynak}) — Read ile inceleyin; uygunsa --kabul")


def kaynak_durumu():
    """Kaliteli kaynakların bu çalıştırmadaki durumu GORSEL_DURUM dosyasına yazılır (iş akışı okur): NVIDIA hata
    veriyor/kapalı ve Cloudflare günlük kotası bittiyse "kota_bitti" — proje kota yenilenene kadar ertelenir."""
    yol = os.environ.get("GORSEL_DURUM")
    if not yol:
        return
    nv = "nvidia" in _KAPALI or not re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "")
    cfk = "cloudflare" in _KAPALI or not _cf_var()
    with open(yol, "w") as f:
        json.dump({"kota_bitti": nv and cfk, "nvidia_kapali": nv, "cloudflare_kapali": cfk}, f)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--sahne", type=int, help="tek sahne adayı (0 = kapak görseli)")
    ap.add_argument("--aciklama", default="", help="yeni İngilizce sahne tarifi (stil/yasak metni otomatik eklenir)")
    ap.add_argument("--tohum", type=int, default=0)
    ap.add_argument("--kabul", action="store_true")
    ap.add_argument("--sadece", default="", help="yalnızca bu görseller (ör. kapak veya 4,7); diğerlerine dokunulmaz")
    ap.add_argument("--kalite", action="store_true", help="görsel kalitesini denetle (çıkış 3: çoğu yedek/eksik)")
    ap.add_argument("--dikey", default="", help="Shorts için dikey görseller (ör. 1,29,32); --cikti klasörüne dikey_NN.jpg")
    ap.add_argument("--cikti", default="/tmp/dikey")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    proje = O.proje(slug)
    if a.kalite:
        return kalite(slug, proje)
    if a.dikey:
        eksik = dikey(proje, [int(x) for x in a.dikey.split(",") if x.strip()], a.cikti, img=os.path.join(O.proje_dir(slug), "images"))
        sys.exit(1 if eksik else 0)
    if a.sahne is not None:
        return aday(slug, proje, a.sahne, a.aciklama, a.tohum, a.kabul)
    eksik = hepsi(slug, proje, {x.strip() for x in a.sadece.split(",") if x.strip()} or None)
    kaynak_durumu()
    sys.exit(1 if eksik else 0)


if __name__ == "__main__":
    main()
