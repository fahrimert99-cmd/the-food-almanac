#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Remotion girdilerini bir proje için hazırlar (foodcode/remotion/hazirla_tam.py'nin genel sürümü).

  python3 uzun_en/araclar/hazirla.py --proje SLUG            # zaman çizelgesi + sahneler + görseller + ses karışımı
  python3 uzun_en/araclar/hazirla.py --proje SLUG --sessiz   # ses karışımı olmadan (sahne tasarımı/önizleme için)
  python3 uzun_en/araclar/hazirla.py --proje SLUG --kaydet   # src/tam/sahneler'deki tasarımları projeye geri yazar

Girdi : projeler/SLUG/proje.json, images/NN.jpg (+ kapak.jpg), ses/zaman.json + cümle WAV'ları,
        sahneler/SNN.tsx (tasarlanmış sahneler; olmayanlar otomatik şablonla çizilir).
Çıktı : remotion/src/tam/{tam.gen.json, kayit.ts, sahneler/}, remotion/src/marka.gen.json,
        remotion/public/{img/tam, fonts, tam_karisim.wav}, remotion/out/izgara/.
"""
import argparse, glob, json, os, re, shutil, subprocess, sys, tempfile

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
from hizalama import harita_dp  # noqa: E402
from ortak import TASLAK, taslak_mi  # noqa: E402,F401  (eski içe aktarımlar için)

FPS = 30
BASLANGIC = 0.15
KUYRUK = 0.45          # sahne sonu nefes payı
BOLUM_ONCESI = 0.55    # yeni bölümden önceki sahneye ek nefes
KART_KUYRUK = 0.5      # bölüm kartlarına ek süre
GECIS = 0.35
OZET_RE = re.compile(r"^(recap|summary|the takeaway|takeaways?|bottom line|wrap[- ]up)\b", re.I)


def font_yollari():
    anton = [os.path.join(O.REPO, "assets", "font", "Anton-Regular.ttf"), os.path.expanduser("~/.fonts/Anton-Regular.ttf")]
    yollar = [next((y for y in anton if os.path.exists(y)), anton[0])]
    for ad in ("Inter-Medium.otf", "Inter-Bold.otf", "Inter-ExtraBold.otf"):
        yollar.append(next((y for y in glob.glob(f"/usr/share/fonts/**/{ad}", recursive=True)),
                           f"/usr/share/fonts/opentype/inter/{ad}"))
    return yollar


def bolum_numaralari(sahneler):
    """Bölüm rozetleri: ilk bölüm giriştir (numarasız); sonrakiler PART 1, 2, ...; özet bölümü RECAP."""
    no, n = {}, 0
    bolumler = [s for s in sahneler if s.get("bolum")]
    for i, s in enumerate(bolumler):
        if i == 0 and s["id"] == sahneler[0]["id"]:
            continue
        if i == len(bolumler) - 1 and OZET_RE.match(s["bolum"].strip()):
            no[s["id"]] = "RECAP"
        else:
            n += 1
            no[s["id"]] = f"PART {n}"
    return no


def zaman_cizelgesi(proje, zaman, gorsel_dir):
    ara = float(proje.get("cumle_arasi", O.marka().get("cumle_arasi", 0.28)))
    duzelt = proje.get("seslendirme_duzelt") or {}
    sahneler_p = proje["sahneler"]
    bno = bolum_numaralari(sahneler_p)
    zs = {z["id"]: z for z in zaman["sahneler"]}
    sahneler, t, son_gorsel = [], BASLANGIC, None
    for n, m in enumerate(sahneler_p):
        z = zs.get(m["id"])
        if not z:
            raise SystemExit(f"sahne {m['id']} için ses yok (ses.py çalıştırılmalı)")
        yerel, cl = 0.0, []
        for k, c in enumerate(z["cumleler"]):
            cl.append({"bas": round(yerel, 3), "sure": round(c["sure"], 3), "metin": c["metin"], "dosya": c["dosya"],
                       "nokta": harita_dp(c["metin"], c["sure"], c.get("duraklar"), duzelt)})
            yerel += c["sure"] + (ara if k < len(z["cumleler"]) - 1 else 0)
        kuyruk = KUYRUK + (KART_KUYRUK if m.get("tip") in ("kart", "grafik") else 0)
        if n + 1 < len(sahneler_p) and sahneler_p[n + 1].get("bolum"):
            kuyruk += BOLUM_ONCESI
        sure = yerel + kuyruk
        gorsel = None
        if m.get("tip") not in ("kart", "grafik"):
            if os.path.exists(os.path.join(gorsel_dir, f"{m['id']:02d}.jpg")):
                gorsel = son_gorsel = f"tam/{m['id']:02d}"
            else:                                   # görsel üretilemediyse bir önceki sahnenin görseli
                gorsel = son_gorsel
                O.log(f"! sahne {m['id']}: görsel yok -> {gorsel or 'kart düzeni'}")
        sahneler.append({
            "id": m["id"], "bas": round(t, 3), "sure": round(sure, 3), "cumleler": cl,
            "meta": {k: m[k] for k in ("bolum", "tip", "kart", "grafik", "baslik", "etiket") if k in m}
            | {"gorsel": gorsel, "bolumNo": bno.get(m["id"])},
        })
        t += sure
    return sahneler, t + 0.8


def altyazi(sahneler):
    out = []
    for s in sahneler:
        for c in s["cumleler"]:
            cm, nokta = c["metin"], c["nokta"]
            parcalar = O.cumle_parcala(cm)
            konum, baslar = 0, []
            for p in parcalar:
                i = cm.find(p, konum)
                baslar.append(i)
                konum = i + len(p)
            for k, p in enumerate(parcalar):
                t0 = s["bas"] + c["bas"] + O.karakter_ani(nokta, baslar[k])
                t1 = (s["bas"] + c["bas"] + O.karakter_ani(nokta, baslar[k + 1])) if k + 1 < len(parcalar) \
                    else s["bas"] + c["bas"] + c["sure"] + 0.15
                kel, i = [], 0
                for w in p.split():
                    j = p.find(w, i)
                    kel.append({"w": w, "t": round(s["bas"] + c["bas"] + O.karakter_ani(nokta, baslar[k] + j), 3)})
                    i = j + len(w)
                out.append({"t0": round(t0, 3), "t1": round(t1, 3), "kelimeler": kel})
    return out


# --- Müzik: bölüm bölüm değişen sade ambiyans (kodla üretilir, lisans derdi yok) -------------
AKORLAR = [
    [[45, 57, 60, 64], [41, 53, 57, 60], [48, 55, 60, 64], [43, 55, 59, 62]],   # Am F C G
    [[41, 53, 57, 60], [48, 55, 60, 64], [43, 55, 59, 62], [45, 57, 60, 64]],   # F C G Am
    [[48, 55, 60, 64], [45, 57, 60, 64], [41, 53, 57, 60], [43, 55, 59, 62]],   # C Am F G
    [[50, 57, 62, 65], [43, 55, 59, 62], [48, 55, 60, 64], [45, 57, 60, 64]],   # Dm G C Am
]


# Arka fon müziği karışımı: müzik, anlatım sırasında otomatik kısılır (sidechain). Seviye kullanıcıyla dinlenerek seçildi:
# konuşma aralarında yaklaşık −29/−30 dB, anlatım −15 dB (eski sürüm −34 dB'de neredeyse duyulmuyordu).
MUZIK_HACIM = 0.34
MUZIK_FC = ("[0:a]aresample=48000,aformat=channel_layouts=stereo,asplit=2[n][sc];"
            f"[1:a]aresample=48000,lowpass=f=1400:p=1,volume={MUZIK_HACIM}[m];"
            "[m][sc]sidechaincompress=threshold=0.05:ratio=4:attack=30:release=400[d];"
            "[n][d]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=11,aresample=48000[out]")


def karisim(anlatim_wav, muzik_wav, hedef, ek=()):
    """Anlatım + müzik -> tek ses dosyası (ffmpeg). ek: çıktı biçimi seçenekleri."""
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", anlatim_wav, "-i", muzik_wav, "-filter_complex", MUZIK_FC,
                    "-map", "[out]", *(ek or ["-c:a", "pcm_s16le"]), hedef], check=True)


def muzik(toplam, bolum_baslari, kart_anlari, kaydir=0, sr=44100):
    """Kodla üretilen sakin fon müziği (telif yok): sıcak pad (harmonikli, yavaşça nefes alan, hafif koro), yumuşak
    bas, saniyede bir piyano benzeri arpej notası, bölüm kartlarında çan, basit yankı. Her bölüm farklı akor dizisiyle."""
    hz = lambda m: 440.0 * 2 ** ((m - 69) / 12)
    n = int(toplam * sr)
    ses = np.zeros((n + sr * 6, 2))
    blok = 4.0
    rng = np.random.default_rng(sum(map(ord, str(kaydir))) + 7)

    def bolum_no(t):
        return max([i for i, b in enumerate(bolum_baslari) if b <= t] or [0]) + kaydir

    b = 0
    while b * blok < toplam + blok:
        t0 = b * blok
        bn = bolum_no(t0)
        akor = AKORLAR[bn % len(AKORLAR)][b % 4]
        i0 = max(0, int((t0 - 1.0) * sr))
        L = int((blok + 2.0) * sr)
        tt = np.arange(L) / sr
        env = np.clip(tt / 1.6, 0, 1) * np.clip((blok + 2.0 - tt) / 1.6, 0, 1)
        nefes = 0.85 + 0.15 * np.sin(2 * np.pi * 0.12 * (tt + t0))
        seg = ses[i0:i0 + L]
        m = len(seg)
        for nota in akor[1:]:                               # pad: kök hariç üç nota, iki kanalda hafif farklı (koro)
            f = hz(nota)
            for d, kanal in ((+0.6, 0), (-0.6, 1)):
                ton = (np.sin(2 * np.pi * (f + d) * tt) + 0.30 * np.sin(4 * np.pi * (f + d) * tt)
                       + 0.10 * np.sin(6 * np.pi * (f + d) * tt))
                seg[:, kanal] += (0.032 * ton * env * nefes)[:m]
        fb = hz(akor[0])                                    # bas: kök notası
        bas = (np.sin(2 * np.pi * fb * tt) + 0.2 * np.sin(4 * np.pi * fb * tt)) * env * 0.05
        seg[:, 0] += bas[:m]
        seg[:, 1] += bas[:m]
        desen = [1, 2, 3, 2] if bn % 2 == 0 else [3, 2, 1, 2]
        for k in range(4):                                  # piyano benzeri seyrek arpej
            nt = t0 + k * 1.0 + rng.uniform(-0.02, 0.02)
            j0 = int(nt * sr)
            Lk = int(2.2 * sr)
            ts = np.arange(Lk) / sr
            f = hz(akor[desen[k]] + 12)
            ton = sum(w * np.sin(2 * np.pi * f * h * ts) * np.exp(-ts * (2.6 + h))
                      for h, w in ((1, 1.0), (2, 0.45), (3, 0.2), (4, 0.08)))
            ton *= np.clip(ts / 0.006, 0, 1) * 0.05 * rng.uniform(0.8, 1.0)
            seg2 = ses[j0:j0 + Lk]
            pan = 0.6 + 0.4 * (k % 2)
            seg2[:, 0] += ton[:len(seg2)] * pan
            seg2[:, 1] += ton[:len(seg2)] * (1.6 - pan)
        b += 1
    for ka in kart_anlari:                                  # bölüm kartlarında yumuşak çan
        j0 = int(ka * sr)
        Lk = int(3.5 * sr)
        ts = np.arange(Lk) / sr
        can = sum(np.sin(2 * np.pi * f * ts) * w for f, w in [(hz(76), 1.0), (hz(83), 0.45), (hz(88), 0.25)])
        can *= np.exp(-ts * 1.4) * 0.07
        seg2 = ses[j0:j0 + Lk]
        seg2 += can[:len(seg2), None]
    kuru = ses.copy()                                       # yankı: kanallar arası, azalan gecikmeli kopyalar
    for gec, kaz in [(0.07, 0.30), (0.13, 0.24), (0.21, 0.18), (0.34, 0.12), (0.55, 0.07)]:
        d = int(gec * sr)
        ses[d:, 0] += kaz * kuru[:-d, 1]
        ses[d:, 1] += kaz * kuru[:-d, 0]
    ses = ses[:n]
    t = np.arange(n) / sr
    fade = np.clip(np.minimum(t / 2.5, (toplam - t) / 3.0), 0, 1)
    ust = max(np.abs(ses).max(), 1e-6)
    return (ses / ust * 0.5 * fade[:, None]).astype(np.float32), sr


def izgara(kaynak, hedef):
    from PIL import Image, ImageDraw, ImageFont
    im = Image.open(kaynak).convert("RGB")
    d = ImageDraw.Draw(im)
    try:
        f = ImageFont.truetype(font_yollari()[2], 26)
    except OSError:
        f = None
    for x in range(0, 1920, 160):
        d.line([(x, 0), (x, 1080)], fill=(230, 30, 30), width=2)
        d.text((x + 4, 4), str(x), fill=(230, 30, 30), font=f)
    for y in range(0, 1080, 120):
        d.line([(0, y), (1920, y)], fill=(30, 30, 230), width=2)
        d.text((4, y + 4), str(y), fill=(30, 30, 230), font=f)
    im.resize((1440, 810)).save(hedef, quality=85)


def sahneleri_kur(slug, proje):
    """Projedeki tasarımları src/tam/sahneler'e kopyalar, eksiklere taslak koyar, kayit.ts'i yazar."""
    hedef = os.path.join(O.REMOTION, "src", "tam", "sahneler")
    kaynak = os.path.join(O.proje_dir(slug), "sahneler")
    shutil.rmtree(hedef, ignore_errors=True)
    os.makedirs(hedef)
    tasarli = 0
    for s in proje["sahneler"]:
        ad = f"S{s['id']:02d}.tsx"
        k = os.path.join(kaynak, ad)
        if os.path.exists(k) and not taslak_mi(k):
            shutil.copyfile(k, os.path.join(hedef, ad))
            tasarli += 1
        else:
            with open(os.path.join(hedef, ad), "w", encoding="utf-8") as f:
                f.write(TASLAK)
    satirlar = ["// OTOMATİK ÜRETİLİR (uzun_en/araclar/hazirla.py) — elle düzenlemeyin.",
                "// Sahne kaydı: id -> modül (sahneler/SNN.tsx: default bileşen + isteğe bağlı `ayar`).",
                'import type React from "react";', 'import type { SahneAyar, SP } from "./veri";']
    for s in proje["sahneler"]:
        satirlar.append(f'import * as S{s["id"]:02d} from "./sahneler/S{s["id"]:02d}";')
    ogeler = ", ".join(f"{s['id']}: S{s['id']:02d}" for s in proje["sahneler"])
    satirlar += ["", "export type Modul = { default: React.FC<SP>; ayar?: SahneAyar };",
                 f"export const KAYIT: Record<number, Modul> = {{ {ogeler} }};", ""]
    with open(os.path.join(O.REMOTION, "src", "tam", "kayit.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(satirlar))
    return tasarli


def kaydet(slug, yalniz=None):
    """Ajanların src/tam/sahneler'de yaptığı tasarımları projeye geri yazar (taslaklar yazılmaz).
    yalniz: {sahne id} verilirse yalnızca bu sahneler (grubun dışına taşan düzenlemeler kaydedilmez)."""
    kaynak = os.path.join(O.REMOTION, "src", "tam", "sahneler")
    hedef = os.path.join(O.proje_dir(slug), "sahneler")
    os.makedirs(hedef, exist_ok=True)
    n = 0
    for k in sorted(glob.glob(os.path.join(kaynak, "S*.tsx"))):
        if taslak_mi(k) or (yalniz and int(os.path.basename(k)[1:-4]) not in yalniz):
            continue
        h = os.path.join(hedef, os.path.basename(k))
        if not os.path.exists(h) or open(h, encoding="utf-8").read() != open(k, encoding="utf-8").read():
            shutil.copyfile(k, h)
            n += 1
    O.log(f"kaydedildi: {n} sahne -> {os.path.relpath(hedef, O.REPO)}")


def konu_kutusu(yol, esik=35, pay=0.03):
    """Kapak görselinde konunun sınır kutusu [x0, y0, x1, y1] (0–1). Kapak bunu sağ panele en büyük hâliyle sığdırır.
    Kâğıt zemini kenar piksellerinin medyanıdır; zeminden belirgin ayrılan piksellerin %1–99 aralığı alınır."""
    try:
        from PIL import Image
        im = np.asarray(Image.open(yol).convert("RGB").resize((320, 180)), dtype=np.int16)
    except Exception:
        return None
    zemin = np.median(np.concatenate([im[0], im[-1], im[:, 0], im[:, -1]]), axis=0)
    ys, xs = np.nonzero(np.abs(im - zemin).max(axis=2) > esik)
    if len(xs) < 200:                                   # neredeyse boş görsel: varsayılan yerleşim
        return None
    x0, x1 = np.percentile(xs, [1, 99]) / 320
    y0, y1 = np.percentile(ys, [1, 99]) / 180
    return [round(float(min(max(v, 0), 1)), 3) for v in (x0 - pay, y0 - pay, x1 + pay, y1 + pay)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--sessiz", action="store_true", help="ses karışımını atla (yalnızca zaman/görsel)")
    ap.add_argument("--kaydet", action="store_true", help="src/tam/sahneler tasarımlarını projeye geri yaz")
    ap.add_argument("--sahneler", default="", help="--kaydet ile: yalnızca bu sahneler (ör. 1,2,3)")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    if a.kaydet:
        return kaydet(slug, {int(x) for x in a.sahneler.split(",") if x.strip()} or None)
    pdir = O.proje_dir(slug)
    proje = O.proje(slug)
    zaman = O.json_oku(os.path.join(pdir, "ses", "zaman.json"))
    if not zaman:
        raise SystemExit("ses/zaman.json yok — önce: python3 uzun_en/araclar/ses.py --proje " + slug)
    gdir = os.path.join(pdir, "images")
    sahneler, toplam = zaman_cizelgesi(proje, zaman, gdir)
    k = proje.get("kapak") or {}
    veri = {"fps": FPS, "toplam": round(toplam, 3), "gecis": GECIS, "slug": slug, "sahneler": sahneler,
            "altyazi": altyazi(sahneler),
            "kapak": {"satirlar": k.get("satirlar") or [], "vurgu": k.get("vurgu"), "vurgu_alt": k.get("vurgu_alt"),
                      "gorsel": "tam/kapak" if os.path.exists(os.path.join(gdir, "kapak.jpg")) else None,
                      "kutu": konu_kutusu(os.path.join(gdir, "kapak.jpg"))}}
    src = os.path.join(O.REMOTION, "src")
    O.json_yaz(os.path.join(src, "tam", "tam.gen.json"), veri)
    m = O.marka()
    O.json_yaz(os.path.join(src, "marka.gen.json"),
               {"ad": m.get("ad", ""), "filigran": m.get("ad", "").upper(), "slogan": m.get("slogan", "")})
    tasarli = sahneleri_kur(slug, proje)

    pub = os.path.join(O.REMOTION, "public")
    shutil.rmtree(os.path.join(pub, "img", "tam"), ignore_errors=True)
    os.makedirs(os.path.join(pub, "img", "tam"))
    os.makedirs(os.path.join(pub, "fonts"), exist_ok=True)
    izg = os.path.join(O.REMOTION, "out", "izgara")
    shutil.rmtree(izg, ignore_errors=True)
    os.makedirs(izg)
    if os.path.isdir(gdir):
        for ad in sorted(os.listdir(gdir)):
            if re.fullmatch(r"(\d{2}|kapak)\.jpg", ad):
                shutil.copyfile(os.path.join(gdir, ad), os.path.join(pub, "img", "tam", ad))
                izgara(os.path.join(gdir, ad), os.path.join(izg, ad))
    for yol in font_yollari():
        shutil.copyfile(yol, os.path.join(pub, "fonts", os.path.basename(yol)))

    if not a.sessiz:
        ses_dir = os.path.join(pdir, "ses")
        tmp = tempfile.mkdtemp(prefix="uzun_ses_")
        sr = 22050
        y = np.zeros(int(toplam * sr) + sr, dtype=np.float32)
        for s in sahneler:
            for c in s["cumleler"]:
                x, xsr = O.wav_oku(os.path.join(ses_dir, c["dosya"]))
                if xsr != sr:
                    x = np.interp(np.arange(0, len(x), xsr / sr), np.arange(len(x)), x).astype(np.float32)
                i = int((s["bas"] + c["bas"]) * sr)
                y[i:i + len(x)] += x[: len(y) - i]
        O.wav_yaz(os.path.join(tmp, "anlatim.wav"), y[: int(toplam * sr)], sr)
        bolum_baslari = [s["bas"] for s in sahneler if s["meta"].get("bolum")]
        kart_anlari = [s["bas"] for s in sahneler if s["meta"].get("tip") == "kart"]
        kaydir = sum(map(ord, slug)) % len(AKORLAR)          # her videoda farklı akor sırası
        muz, msr = muzik(toplam, bolum_baslari, kart_anlari, kaydir)
        O.wav_yaz(os.path.join(tmp, "muzik.wav"), muz, msr)
        karisim(os.path.join(tmp, "anlatim.wav"), os.path.join(tmp, "muzik.wav"), os.path.join(pub, "tam_karisim.wav"))
        shutil.rmtree(tmp, ignore_errors=True)
    O.log(f"hazır: {slug} — {toplam:.1f} sn ({toplam / 60:.1f} dk), {len(sahneler)} sahne "
          f"({tasarli} tasarlanmış, {len(sahneler) - tasarli} şablon), {int(round(toplam * FPS))} kare")


if __name__ == "__main__":
    main()
