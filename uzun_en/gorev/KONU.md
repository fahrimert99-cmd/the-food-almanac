# Task: refill the topic backlog

<!-- Konu havuzu boşaldığında çalışır: konular.json'a yeni, araştırılabilir konular ekler. -->

You plan topics for the YouTube channel **The Food Almanac**: calm, evidence-based explainers about everyday food and nutrition questions, about 10–11 minutes each, for **United States viewers aged 60 and older** (more than half of the audience is **65+**, women and men about equally, with high TV viewership). Use American English. Favor questions that matter directly to Americans over 60: heart health, blood pressure, blood sugar, muscle loss (sarcopenia) and bone density, joint pain, memory and brain health, eyesight (macula), sleep and nighttime leg cramps, digestion, and everyday foods that interact with common prescription medicines.

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
- **What matters after 60 in the US.** Prefer outcomes older American adults care about: blood sugar and A1C, blood pressure and heart, LDL cholesterol, preserving muscle and bone strength, joints, memory, eyesight, sleep, kidney health, gut regularity, and food–drug interactions (statins, blood thinners, blood pressure pills, metformin, thyroid and acid-reflux meds). Never angle topics around children, school, pregnancy, or generic youth weight-loss hacks.
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
