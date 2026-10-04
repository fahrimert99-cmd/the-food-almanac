#!/usr/bin/env python3
# OpenRouter senaryo + OpenRouter görsel + ücretsiz edge-tts video denemesi.
import json
import os
from pathlib import Path

import ai_script
import video as V

TITLE = "İndirim etiketi neden sizi yanıltabilir?"
OUT = Path("output")


def main():
    if not ai_script._openrouter_key():
        raise SystemExit("OPENROUTER_API_KEY eksik")
    OUT.mkdir(exist_ok=True)
    print("[1/3] OpenRouter ile senaryo üretiliyor...")
    data = ai_script.uret(TITLE)
    (OUT / "openrouter_senaryo.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT / "openrouter_senaryo.md").write_text(
        f"# {data.get('baslik', TITLE)}\n\n{data.get('script', '')}\n",
        encoding="utf-8",
    )
    script_path = OUT / "openrouter_script.txt"
    script_path.write_text(data.get("script", ""), encoding="utf-8")

    print("[2/3] OpenRouter görselleri + ücretsiz edge-tts ses hazırlanıyor...")
    # eleven_once=False ve workflow'da ElevenLabs secret'i verilmediği için
    # ücretsiz edge-tts fallback'i kullanılır; ElevenLabs kredisi harcanmaz.
    V.uret_video(
        str(script_path),
        str(OUT / "openrouter_trial.mp4"),
        ses="erkek",
        dikey=True,
        hiz="+6%",
        sahneler=data.get("sahneler"),
        animasyon=True,
        cocuk=False,
        tonlama="+0Hz",
        gorsel_stil="illustrasyon",
        kanca=data.get("baslik") or TITLE,
        eleven_once=False,
        ai_sahne=True,
        ai_fallback=False,
    )
    print("[3/3] Deneme tamamlandı:", OUT / "openrouter_trial.mp4")


if __name__ == "__main__":
    main()
