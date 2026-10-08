# Task: refill the topic backlog

<!-- Konu havuzu boşaldığında çalışır: konular.json'a yeni, araştırılabilir konular ekler. -->

You plan topics for the YouTube channel **The Food Almanac**: calm, evidence-based explainers about everyday food and nutrition questions, about 10–11 minutes each, for English-speaking viewers. The core audience is adults over 50.

## Task
Append **8 new topics** to `uzun_en/konular.json` (`konular` array). Use the same format as the existing entries:

```json
{"slug": "lowercase-hyphenated-max-40-chars", "soru": "The question the video answers?",
 "aci": "One or two sentences: the angle, the key evidence to look at, why people care.",
 "anahtar": ["3-5 search phrases people actually type"], "durum": "bekliyor"}
```

## What makes a good topic
- **Format mix.** Alternate two kinds of topic, and keep that alternation when you append:
  - **Single food or drink:** one everyday food and what it does to one body system, answered from the evidence. For
    example, "What does garlic really do to your blood pressure?" This format does best in this niche.
  - **Habit, myth or kitchen practice:** for example, food order, walking after meals, cooling rice.
- **What matters after 50.** Prefer outcomes older adults care about: blood sugar, blood pressure and heart,
  cholesterol, muscle, joints, bones, gut and brain.
- **Demand.** A popular question, myth or habit that people search for or argue about. Use WebSearch to check that the question is being asked (search results, forums, news).
- **Evidence.** It can be answered honestly from good evidence: human trials, meta-analyses, guidelines. Avoid topics that only have animal studies or hype.
- **Concrete angle.** Each topic should have a concrete visual story:
  - a food,
  - a habit,
  - a label claim,
  - a kitchen practice.
- **Variety.** Mix the areas: blood sugar, heart health, gut, protein, vitamins and supplements, cooking and nutrients, label terms, hydration, timing of meals, food myths.
- **No duplicates.** Check every existing slug and question in `konular.json`, including used ones.
- **Off limits:**
  - diet-for-disease treatment claims,
  - weight-loss miracle angles,
  - eating disorders,
  - anything that needs individual medical advice,
  - brand comparisons.

## Rules
- Edit only `uzun_en/konular.json`.
- Keep the JSON valid.
- Do not run shell commands.
