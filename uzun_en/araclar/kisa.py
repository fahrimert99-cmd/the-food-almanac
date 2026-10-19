#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Uzun videodan dikey Shorts (1080x1920) için veri + ses hazırlar; Remotion 'Kisa' kompozisyonu çizer.

  python3 uzun_en/araclar/kisa.py --proje SLUG --liste       # ajan için cümle listesi: cikti/kisa_liste.md
  python3 uzun_en/araclar/kisa.py --proje SLUG --kontrol     # kisa.json kurallara uyuyor mu (HATA satırları, çıkış 1)
  python3 uzun_en/araclar/kisa.py --proje SLUG --gorseller   # dikey görseli gereken sahneler: "1,29,32"
  python3 uzun_en/araclar/kisa.py --proje SLUG               # veri + ses (kapanış çağrısı yoksa seslendirir)
  --no 2 ile ikinci Shorts: kisa_2.json, cikti/kisa_2/, kisa_2_liste.md (birincinin cümleleri kullanılamaz).

Girdi: projeler/SLUG/kisa.json (görev: gorev/KISA.md) ->
  {"baslik": ["SATIR 1", "SATIR 2"], "baslik_yt": "...", "aciklama": "...", "parcalar": [{"sahne": 1, "cumleler": [0, 1]}, ...]}
  cumleler: zaman.json'daki cümle sıraları (0'dan). Her parçada o sahnenin (ya da "gorsel" sahnesinin) görseli kullanılır.
Klasörler (varsayılan): ses/ (cümle WAV'ları + zaman.json), images/ (NN.jpg), cikti/dikey/ (dikey_NN.jpg),
  cikti/kisa_cta/ (kapanış sesleri), kapak_yt.jpg (projede ya da cikti/).
Çıktı: cikti/kisa/kisa_props.json (Remotion --props), cikti/kisa/kisa_ses.wav (anlatım + müzik), public/img/kisa/*.jpg.
Uzun videonun cümleleri olduğu gibi kullanılır; yalnızca kapanış çağrısı aynı sesle seslendirilir.
"""
import argparse, hashlib, json, os, shutil, sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

FPS = 30
BAS = 0.6        # ilk sesten önce (kanca başlığı görünsün)
ARA = 0.30       # cümleler arası
PARCA_ARA = 0.45 # parçalar arası
CTA_ARA = 0.6    # içerikten kapanış çağrısına geçiş
SON = 0.8        # son sesten sonra

# Kapanış çağrısı (kisa.json "cta" ile değiştirilebilir). {ad}: kanal adı.
CTA = ["Want the full story, with every study? Watch the full video on our channel.",
       "And subscribe to {ad} for more food science, explained calmly and honestly."]
CTA_TAHMIN = 10.0  # seslendirilmemiş kapanış çağrısının tahmini süresi (sn), denetim için

# Kurallar (gorev/KISA.md ile aynı)
ICERIK = (25.0, 52.0)   # anlatım süresi (ilk cümlenin başından son cümlenin sonuna), sn
TOPLAM_AZAMI = 65.0     # kapanış dahil
PARCA_AZAMI = 9.0       # birden çok cümleli bir parçanın süresi (tek görsel çok uzun kalmasın)
SATIR_AZAMI = 14        # kanca ve parça başlığı satırı (karakter)


def dikey_odak(yol, w=0.30):
    """Yatay görselde dikey çerçeveye (genişliğin ~%30'u) girecek en dolu bölge: ayrıntı (kenar) + zeminden fark
    yoğunluğu en yüksek pencere. CSS object-position yüzdesi (0 = sol kenar, 100 = sağ kenar) döner."""
    from PIL import Image
    im = np.asarray(Image.open(yol).convert("RGB").resize((384, 216)), dtype=np.float32)
    zemin = np.median(np.concatenate([im[0], im[-1], im[:, 0], im[:, -1]]), axis=0)
    fark = np.abs(im - zemin).max(axis=2)
    gri = im.mean(axis=2)
    kenar = np.zeros_like(gri)
    kenar[:, 1:] += np.abs(np.diff(gri, axis=1))
    kenar[1:, :] += np.abs(np.diff(gri, axis=0))
    sutun = (fark / 255 + kenar / 64).sum(axis=0)
    n = int(round(w * len(sutun)))
    toplam = np.convolve(sutun, np.ones(n), mode="valid")
    c = (int(np.argmax(toplam)) + n / 2) / len(sutun)
    return round(float(np.clip((c - w / 2) / (1 - w), 0, 1)) * 100, 1)


# Dikey görselde konunun gireceği bant (yükseklik oranı): başlık + kaynak çipinin altı ile altyazının üstü arası.
# Altyazı ~0.64'ten, YouTube'un alt arayüzü ~0.77'den başlar; konu bu bandın dışına taşarsa yazıların altında kalır.
BANT = (0.25, 0.66)


def _yogun_bant(yol, h):
    """Sahne görsellerinde (konu kutusu tüm çerçeve) ayrıntının en yoğun olduğu h yüksekliğindeki yatay bandın ortası."""
    from PIL import Image
    im = np.asarray(Image.open(yol).convert("L").resize((216, 384)), dtype=np.float32)
    kenar = np.zeros_like(im)
    kenar[:, 1:] += np.abs(np.diff(im, axis=1))
    kenar[1:, :] += np.abs(np.diff(im, axis=0))
    satir = kenar.sum(axis=1)
    n = int(round(h * len(satir)))
    return (int(np.argmax(np.convolve(satir, np.ones(n), mode="valid"))) + n / 2) / len(satir)


OLCEK_ALT = 0.8         # dikey görsel en çok bu kadar küçültülür (daha küçüğü yanlarda bulanık şeritle kart gibi durur)


def dikey_yer(kutu, yol, kucult=True):
    """Konuyu BANT'a taşıyan ölçek ve dikey kayma ({"olcek", "dy"}; dy çerçeve yüksekliği oranı). Konu kutusu tüm
    çerçeveyse (sahne görseli) ayrıntının en yoğun bandı ortalanır. Küçültme OLCEK_ALT ile sınırlıdır; konu yine de
    banttan uzunsa üstü bandın üstüne hizalanır (dikey istem alt üçte biri boş yüzey bırakır; altyazının arkasına o düşer).
    Açılan kenarlar Kisa.tsx'te bulanık kopyayla dolar. kucult=False: yalnızca kaydırılır (yatay görsel zaten kırpılıyor)."""
    if not kutu:
        return None
    y0, y1 = kutu[1], kutu[3]
    h, c = y1 - y0, (y0 + y1) / 2
    bant = BANT[1] - BANT[0]
    if h > 0.85:
        h = bant
        c = _yogun_bant(yol, h)
        y0 = c - h / 2
    olcek = max(OLCEK_ALT, min(1.0, bant / h)) if kucult else 1.0
    if olcek * h > bant + 1e-3:
        dy = BANT[0] - (0.5 + olcek * (y0 - 0.5))
    else:
        dy = (BANT[0] + BANT[1]) / 2 - (0.5 + olcek * (c - 0.5))
    return {"olcek": round(olcek, 3), "dy": round(dy, 3)}


def satirlar(metin, sure, nokta, t):
    """Altyazı satırları (en çok 4 kelime) ve kelime anları; t = cümlenin videodaki başlangıcı."""
    out, konum, baslar = [], 0, []
    parca = O.cumle_parcala(metin, en_cok=4)
    for pm in parca:
        i = metin.find(pm, konum)
        baslar.append(i)
        konum = i + len(pm)
    for j, pm in enumerate(parca):
        t0 = t + O.karakter_ani(nokta, baslar[j])
        t1 = t + (O.karakter_ani(nokta, baslar[j + 1]) if j + 1 < len(parca) else sure + 0.1)
        kel, i = [], 0
        for w in pm.split():
            q = pm.find(w, i)
            kel.append({"w": w, "t": round(t + O.karakter_ani(nokta, baslar[j] + q), 3)})
            i = q + len(w)
        out.append({"t0": round(t0, 3), "t1": round(t1, 3), "kelimeler": kel})
    return out


def ad(no=1):
    """Shorts'un dosya adı kökü: 1. Shorts 'kisa' (kisa.json, cikti/kisa/), sonrakiler 'kisa_N'."""
    return "kisa" if no == 1 else f"kisa_{no}"


def _yollar(slug, no=1):
    pdir = O.proje_dir(slug)
    c = os.path.join(pdir, "cikti")
    return {"ses": os.path.join(pdir, "ses"), "gorsel": os.path.join(pdir, "images"), "dikey": os.path.join(c, "dikey"),
            "cta": os.path.join(c, "kisa_cta"), "cikti": os.path.join(c, ad(no)),
            "kapak": next((y for y in (os.path.join(pdir, "kapak_yt.jpg"), os.path.join(c, "kapak_yt.jpg")) if os.path.exists(y)),
                          None)}


def _tanim(slug, no=1):
    return O.json_oku(os.path.join(O.proje_dir(slug), f"{ad(no)}.json"))


def _digerleri(slug, no):
    """Projenin diğer Shorts tanımları: {no: tanım}. Aynı cümle iki Shorts'ta kullanılmaz."""
    out = {}
    for n in range(1, 10):
        t = _tanim(slug, n) if n != no else None
        if isinstance(t, dict):
            out[n] = t
    return out


def _kullanilan(tanimlar):
    return {(p.get("sahne"), k): n for n, t in tanimlar.items() for p in (t.get("parcalar") or []) if isinstance(p, dict)
            for k in (p.get("cumleler") or [])}


def _sahneler(slug, ses):
    zaman = O.json_oku(os.path.join(ses, "zaman.json"))
    if not zaman:
        raise SystemExit(f"{ses}/zaman.json yok — önce varlik.py indir --proje {slug}")
    return {z["id"]: z for z in zaman["sahneler"]}


def _gorsel_no(p):
    return p.get("gorsel", p["sahne"])           # görsel başka bir sahneden alınabilir (uzun bölümü bölmek için)


def cta_metinleri(tanim):
    ad = O.marka().get("ad", "")
    return [(c if isinstance(c, str) else c["metin"]).replace("{ad}", ad) for c in (tanim.get("cta") or CTA)]


def liste(slug, no=1):
    """Ajanın cümle seçeceği liste: her sahnenin görsel tarifi, ekrandaki başlığı ve süreli cümleleri. Başka bir
    Shorts'ta kullanılmış cümleler işaretlenir."""
    proje, y = O.proje(slug), _yollar(slug, no)
    zs = _sahneler(slug, y["ses"])
    diger = _digerleri(slug, no)
    kullanilan = _kullanilan(diger)
    out = [f"# {proje['baslik']}: sentences available for Short {no}", "",
           f"Format: `[sentence index] (seconds) text`. Use the scene number and the sentence indices in {ad(no)}.json.",
           "Sentences marked USED are already in another Short of this video: do not use them."]
    for n, t in sorted(diger.items()):
        out.append(f"Short {n} ({ad(n)}.json) is titled \"{t.get('baslik_yt', '')}\" with hook {t.get('baslik')}: "
                   "pick a different angle and a different hook.")
    out.append("")
    for s in proje["sahneler"]:
        z = zs.get(s["id"])
        if not z:
            continue
        out.append(f"## Scene {s['id']}" + (f": {s['bolum']}" if s.get("bolum") else ""))
        out.append(f"- image: {s.get('gorsel', '(none)')}")
        if s.get("baslik"):
            out.append(f"- on-screen title: {json.dumps(s['baslik'], ensure_ascii=False)}")
        if s.get("etiket"):
            out.append(f"- source chip: {s['etiket']}")
        out += [f"- [{i}] ({c['sure']:.1f} s) " + (f"USED in Short {kullanilan[(s['id'], i)]}: " if (s["id"], i) in kullanilan else "")
                + c["metin"] for i, c in enumerate(z["cumleler"])]
        out.append("")
    yol = os.path.join(O.proje_dir(slug), "cikti", f"{ad(no)}_liste.md")
    os.makedirs(os.path.dirname(yol), exist_ok=True)
    with open(yol, "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    O.log(f"liste: {yol}")


def _satir_hatalari(ad, satirlar, hata):
    if not isinstance(satirlar, list) or not 1 <= len(satirlar) <= 2 or not all(isinstance(x, str) and x.strip() for x in satirlar):
        hata.append(f"{ad}: 1-2 satırlık metin listesi olmalı")
        return
    for x in satirlar:
        if len(x) > SATIR_AZAMI:
            hata.append(f"{ad}: '{x}' {len(x)} karakter (en çok {SATIR_AZAMI})")
        if x != x.upper():
            hata.append(f"{ad}: '{x}' BÜYÜK HARF olmalı")


def kontrol(slug, no=1):
    """kisa.json'u (no > 1: kisa_N.json) denetler; hata listesi döndürür (boşsa geçerli)."""
    proje, y, tanim = O.proje(slug), _yollar(slug, no), _tanim(slug, no)
    if not tanim:
        return [f"{ad(no)}.json yok ya da geçersiz JSON"]
    diger = _digerleri(slug, no)
    kullanilan = _kullanilan(diger)
    zs = _sahneler(slug, y["ses"])
    sahne_p = {s["id"]: s for s in proje["sahneler"]}
    hata = []
    _satir_hatalari("baslik", tanim.get("baslik"), hata)
    b = tanim.get("baslik_yt")
    if not isinstance(b, str) or not 15 <= len(b) <= 70 or "#" in b:
        hata.append("baslik_yt: 15-70 karakter, '#' içermeyen YouTube başlığı olmalı")
    for n, t in diger.items():
        if str(t.get("baslik_yt", "")).strip().lower() == str(b).strip().lower():
            hata.append(f"baslik_yt: Shorts {n} ile aynı; farklı bir başlık yazın")
        if [str(x).upper() for x in (t.get("baslik") or [])] == [str(x).upper() for x in (tanim.get("baslik") or [])]:
            hata.append(f"baslik: Shorts {n} ile aynı kanca; farklı bir kanca yazın")
    a = tanim.get("aciklama")
    if not isinstance(a, str) or not 40 <= len(a) <= 300 or "http" in a or "#" in a:
        hata.append("aciklama: 40-300 karakter, bağlantı ve '#' içermeyen 1-2 cümle olmalı")
    pl = tanim.get("parcalar")
    if not isinstance(pl, list) or not 5 <= len(pl) <= 14:
        return hata + ["parcalar: 5-14 parça olmalı"]
    t, gorulen = 0.0, set()
    for i, p in enumerate(pl, 1):
        pa = f"parça {i}"
        z = zs.get(p.get("sahne"))
        if not z:
            hata.append(f"{pa}: sahne {p.get('sahne')} yok")
            continue
        ci = p.get("cumleler")
        if not isinstance(ci, list) or not ci or any(not isinstance(k, int) or not 0 <= k < len(z["cumleler"]) for k in ci):
            hata.append(f"{pa}: sahne {p['sahne']} için geçerli cümle sıraları yok (0-{len(z['cumleler']) - 1})")
            continue
        if ci != sorted(set(ci)):
            hata.append(f"{pa}: cümle sıraları artan ve tekrarsız olmalı")
        for k in ci:
            if (p["sahne"], k) in gorulen:
                hata.append(f"{pa}: sahne {p['sahne']} cümle {k} iki kez kullanılmış")
            gorulen.add((p["sahne"], k))
            if (p["sahne"], k) in kullanilan:
                hata.append(f"{pa}: sahne {p['sahne']} cümle {k} Shorts {kullanilan[(p['sahne'], k)]}'de kullanılmış")
        gn = _gorsel_no(p)
        if not isinstance(gn, int) or not (sahne_p.get(gn) or {}).get("gorsel"):
            hata.append(f"{pa}: görsel sahnesi {gn} yok ya da görsel tarifi yok")
        sure = sum(z["cumleler"][k]["sure"] for k in ci) + ARA * (len(ci) - 1)
        if len(ci) > 1 and sure > PARCA_AZAMI:
            hata.append(f"{pa}: {sure:.1f} sn tek görselde (en çok {PARCA_AZAMI:.0f} sn); cümleleri ayrı parçalara bölün")
        if "baslik" in p and p["baslik"] is not None:
            if not isinstance(p["baslik"], dict):
                hata.append(f"{pa}: baslik null ya da {{'satirlar': [...], 'vurgu'?, 'not'?}} olmalı")
            else:
                _satir_hatalari(f"{pa} baslik", p["baslik"].get("satirlar"), hata)
                if len(str(p["baslik"].get("vurgu") or "")) > 9:
                    hata.append(f"{pa}: vurgu en çok 9 karakter")
                if len(str(p["baslik"].get("not") or "")) > 28:
                    hata.append(f"{pa}: not en çok 28 karakter")
        if p.get("etiket") and len(p["etiket"]) > 40:
            hata.append(f"{pa}: etiket en çok 40 karakter")
        t += sure + (0 if i == len(pl) else (ARA if pl[i].get("sahne") == p["sahne"] else PARCA_ARA))
    if not ICERIK[0] <= t <= ICERIK[1]:
        hata.append(f"anlatım {t:.1f} sn; {ICERIK[0]:.0f}-{ICERIK[1]:.0f} sn olmalı (hedef 38-45 sn)")
    toplam = BAS + t + CTA_ARA + CTA_TAHMIN + SON
    if toplam > TOPLAM_AZAMI:
        hata.append(f"kapanışla birlikte ~{toplam:.0f} sn; en çok {TOPLAM_AZAMI:.0f} sn")
    O.log(f"kısa denetim: {len(pl)} parça, anlatım {t:.1f} sn, kapanışla ~{toplam:.0f} sn")
    return hata


def gorseller(slug, no=1):
    return sorted({_gorsel_no(p) for p in _tanim(slug, no)["parcalar"]})


def cta_sesleri(slug, tanim, klasor):
    """Kapanış çağrısını projenin anlatıcı sesiyle seslendirir (metin + ses imzasıyla adlandırılır, varsa yeniden üretilmez)."""
    import ses as S
    proje = O.proje(slug)
    motor, ses_ad, olcek = S.ayarlar(proje, O.marka())
    os.makedirs(klasor, exist_ok=True)
    yaz, out = None, []
    for metin in cta_metinleri(tanim):
        ad = "cta_" + hashlib.sha1(f"{motor}|{ses_ad}|{olcek}|{metin}".encode()).hexdigest()[:10] + ".wav"
        yol = os.path.join(klasor, ad)
        if not os.path.exists(yol):
            if yaz is None:
                model_dir = os.path.join(O.KOK, ".model")
                os.makedirs(model_dir, exist_ok=True)
                yaz = S.sentezci(motor, ses_ad, olcek, model_dir)
            yaz(metin, yol)
            S.kirp_ve_olc(yol)
            O.log(f"kapanış seslendirildi: {metin}")
        out.append((yol, metin))
    return out


def uret(slug, no=1):
    import hazirla as H
    from hizalama import harita_dp
    y = _yollar(slug, no)
    proje, tanim = O.proje(slug), _tanim(slug, no)
    zs = _sahneler(slug, y["ses"])
    duzelt = proje.get("seslendirme_duzelt") or {}
    pub = os.path.join(O.REMOTION, "public", "img", "kisa")
    shutil.rmtree(pub, ignore_errors=True)
    os.makedirs(pub)
    os.makedirs(y["cikti"], exist_ok=True)

    sr = None
    parcalar, altyazi, sesler = [], [], []
    sahne_p = {s["id"]: s for s in proje["sahneler"]}
    kanca_son = None
    t = BAS
    for pi, p in enumerate(tanim["parcalar"]):
        z = zs[p["sahne"]]
        sp = sahne_p.get(p["sahne"], {})
        gn = _gorsel_no(p)
        dg = next((d for d in (os.path.join(y["dikey"], f"dikey_{gn:02d}.jpg"), os.path.join(y["dikey"], f"{gn:02d}.jpg"))
                   if os.path.exists(d)), None)
        dikey = bool(dg)                              # NVIDIA ile üretilmiş dikey görsel varsa kırpma gerekmez
        g = dg or os.path.join(y["gorsel"], f"{gn:02d}.jpg")
        kutu, _ = H.konu_kutusu(g)
        shutil.copy(g, os.path.join(pub, f"{gn:02d}.jpg"))
        bas = t
        for k, ci in enumerate(p["cumleler"]):
            c = z["cumleler"][ci]
            x, sr0 = O.wav_oku(os.path.join(y["ses"], c["dosya"]))
            sr = sr or sr0
            sesler.append((t, x))
            altyazi += satirlar(c["metin"], c["sure"], harita_dp(c["metin"], c["sure"], c.get("duraklar"), duzelt), t)
            if kanca_son is None:
                kanca_son = t + c["sure"]
            t += c["sure"] + (ARA if k + 1 < len(p["cumleler"]) else 0)
        # Uzun videonun mekanikleri: kaynak etiketi, kinetik başlık, sayı rozeti (proje.json sahnesinden; kisa.json'da
        # parça bazında "baslik" ile değiştirilebilir ya da null ile kapatılabilir). Geniş kompozisyonlar yatay kaydırılır.
        baslik = p["baslik"] if "baslik" in p else sp.get("baslik")
        yer = dikey_yer(kutu, g, kucult=dikey)       # yatay yedek görsel de çerçeve yüksekliğine oturduğundan oranlar aynı
        parcalar.append({"gorsel": f"kisa/{gn:02d}", "bas": round(bas, 3), "son": round(t, 3), "kutu": kutu,
                         "odak": 50 if dikey else p.get("odak", dikey_odak(g)), "etiket": p.get("etiket", sp.get("etiket")),
                         "baslik": baslik, "dikey": dikey, "yer": yer,
                         "kaydir": bool(p.get("kaydir")) and not dikey})   # yatay karşılaştırma görselleri kaydırılır
        if pi + 1 < len(tanim["parcalar"]):            # aynı sahnenin cümleleri sürüyorsa cümle arası kadar
            t += ARA if tanim["parcalar"][pi + 1]["sahne"] == p["sahne"] else PARCA_ARA
    cta_bas = t + CTA_ARA
    t = cta_bas
    for yol, metin in cta_sesleri(slug, tanim, y["cta"]):
        x, sr0 = O.wav_oku(yol)
        if sr0 != sr:                                  # anlatımla aynı motor; yine de örnekleme farkını düzelt
            x = np.interp(np.arange(0, len(x), sr0 / sr), np.arange(len(x)), x).astype(np.float32)
        sure = len(x) / sr
        sesler.append((t, x))
        altyazi += satirlar(metin, sure, harita_dp(metin, sure, None), t)
        t += sure + ARA
    if y["kapak"]:
        shutil.copy(y["kapak"], os.path.join(pub, "kapak.jpg"))
    toplam = t + SON

    anlatim = np.zeros(int(toplam * sr) + sr)
    for t0, x in sesler:
        i = int(t0 * sr)
        anlatim[i:i + len(x)] += x
    aw = os.path.join(y["cikti"], "kisa_anlatim.wav")
    O.wav_yaz(aw, anlatim, sr)
    muz, msr = H.muzik(toplam, [0], [], kaydir=2)
    mw = os.path.join(y["cikti"], "kisa_muzik.wav")
    O.wav_yaz(mw, muz, msr)
    H.karisim(aw, mw, os.path.join(y["cikti"], "kisa_ses.wav"))

    props = {"fps": FPS, "toplam": round(toplam, 3), "baslik": tanim["baslik"], "kanal": O.marka()["ad"],
             "parcalar": parcalar, "altyazi": altyazi, "kapanis": round(cta_bas, 3), "kanca_son": round(kanca_son, 3),
             "kapak": "kisa/kapak" if os.path.exists(os.path.join(pub, "kapak.jpg")) else None}
    O.json_yaz(os.path.join(y["cikti"], "kisa_props.json"), props)
    eksik = [p["gorsel"] for p in parcalar if not p["dikey"]]
    O.log(f"kısa: {toplam:.1f} sn, {len(parcalar)} parça, {len(altyazi)} altyazı satırı"
          + (f"; dikey görseli olmayan (yatay kırpıldı): {', '.join(eksik)}" if eksik else ""))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje", required=True)
    ap.add_argument("--liste", action="store_true", help="ajan için cümle listesi (cikti/kisa_liste.md)")
    ap.add_argument("--kontrol", action="store_true", help="kisa.json denetimi (HATA satırları; geçersizse çıkış 1)")
    ap.add_argument("--gorseller", action="store_true", help="dikey görseli gereken sahne numaraları")
    ap.add_argument("--no", type=int, default=1, help="kaçıncı Shorts (1: kisa.json, 2: kisa_2.json)")
    a = ap.parse_args()
    if a.liste:
        return liste(a.proje, a.no)
    if a.kontrol:
        try:
            hata = kontrol(a.proje, a.no)
        except (AttributeError, KeyError, TypeError, ValueError) as e:   # ajanın yazdığı yapı bozuksa
            hata = [f"{ad(a.no)}.json yapısı gorev/KISA.md'deki biçimde değil ({type(e).__name__}: {e})"]
        for h in hata:
            print(f"HATA: {h}")
        print(f"{ad(a.no)}.json geçerli" if not hata else f"{ad(a.no)}.json geçersiz: {len(hata)} hata")
        sys.exit(1 if hata else 0)
    if a.gorseller:
        return print(",".join(map(str, gorseller(a.proje, a.no))))
    uret(a.proje, a.no)


if __name__ == "__main__":
    main()
