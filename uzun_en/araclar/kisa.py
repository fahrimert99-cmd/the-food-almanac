#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Uzun videodan dikey Shorts (1080x1920) için veri + ses hazırlar; Remotion 'Kisa' kompozisyonu çizer.

  python3 uzun_en/araclar/kisa.py --proje SLUG --ses DIR --gorsel DIR --cikti DIR

Girdi: projeler/SLUG/kisa.json -> {"baslik": ["SATIR 1", "SATIR 2"], "parcalar": [{"sahne": 1, "cumleler": [0, 1]}, ...]}
  cumleler: zaman.json'daki cümle sıraları (0'dan). Her parçada o sahnenin görseli kullanılır.
Çıktı: CIKTI/kisa_props.json (Remotion --props), CIKTI/kisa_ses.wav (anlatım + müzik), public/img/kisa/*.jpg.
Yeni seslendirme yapılmaz: uzun videonun Michael cümleleri olduğu gibi kullanılır.
"""
import argparse, json, os, shutil, sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import hazirla as H  # noqa: E402
from hizalama import harita_dp  # noqa: E402

FPS = 30
BAS = 0.6        # ilk sesten önce (kanca başlığı görünsün)
ARA = 0.30       # cümleler arası
PARCA_ARA = 0.45 # parçalar arası
CTA_ARA = 0.6    # içerikten kapanış çağrısına geçiş
SON = 0.8        # son sesten sonra


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


def dikey_yer(kutu, yol, kucult=True):
    """Konuyu BANT'a taşıyan ölçek ve dikey kayma ({"olcek", "dy"}; dy çerçeve yüksekliği oranı). Konu kutusu tüm
    çerçeveyse (sahne görseli) ayrıntının en yoğun bandı ortalanır. Açılan kenarlar Kisa.tsx'te bulanık kopyayla dolar.
    kucult=False: yalnızca kaydırılır (yatay görsel zaten kırpılıyor; küçültülürse dar bir şerit kalır)."""
    if not kutu:
        return None
    y0, y1 = kutu[1], kutu[3]
    h, c = y1 - y0, (y0 + y1) / 2
    if h > 0.85:
        h = BANT[1] - BANT[0]
        c = _yogun_bant(yol, h)
    olcek = min(1.0, (BANT[1] - BANT[0]) / h) if kucult else 1.0
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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje", required=True)
    ap.add_argument("--ses", required=True, help="cümle WAV'ları + zaman.json klasörü")
    ap.add_argument("--gorsel", required=True, help="sahne görselleri (NN.jpg) klasörü")
    ap.add_argument("--cikti", required=True)
    ap.add_argument("--dikey", default="", help="dikey (9:16) sahne görselleri klasörü: NN.jpg varsa yatay görsel yerine o")
    ap.add_argument("--cta", default="", help="kapanış çağrısı WAV'ları klasörü (kisa.json 'cta' dosyaları) + kapak_yt.jpg")
    a = ap.parse_args()
    proje = O.proje(a.proje)
    tanim = O.json_oku(os.path.join(O.proje_dir(a.proje), "kisa.json"))
    zaman = O.json_oku(os.path.join(a.ses, "zaman.json"))
    duzelt = proje.get("seslendirme_duzelt") or {}
    zs = {z["id"]: z for z in zaman["sahneler"]}
    pub = os.path.join(O.REMOTION, "public", "img", "kisa")
    shutil.rmtree(pub, ignore_errors=True)
    os.makedirs(pub)
    os.makedirs(a.cikti, exist_ok=True)

    sr = None
    parcalar, altyazi, sesler = [], [], []
    sahne_p = {s["id"]: s for s in proje["sahneler"]}
    kanca_son = None
    t = BAS
    for pi, p in enumerate(tanim["parcalar"]):
        z = zs[p["sahne"]]
        sp = sahne_p.get(p["sahne"], {})
        gn = p.get("gorsel", p["sahne"])           # görsel başka bir sahneden alınabilir (uzun bölümü bölmek için)
        dg = os.path.join(a.dikey, f"{gn:02d}.jpg") if a.dikey else ""
        dikey = bool(dg) and os.path.exists(dg)      # NVIDIA ile üretilmiş dikey görsel varsa kırpma gerekmez
        g = dg if dikey else os.path.join(a.gorsel, f"{gn:02d}.jpg")
        kutu, _ = H.konu_kutusu(g)
        shutil.copy(g, os.path.join(pub, f"{gn:02d}.jpg"))
        bas = t
        for k, ci in enumerate(p["cumleler"]):
            c = z["cumleler"][ci]
            x, sr0 = O.wav_oku(os.path.join(a.ses, c["dosya"]))
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
    for k, c in enumerate(tanim.get("cta") or []):
        x, sr0 = O.wav_oku(os.path.join(a.cta, c["dosya"]))
        sure = len(x) / sr0
        sesler.append((t, x))
        altyazi += satirlar(c["metin"], sure, harita_dp(c["metin"], sure, None), t)
        t += sure + ARA
    if a.cta and os.path.exists(os.path.join(a.cta, "kapak_yt.jpg")):
        shutil.copy(os.path.join(a.cta, "kapak_yt.jpg"), os.path.join(pub, "kapak.jpg"))
    toplam = t + SON

    anlatim = np.zeros(int(toplam * sr) + sr)
    for t0, x in sesler:
        i = int(t0 * sr)
        anlatim[i:i + len(x)] += x
    aw = os.path.join(a.cikti, "kisa_anlatim.wav")
    O.wav_yaz(aw, anlatim, sr)
    muz, msr = H.muzik(toplam, [0], [], kaydir=2)
    mw = os.path.join(a.cikti, "kisa_muzik.wav")
    O.wav_yaz(mw, muz, msr)
    H.karisim(aw, mw, os.path.join(a.cikti, "kisa_ses.wav"))

    props = {"fps": FPS, "toplam": round(toplam, 3), "baslik": tanim["baslik"], "kanal": O.marka()["ad"],
             "parcalar": parcalar, "altyazi": altyazi, "kapanis": round(cta_bas, 3), "kanca_son": round(kanca_son, 3),
             "kapak": "kisa/kapak" if os.path.exists(os.path.join(pub, "kapak.jpg")) else None}
    O.json_yaz(os.path.join(a.cikti, "kisa_props.json"), props)
    O.log(f"kısa: {toplam:.1f} sn, {len(parcalar)} parça, {len(altyazi)} altyazı satırı")


if __name__ == "__main__":
    main()
