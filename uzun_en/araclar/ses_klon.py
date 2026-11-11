#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ses klonu denemesi: anlatıcının ses örneğinden (referans) Chatterbox ile örnek cümleler üretir; hızı ölçer.

  python3 uzun_en/araclar/ses_klon.py --referans REF.wav --cikti DIR [--tanim uzun_en/ses_klon.json]

Chatterbox (Resemble AI, MIT lisansı: ticari kullanım serbest), yerel ve ücretsiz; API anahtarı / kredi yok. Modeller
Hugging Face'ten iner (ResembleAI/chatterbox-turbo, ResembleAI/chatterbox). Çıktılar her motorun sesi Perth filigranı
taşır (duyulmaz). Tanım: {"metinler": ["cümle", ...], "modeller": [{"ad": "turbo"}, {"ad": "standart",
"exaggeration": 0.4, "cfg_weight": 0.4}]}. Çıktı: DIR/ornek_<ad>.mp3 (cümleler arası kısa duraklama) + DIR/rapor.json.
"""
import argparse, json, os, subprocess, sys, time

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

ARA = 0.35   # cümleler arası sessizlik (sn), uzun videodaki gibi


def sentezci(ayar, referans):
    """metin -> (float32 dalga, örnekleme hızı) üreten fonksiyon ve yükleme süresi. Model bir kez yüklenir; ses koşulları
    (referans) bir kez hazırlanır."""
    import torch
    torch.set_num_threads(os.cpu_count() or 4)
    t0 = time.time()
    if ayar["ad"] == "turbo":
        from chatterbox.tts_turbo import ChatterboxTurboTTS as Model
    else:
        from chatterbox.tts import ChatterboxTTS as Model
    m = Model.from_pretrained(device="cpu")
    m.prepare_conditionals(referans, exaggeration=float(ayar.get("exaggeration", 0.5)))
    yukleme = time.time() - t0

    def yaz(metin):
        kw = {"temperature": float(ayar.get("temperature", 0.8))}
        if ayar["ad"] != "turbo":
            kw.update(exaggeration=float(ayar.get("exaggeration", 0.5)), cfg_weight=float(ayar.get("cfg_weight", 0.5)))
        with torch.inference_mode():
            wav = m.generate(metin, **kw)
        return wav.squeeze(0).cpu().numpy().astype(np.float32), m.sr
    return yaz, yukleme


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--referans", required=True)
    ap.add_argument("--cikti", required=True)
    ap.add_argument("--tanim", default=os.path.join(O.KOK, "ses_klon.json"))
    a = ap.parse_args()
    tanim = O.json_oku(a.tanim)
    os.makedirs(a.cikti, exist_ok=True)
    rapor = []
    for ayar in tanim["modeller"]:
        try:
            yaz, yukleme = sentezci(ayar, a.referans)
        except Exception as e:                       # bir model inmezse öteki yine denensin
            O.log(f"✗ {ayar['ad']}: model yüklenemedi ({type(e).__name__}: {str(e)[:200]})")
            rapor.append({"model": ayar["ad"], "hata": str(e)[:300]})
            continue
        parca, sure_uretim, sr = [], 0.0, 24000
        for metin in tanim["metinler"]:
            t0 = time.time()
            x, sr = yaz(metin)
            sure_uretim += time.time() - t0
            parca += [x, np.zeros(int(ARA * sr), np.float32)]
            O.log(f"   {ayar['ad']}: {len(x) / sr:.1f} sn ses, {time.time() - t0:.1f} sn  {metin[:60]}")
        ses = np.concatenate(parca)
        wav = os.path.join(a.cikti, f"ornek_{ayar['ad']}.wav")
        O.wav_yaz(wav, ses, sr)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-c:a", "libmp3lame", "-b:a", "128k",
                        wav[:-4] + ".mp3"], check=True)
        os.remove(wav)
        r = {"model": ayar["ad"], "ayar": ayar, "yukleme_sn": round(yukleme, 1), "uretim_sn": round(sure_uretim, 1),
             "ses_sn": round(len(ses) / sr, 1), "hiz_orani": round(sure_uretim / max(len(ses) / sr, 0.1), 2)}
        rapor.append(r)
        O.log(f"✓ {ayar['ad']}: {r['ses_sn']} sn ses {r['uretim_sn']} sn'de (oran {r['hiz_orani']}; "
              f"10 dk'lık anlatım ~{r['hiz_orani'] * 10:.0f} dk)")
    O.json_yaz(os.path.join(a.cikti, "rapor.json"), rapor)
    if not any("hata" not in r for r in rapor):
        sys.exit("hiçbir model çalışmadı")


if __name__ == "__main__":
    main()
