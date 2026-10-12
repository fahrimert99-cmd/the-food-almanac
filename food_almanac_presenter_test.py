#!/usr/bin/env python3
"""Food Almanac Presenter Test

HeyGen'in resmi CLI'sini Python'dan çağırır.
- API anahtarını kodda tutmaz; HEYGEN_API_KEY ortam değişkenini kullanır.
- HeyGen Video Agent ile bir presenter videosu oluşturur.
- Üretim tamamlanınca metadata'yı kaydeder ve MP4'ü indirir.

Ön koşullar:
  1) HeyGen CLI kurulu olmalı: https://developers.heygen.com/cli
  2) HEYGEN_API_KEY ortam değişkeni ayarlanmalı.

Örnek:
  export HEYGEN_API_KEY='yeni_anahtarını_buraya_koyma'
  python3 food_almanac_presenter_test.py

Not: Anahtarı bu dosyaya, komut satırına veya Git'e yazmayın.
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

DEFAULT_PROMPT = """Create a 60- to 75-second English presenter video for the YouTube channel The Food Almanac.

Topic: The Food Order Effect — does eating vegetables and protein before carbohydrates reduce a blood sugar spike?

Audience: general adults interested in evidence-based nutrition, including people with prediabetes.
Tone: calm, clear, trustworthy, and non-alarmist. Do not make medical promises.

Structure:
1. Open with a curiosity hook: the same meal can produce a different blood-sugar response depending on eating order.
2. Explain the proposed mechanism in plain English: fiber, protein, digestion speed, and gut hormones.
3. State that small meal studies have limitations and do not prove that meal order replaces medication, exercise, or medical care.
4. Give three practical, low-risk takeaways: start with non-starchy vegetables, eat protein before the starch, and avoid sugary drinks.
5. End with: 'The Food Almanac — evidence over hype.'

Visual direction: clean scientific presenter format, subtle food and digestive-system illustrations, readable on-screen captions, 16:9 landscape layout. Use a professional neutral presenter and a warm, uncluttered background."""


def run_cli(args: list[str], *, timeout: int | None = None) -> tuple[str, str, int]:
    """Run the official HeyGen CLI and return stdout, stderr, exit code."""
    env = os.environ.copy()
    # The CLI reads this variable. It is deliberately never printed.
    if not env.get("HEYGEN_API_KEY"):
        raise RuntimeError("HEYGEN_API_KEY ortam değişkeni ayarlı değil.")

    completed = subprocess.run(
        ["heygen", *args],
        env=env,
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )
    return completed.stdout, completed.stderr, completed.returncode


def parse_json_output(stdout: str) -> Any:
    """Parse the CLI's JSON stdout, with a useful error if it is not JSON."""
    try:
        return json.loads(stdout)
    except json.JSONDecodeError as exc:
        preview = stdout[-1000:] if stdout else "<boş çıktı>"
        raise RuntimeError(f"HeyGen CLI JSON çıktı üretmedi. Son çıktı:\n{preview}") from exc


def find_value(value: Any, keys: set[str]) -> Any:
    """Find a key recursively in a JSON response."""
    if isinstance(value, dict):
        for key in keys:
            if key in value and value[key] not in (None, ""):
                return value[key]
        for child in value.values():
            found = find_value(child, keys)
            if found not in (None, ""):
                return found
    elif isinstance(value, list):
        for child in value:
            found = find_value(child, keys)
            if found not in (None, ""):
                return found
    return None


def save_json(path: Path, data: Any) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Food Almanac için HeyGen Presenter Test videosu üretir.")
    parser.add_argument("--prompt", default=DEFAULT_PROMPT, help="Video Agent promptu.")
    parser.add_argument("--prompt-file", type=Path, help="Promptu UTF-8 metin dosyasından oku.")
    parser.add_argument("--output-dir", type=Path, default=Path("food_almanac_presenter_test"), help="Çıktı klasörü.")
    parser.add_argument("--timeout", default="20m", help="HeyGen bekleme süresi; örn. 20m veya 30m.")
    parser.add_argument("--dry-run", action="store_true", help="İstek göndermeden promptu ve komutu göster.")
    args = parser.parse_args()

    if args.prompt_file:
        prompt = args.prompt_file.read_text(encoding="utf-8").strip()
    else:
        prompt = args.prompt.strip()

    if not prompt:
        raise RuntimeError("Prompt boş olamaz.")

    if shutil.which("heygen") is None:
        raise RuntimeError(
            "HeyGen CLI bulunamadı. Resmi kurulum: https://developers.heygen.com/cli"
        )

    if not os.environ.get("HEYGEN_API_KEY"):
        raise RuntimeError(
            "HEYGEN_API_KEY ayarlı değil. Anahtarı koda yazmadan ortam değişkeni olarak ayarlayın."
        )

    args.output_dir.mkdir(parents=True, exist_ok=True)
    request_path = args.output_dir / "request.json"
    request_path.write_text(
        json.dumps(
            {
                "created_at": datetime.now(timezone.utc).isoformat(),
                "provider": "HeyGen Video Agent via official CLI",
                "prompt": prompt,
                "aspect_ratio": "16:9",
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    create_command = [
        "video-agent",
        "create",
        "--prompt",
        prompt,
        "--wait",
        "--timeout",
        args.timeout,
    ]

    if args.dry_run:
        print("DRY RUN — HeyGen'e istek gönderilmedi.")
        print(f"Prompt kaydedildi: {request_path}")
        print("Komut: heygen video-agent create --prompt '<prompt>' --wait --timeout", args.timeout)
        return 0

    print("HeyGen videosu oluşturuluyor; tamamlanması birkaç dakika sürebilir...", file=sys.stderr)
    stdout, stderr, code = run_cli(create_command, timeout=None)

    if code != 0:
        # stderr, olası token/anahtar sızıntılarını önlemek için olduğu gibi değil,
        # yalnızca tanılama mesajı olarak gösterilir; anahtar hiçbir zaman CLI'ye argüman yapılmaz.
        raise RuntimeError(f"HeyGen video üretimi başarısız oldu (çıkış kodu {code}).\n{stderr[-3000:]}")

    create_response = parse_json_output(stdout)
    create_path = args.output_dir / "create_response.json"
    save_json(create_path, create_response)

    video_id = find_value(create_response, {"video_id", "id"})
    if not video_id:
        raise RuntimeError(f"Yanıtta video_id bulunamadı. Yanıt: {create_path}")

    stdout, stderr, code = run_cli(["video", "get", str(video_id)])
    if code != 0:
        raise RuntimeError(f"Video metadata alınamadı (çıkış kodu {code}).\n{stderr[-3000:]}")
    video_response = parse_json_output(stdout)
    metadata_path = args.output_dir / "video_metadata.json"
    save_json(metadata_path, video_response)

    video_page_url = find_value(video_response, {"video_page_url"})
    video_url = find_value(video_response, {"video_url"})

    print("Video hazır.")
    print(f"Video ID: {video_id}")
    if video_page_url:
        print(f"HeyGen sayfası: {video_page_url}")
    if video_url:
        print(f"MP4 URL: {video_url}")

    # CLI, binary indirme sonrası JSON olarak yerel path döndürür.
    stdout, stderr, code = run_cli(["video", "download", str(video_id)])
    if code == 0:
        download_response = parse_json_output(stdout)
        download_path = args.output_dir / "download_response.json"
        save_json(download_path, download_response)
        local_path = find_value(download_response, {"path", "file_path"})
        if local_path:
            print(f"Yerel video: {local_path}")
        else:
            print(f"İndirme yanıtı: {download_path}")
    else:
        print("Video hazır ancak yerel indirme başarısız oldu.", file=sys.stderr)
        print(stderr[-2000:], file=sys.stderr)

    print(f"Metadata klasörü: {args.output_dir.resolve()}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        print("İşlem kullanıcı tarafından durduruldu.", file=sys.stderr)
        raise SystemExit(130)
    except Exception as exc:
        print(f"HATA: {exc}", file=sys.stderr)
        raise SystemExit(1)
