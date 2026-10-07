#!/usr/bin/env python3
"""Azure Speech: Türkçe konuşabilen sesleri listeler, her birine aynı metni okutur (geçici test).
Çıktı: onizleme/azure/sesler/ (NN-SesAdi.mp3, liste.txt, hepsi.mp3)"""
import json, os, subprocess, urllib.request
from xml.sax.saxutils import escape

KEY = os.environ["AZURE_SPEECH_KEY"].strip()
REG = os.environ.get("AZURE_SPEECH_REGION", "swedencentral").strip()
CIKTI = "onizleme/azure/sesler"
METIN = ("Temu'da otuz liraya kulaklık nasıl satılıyor? Cevap: arada kimse yok. "
         "Ürün çoğu zaman doğrudan fabrikadan yola çıkıyor. Peki bedeli kim ödüyor?")
os.makedirs(CIKTI, exist_ok=True)

req = urllib.request.Request(f"https://{REG}.tts.speech.microsoft.com/cognitiveservices/voices/list",
                             headers={"Ocp-Apim-Subscription-Key": KEY})
sesler = json.load(urllib.request.urlopen(req, timeout=60))
tr = [v for v in sesler if v["Locale"] == "tr-TR"]
coklu = [v for v in sesler if v["Locale"] != "tr-TR" and "tr-TR" in (v.get("SecondaryLocaleList") or [])]
# Çok dilli sesler çok; en çok kullanılan İngilizce olanları önce al
coklu.sort(key=lambda v: (not v["Locale"].startswith("en-US"), "DragonHD" in v["ShortName"], v["ShortName"]))
secim = tr + coklu[:14]

import azure.cognitiveservices.speech as sdk
conf = sdk.SpeechConfig(subscription=KEY, region=REG)
conf.set_speech_synthesis_output_format(sdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3)
synth = sdk.SpeechSynthesizer(speech_config=conf, audio_config=None)
satirlar, dosyalar = [], []
for i, v in enumerate(secim, 1):
    ad = v["ShortName"]
    ic = f'<prosody rate="+12%">{escape(METIN)}</prosody>'
    if v["Locale"] != "tr-TR":
        ic = f'<lang xml:lang="tr-TR">{ic}</lang>'
    ssml = (f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="tr-TR">'
            f'<voice name="{ad}">{ic}</voice></speak>')
    r = synth.speak_ssml_async(ssml).get()
    durum = "OK" if r.reason == sdk.ResultReason.SynthesizingAudioCompleted else f"HATA {r.reason}"
    if durum == "OK":
        yol = os.path.join(CIKTI, f"{i:02d}-{ad}.mp3")
        open(yol, "wb").write(r.audio_data)
        dosyalar.append(yol)
    satirlar.append(f"{i:02d}  {ad:45s} {v['Gender']:7s} {v.get('VoiceType','')}  {durum}")
    print(satirlar[-1])
open(os.path.join(CIKTI, "liste.txt"), "w", encoding="utf-8").write(
    f"Türkçe yerel: {len(tr)}  Türkçe konuşabilen çok dilli: {len(coklu)}\n\n" + "\n".join(satirlar) + "\n\nTüm çok dilliler:\n"
    + "\n".join(v["ShortName"] for v in coklu) + "\n")
