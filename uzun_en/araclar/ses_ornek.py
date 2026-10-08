#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ses karşılaştırma örnekleri: aynı paragrafı mevcut Piper sesiyle ve Kokoro seslerinden birkaçıyla seslendirir.

  python3 uzun_en/araclar/ses_ornek.py CIKTI_KLASORU     # girdi: uzun_en/ses_ornek.json

Çıktı: her ses için ses düzeyi eşitlenmiş bir MP3 (01_piper_<ses>.mp3, 02_kokoro_<ses>.mp3 ...). Üretim hattına dokunmaz;
yalnızca dinleyip karar vermek içindir. Kokoro (Apache 2.0) ücretsizdir ve yerelde, işlemcide çalışır.
"""
import os, subprocess, sys, wave

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402


def mp3(wav, hedef):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
                    "-ar", "44100", "-b:a", "128k", hedef], check=True)
    os.remove(wav)


def piper(metin, ses, olcek, hedef):
    from piper import PiperVoice, SynthesisConfig
    model_dir = os.path.join(O.KOK, ".model")
    os.makedirs(model_dir, exist_ok=True)
    if not os.path.exists(os.path.join(model_dir, f"{ses}.onnx")):
        subprocess.run([sys.executable, "-m", "piper.download_voices", "--data-dir", model_dir, ses], check=True)
    voice = PiperVoice.load(os.path.join(model_dir, f"{ses}.onnx"))
    with wave.open(hedef + ".wav", "wb") as wf:
        voice.synthesize_wav(metin, wf, syn_config=SynthesisConfig(length_scale=olcek))
    mp3(hedef + ".wav", hedef)


def kokoro(metin, sesler, hiz, klasor, sira):
    import numpy as np
    import soundfile as sf
    from kokoro import KPipeline
    hatlar = {}
    for ses in sesler:
        dil = ses[0]                                        # a: Amerikan, b: İngiliz İngilizcesi
        if dil not in hatlar:
            hatlar[dil] = KPipeline(lang_code=dil, repo_id="hexgrad/Kokoro-82M")
        parca = [np.asarray(a) for _, _, a in hatlar[dil](metin, voice=ses, speed=hiz)]
        hedef = os.path.join(klasor, f"{sira:02d}_kokoro_{ses}.mp3")
        sf.write(hedef + ".wav", np.concatenate(parca), 24000)
        mp3(hedef + ".wav", hedef)
        O.log(f"✓ kokoro {ses}")
        sira += 1


def main():
    klasor = sys.argv[1]
    os.makedirs(klasor, exist_ok=True)
    g = O.json_oku(os.path.join(O.KOK, "ses_ornek.json"), {}) or {}
    m = O.marka()
    metin = g["metin"]
    ses = m.get("ses", "en_US-norman-medium")
    piper(metin, ses, float(m.get("length_scale", 1.08)), os.path.join(klasor, f"01_piper_{ses}_simdiki.mp3"))
    O.log(f"✓ piper {ses}")
    kokoro(metin, g.get("kokoro_sesler", ["af_heart"]), float(g.get("hiz", 1.0)), klasor, 2)


if __name__ == "__main__":
    main()
