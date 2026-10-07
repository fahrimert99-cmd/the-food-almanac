#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Food Code weekly draft generator.

This script deliberately creates a reviewable draft only. It never uploads to YouTube.
A human must verify every health claim and separately enable the Food Code OAuth path
before any future publishing integration is added.
"""
import json
import os
import random
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

import ai_script as AI
import video as VIDEO

TOPICS = Path(__file__).with_name("topics.json")
OUT = ROOT / "output"

DISCLAIMER = (
    "This video is for general education and is not medical advice. Individual responses vary. "
    "Speak with a qualified healthcare professional about personal symptoms, diagnoses, or treatment."
)


def load_topic():
    requested = os.environ.get("FOOD_CODE_TOPIC", "").strip().lower()
    topics = json.loads(TOPICS.read_text(encoding="utf-8"))
    if requested:
        for topic in topics:
            if requested in topic["title"].lower():
                return topic
        raise SystemExit(f"Requested Food Code topic was not found: {requested}")
    marker = ROOT / "food_code" / "last_topic.json"
    index = 0
    if marker.exists():
        try:
            previous = json.loads(marker.read_text(encoding="utf-8"))
            index = (int(previous.get("index", -1)) + 1) % len(topics)
        except Exception:
            index = 0
    marker.write_text(json.dumps({"index": index}, indent=2), encoding="utf-8")
    return topics[index]


def prompt_for(topic):
    evidence = ", ".join(topic.get("evidence_required", []))
    return f"""Create a 10-13 minute English-US YouTube documentary script for a faceless health and nutrition channel named Food Code.

TOPIC: {topic['title']}
ANGLE: {topic['angle']}
REQUIRED EVIDENCE THEMES: {evidence}

Editorial safety rules:
- This is general education, not diagnosis or treatment.
- Do not promise weight loss, blood sugar control, disease prevention, healing, detoxification, or guaranteed outcomes.
- Do not recommend a supplement or a specific dose.
- Clearly distinguish established evidence, plausible mechanisms, uncertainty, and individual variation.
- Do not invent studies, numbers, expert names, dates, or URLs.
- Use plain, natural American English. No sensational medical clickbait.
- The first sentence must create curiosity without making a medical promise.
- End with a practical, low-risk takeaway and the exact disclaimer: {DISCLAIMER}
- Use 12-16 scenes. Each scene must contain narration and a concrete English visual description for a consistent editorial AI illustration.
- Include a source list with real institutional or peer-reviewed URLs only if you know them confidently; otherwise leave the URL blank and put the claim in review_required.

Return only valid JSON with this shape:
{{
  "title": "...",
  "description": "...",
  "tags": ["..."],
  "script": "full narration as one string",
  "scenes": [{{"text": "...", "visual": "concrete English illustration description"}}],
  "sources": [{{"claim": "...", "url": "", "why_it_matters": "..."}}],
  "review_required": ["claim that must be checked by a human"]
}}"""


def call_llm(prompt):
    errors = []
    key = AI._openrouter_key()
    if key:
        try:
            return json.loads(AI._temizle(AI._openrouter_with_fallback(
                prompt, key, max_tokens=10000, required_field="script")))
        except Exception as exc:
            errors.append("openrouter: " + str(exc)[:160])
    for env_name, fn in (("GEMINI_API_KEY", AI._gemini), ("CLAUDE_API_KEY", AI._claude)):
        provider_key = os.environ.get(env_name, "").strip()
        if not provider_key:
            continue
        try:
            raw = fn(prompt, provider_key)
            data = json.loads(AI._temizle(raw))
            if data.get("script"):
                return data
        except Exception as exc:
            errors.append(env_name + ": " + str(exc)[:160])
    raise SystemExit("No Food Code LLM provider succeeded: " + " | ".join(errors))


def validate(data):
    required = ("title", "description", "script", "scenes", "sources", "review_required")
    missing = [key for key in required if not data.get(key)]
    if missing:
        raise SystemExit("Food Code JSON missing: " + ", ".join(missing))
    if len(data["script"].split()) < 900:
        raise SystemExit("Draft script is shorter than the 10-13 minute target; refusing render.")
    if len(data["scenes"]) < 10:
        raise SystemExit("Draft has fewer than 10 scenes; refusing render.")
    forbidden = ("cure", "miracle", "guaranteed", "detox", "reverse diabetes", "melt fat")
    lower = data["title"].lower() + " " + data["script"].lower()
    found = [word for word in forbidden if word in lower]
    if found:
        raise SystemExit("Sensational medical language requires revision: " + ", ".join(found))


def render(data):
    OUT.mkdir(exist_ok=True)
    script_path = OUT / "food_code_script.txt"
    script_path.write_text(data["script"], encoding="utf-8")
    scene_data = [{"metin": item["text"], "gorsel": item["visual"]} for item in data["scenes"]]
    cfg = json.loads((Path(__file__).with_name("config.json")).read_text(encoding="utf-8"))
    VIDEO.uret_video(
        str(script_path), str(OUT / "food_code_video.mp4"),
        ses="erkek", dikey=False, hiz="+0%", sahneler=scene_data,
        animasyon=True, cocuk=False, tonlama="+0Hz",
        gorsel_stil="ai", kanca=data["title"], eleven_once=True,
        eleven_voice_id=os.environ.get("FOOD_CODE_ELEVEN_VOICE_ID") or None,
        muzik_tema="genel", ai_sahne=True,
    )
    try:
        import kapak_uzun
        kapak_uzun.kapak_uret(str(OUT / "food_code_video.mp4"), data["title"], str(OUT / "food_code_thumbnail.jpg"), kanca=data["title"])
    except Exception as exc:
        print("Thumbnail skipped:", str(exc)[:140])


def write_review(data, topic):
    (OUT / "food_code_script.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    lines = [
        "# Food Code Human Review",
        "",
        f"**Topic:** {topic['title']}",
        f"**Draft title:** {data['title']}",
        "",
        "> This is a draft. It was not uploaded to YouTube. Verify every health claim before publication.",
        "",
        "## Required checks",
        "",
        "- [ ] Every claim has been checked against the listed source or replaced with cautious wording.",
        "- [ ] No diagnosis, treatment, dose, guaranteed result, or disease claim remains.",
        "- [ ] Sources are real, relevant, current, and not merely search snippets.",
        "- [ ] Visuals do not imply medical proof that the narration does not support.",
        "- [ ] Audio, captions, title, thumbnail, and disclaimer were reviewed.",
        "- [ ] YouTube synthetic-content disclosure remains enabled.",
        "",
        "## Claims requiring review",
        "",
    ]
    lines.extend(f"- {claim}" for claim in data.get("review_required", []))
    lines.extend(["", "## Candidate sources from the draft", ""])
    for source in data.get("sources", []):
        lines.append(f"- **Claim:** {source.get('claim', '')}\n  - **URL:** {source.get('url', '') or '[URL must be verified manually]'}\n  - **Why:** {source.get('why_it_matters', '')}")
    lines += ["", "## Decision", "", "`REVISE` until all boxes above are checked. Change to `APPROVE` only after human review."]
    (OUT / "food_code_review.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    source_lines = ["# Candidate sources — manual verification required", ""]
    for source in data.get("sources", []):
        source_lines.append(f"- {source.get('url') or '[missing URL]'} — {source.get('claim', '')}")
    (OUT / "food_code_sources.md").write_text("\n".join(source_lines) + "\n", encoding="utf-8")


def main():
    topic = load_topic()
    print("Food Code topic:", topic["title"])
    data = call_llm(prompt_for(topic))
    validate(data)
    write_review(data, topic)
    render(data)
    print("Draft complete. No YouTube upload was attempted.")


if __name__ == "__main__":
    main()
