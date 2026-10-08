#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cümle cümle seslendirme: Kokoro ya da Piper (ikisi de yerel, açık kaynak TTS) — ücretli servis yok.

  python3 uzun_en/araclar/ses.py --proje SLUG
  python3 uzun_en/araclar/ses.py --proje SLUG --motor     # yalnızca bu projenin ses motorunu yazar (kurulum için)

Motor ve ses marka.json'dan gelir ("ses_motoru", "ses", "ses_hiz" / Piper için "length_scale"); proje.json'daki aynı
alanlar önceliklidir. Böylece eski projeler kendi seslerinde sabit kalır.

projeler/SLUG/proje.json -> projeler/SLUG/ses/SS_CC.wav + zaman.json (her cümlenin metni, süresi ve
virgül duraklamaları; animasyon ve altyazı bu sürelere göre senkronlanır).
Metni değişmeyen cümleler yeniden seslendirilmez (önceki WAV korunur; tasarlanmış sahnelerin zamanlaması bozulmaz).
"seslendirme_duzelt" ({"HbA1c": "H B A 1 C"}) yalnızca seslendirmeye uygulanır; altyazı özgün metni tutar.
"""
import argparse, hashlib, os, subprocess, sys, wave

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402


def kirp_ve_olc(yol, esik_db=-45.0, durak_db=-38.0, en_az_durak=0.11):
    """Cümle WAV'ının baş/son sessizliğini kırpar ve cümle içi duraklamaları (virgüller) ölçer."""
    import numpy as np
    with wave.open(yol, "rb") as wf:
        sr, prm = wf.getframerate(), wf.getparams()
        x = np.frombuffer(wf.readframes(wf.getnframes()), dtype=np.int16)
    esik = 32768 * 10 ** (esik_db / 20)
    ses = np.flatnonzero(np.abs(x) > esik)
    if len(ses):
        x = x[max(0, ses[0] - int(0.03 * sr)): min(len(x), ses[-1] + int(0.05 * sr))]
    with wave.open(yol, "wb") as wf:
        wf.setparams(prm)
        wf.writeframes(x.tobytes())
    pen = int(0.01 * sr)
    n = len(x) // pen
    rms = np.sqrt((x[: n * pen].astype(np.float64).reshape(n, pen) ** 2).mean(axis=1))
    sessiz = rms < 32768 * 10 ** (durak_db / 20)
    duraklar, i = [], 0
    while i < n:
        if sessiz[i]:
            j = i
            while j < n and sessiz[j]:
                j += 1
            if i > 3 and j < n - 3 and (j - i) * 0.01 >= en_az_durak:
                duraklar.append([round(i * 0.01, 3), round(j * 0.01, 3)])
            i = j
        else:
            i += 1
    return len(x) / sr, duraklar


def tek_kelime_kirp(yol, durak_db=-38.0, en_az_durak=0.11, en_az_kelime=0.25):
    """Piper tek kelimelik cümlelerde ("One.", "Four.") kelimeden sonra parazit üretebiliyor:
    sessizlikle ayrılmış bölümlerden 0,25 sn'den uzun İLK bölüm (kelime) tutulur."""
    import numpy as np
    with wave.open(yol, "rb") as wf:
        sr, prm = wf.getframerate(), wf.getparams()
        x = np.frombuffer(wf.readframes(wf.getnframes()), dtype=np.int16)
    pen = int(0.01 * sr)
    n = len(x) // pen
    if n == 0:
        return
    rms = np.sqrt((x[: n * pen].astype(np.float64).reshape(n, pen) ** 2).mean(axis=1))
    ses = rms >= 32768 * 10 ** (durak_db / 20)
    bolumler, i = [], 0
    while i < n:
        if ses[i]:
            j = i
            while j < n and (ses[j] or (j + 1 < n and not ses[j] and
                                        np.any(ses[j:min(n, j + int(en_az_durak / 0.01))]))):
                j += 1
            bolumler.append((i, j))
            i = j
        else:
            i += 1
    kelime = next(((a, b) for a, b in bolumler if (b - a) * 0.01 >= en_az_kelime), None)
    if not kelime or kelime == (bolumler[0][0], bolumler[-1][1]):
        return
    a, b = kelime
    x = x[max(0, a * pen - int(0.03 * sr)): min(len(x), b * pen + int(0.06 * sr))]
    with wave.open(yol, "wb") as wf:
        wf.setparams(prm)
        wf.writeframes(x.tobytes())


def ayarlar(proje, m):
    """(motor, ses, ölçek): proje.json'daki alanlar marka.json'dakilerden önceliklidir."""
    motor = proje.get("ses_motoru") or m.get("ses_motoru", "piper")
    ses = proje.get("ses") or m.get("ses", "en_US-norman-medium")
    if motor == "kokoro":
        return motor, ses, float(proje.get("ses_hiz", m.get("ses_hiz", 1.0)))
    return motor, ses, float(proje.get("length_scale", m.get("length_scale", 1.08)))


def sentezci(motor, ses, olcek, model_dir):
    """metin -> WAV dosyası yazan fonksiyon. Model ilk çağrıda yüklenir."""
    durum = {}
    if motor == "kokoro":
        def yaz(metin, yol):
            import numpy as np
            if "hat" not in durum:
                from kokoro import KPipeline
                durum["hat"] = KPipeline(lang_code=ses[0], repo_id="hexgrad/Kokoro-82M")   # a: Amerikan, b: İngiliz
            parca = [np.asarray(a, dtype=np.float32) for _, _, a in durum["hat"](metin, voice=ses, speed=olcek)]
            O.wav_yaz(yol, np.concatenate(parca) if parca else np.zeros(2400, np.float32), 24000)
        return yaz

    def yaz(metin, yol):
        from piper import PiperVoice, SynthesisConfig
        if "voice" not in durum:
            if not os.path.exists(os.path.join(model_dir, f"{ses}.onnx")):
                subprocess.run([sys.executable, "-m", "piper.download_voices", "--data-dir", model_dir, ses], check=True)
            durum["voice"] = PiperVoice.load(os.path.join(model_dir, f"{ses}.onnx"))
        with wave.open(yol, "wb") as wf:
            durum["voice"].synthesize_wav(metin, wf, syn_config=SynthesisConfig(length_scale=olcek))
    return yaz


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--motor", action="store_true", help="yalnızca ses motorunu yaz (piper / kokoro)")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    proje = O.proje(slug)
    m = O.marka()
    motor, ses, olcek = ayarlar(proje, m)
    if a.motor:
        return print(motor)
    duzelt = proje.get("seslendirme_duzelt") or {}
    cikti = os.path.join(O.proje_dir(slug), "ses")
    os.makedirs(cikti, exist_ok=True)
    eski = O.json_oku(os.path.join(cikti, "zaman.json"), {}) or {}
    eski_c = {(z["id"], k): c for z in eski.get("sahneler", []) for k, c in enumerate(z["cumleler"], 1)}

    model_dir = os.path.join(O.KOK, ".model")
    os.makedirs(model_dir, exist_ok=True)
    seslendir = sentezci(motor, ses, olcek, model_dir)
    zaman = {"ses": ses, "motor": motor, "length_scale": olcek, "sahneler": []}
    yeni = tekrar = 0
    for s in proje["sahneler"]:
        kayit = {"id": s["id"], "cumleler": []}
        for k, c in enumerate(O.cumleler(s["metin"]), 1):
            soyle = c
            for e, y in duzelt.items():
                soyle = soyle.replace(e, y)
            # Piper imzası eskisiyle aynı kalır (mevcut projelerin sesleri yeniden üretilmesin).
            imza = hashlib.sha1((f"{ses}|{olcek}|{soyle}" if motor == "piper" else f"{motor}|{ses}|{olcek}|{soyle}")
                                .encode()).hexdigest()[:12]
            ad = f"{s['id']:02d}_{k:02d}.wav"
            yol = os.path.join(cikti, ad)
            onceki = eski_c.get((s["id"], k))
            if onceki and os.path.exists(yol) and (onceki.get("imza") == imza or
                                                   (not onceki.get("imza") and onceki.get("metin") == c)):
                kayit["cumleler"].append(dict(onceki, dosya=ad, imza=imza))
                tekrar += 1
                continue
            seslendir(soyle, yol)
            if len(c.split()) == 1:
                tek_kelime_kirp(yol)
            sure, duraklar = kirp_ve_olc(yol)
            kayit["cumleler"].append({"metin": c, "dosya": ad, "sure": round(sure, 3), "duraklar": duraklar, "imza": imza})
            yeni += 1
            O.log(f"{s['id']}.{k}: {sure:.2f} sn  {c}")
        zaman["sahneler"].append(kayit)
    # artık kullanılmayan WAV'lar
    kullanilan = {c["dosya"] for z in zaman["sahneler"] for c in z["cumleler"]}
    for ad in os.listdir(cikti):
        if ad.endswith(".wav") and ad not in kullanilan:
            os.remove(os.path.join(cikti, ad))
    O.json_yaz(os.path.join(cikti, "zaman.json"), zaman)
    toplam = sum(c["sure"] for z in zaman["sahneler"] for c in z["cumleler"])
    O.log(f"ses hazır: {yeni} yeni, {tekrar} önbellekten; anlatım {toplam / 60:.1f} dk")


if __name__ == "__main__":
    main()
