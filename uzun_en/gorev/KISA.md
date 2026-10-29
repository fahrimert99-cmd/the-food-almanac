# Task: cut a YouTube Short from a finished video (`kisa.json`)

<!-- Shorts ajanı görevi (Claude Code / Gemini CLI, GitHub Actions içinde). Çıktı İngilizcedir. -->

You are the Shorts editor of **The Food Almanac** (see `uzun_en/marka.json`). The long video for project **SLUG** is
finished and uploaded. Each long video gets **two** Shorts, cut from different parts of the video. The prompt tells you
which one you are making (Short 1 or Short 2). Your job is to build a 40–50 second vertical Short from the video's
existing narration. You do not write
new narration: you pick sentences that are already recorded, in the order viewers should hear them. The tool adds:
- the vertical images,
- the hook title,
- word-by-word captions,
- music,
- a closing call to action ("watch the full video", "subscribe").

The Short's job is to make a scrolling viewer stop, learn one surprising, sourced fact, and want the full video.

## Read first
1. The sentence list:
   - `uzun_en/projeler/SLUG/cikti/kisa_liste.md` for Short 1,
   - `uzun_en/projeler/SLUG/cikti/kisa_2_liste.md` for Short 2.

   It shows every scene with:
   - its image description,
   - its on-screen title,
   - its source chip,
   - its numbered sentences with their durations.

   **Only these sentences exist.** Sentences marked `USED` are already in the other Short: never use them.
2. `uzun_en/projeler/SLUG/proje.json`: the full script, for context.
3. Approved examples from the egg video:
   - `uzun_en/projeler/eggs-and-cholesterol/kisa.json` (Short 1): it opens on a question, gives the key number with its
     source, shows the other side, and ends on a practical takeaway.
   - `uzun_en/projeler/eggs-and-cholesterol/kisa_2.json` (Short 2): a different angle from the same video (the 300 mg
     limit and the egg yolk). It has its own hook, its own number badge and its own takeaway.

## Deliverable
Write only the file the prompt names:
- `uzun_en/projeler/SLUG/kisa.json` for Short 1,
- `uzun_en/projeler/SLUG/kisa_2.json` for Short 2.

Both files use the same format:

```json
{
  "baslik": ["1 EGG A DAY", "HEART RISK?"],
  "baslik_yt": "1 Egg a Day: What 32 Years of Data Show",
  "aciklama": "Harvard researchers followed more than 215,000 people for up to 32 years. Here is what one egg a day did to their heart risk.",
  "parcalar": [
    {"sahne": 1, "cumleler": [0], "baslik": null, "etiket": null},
    {"sahne": 1, "cumleler": [1], "gorsel": 29,
     "baslik": {"satirlar": ["EGGS,", "32 YEARS"], "vurgu": "215,000", "not": "people followed"},
     "etiket": "Drouin-Chartier et al. · BMJ · 2020"},
    {"sahne": 40, "cumleler": [0], "baslik": {"satirlar": ["SMALL,", "BUT REAL"]}}
  ]
}
```

Fields:
- **`baslik`**: the hook title. It is shown big over the first part, until the first sentence ends.
  - 1–2 lines, UPPERCASE, at most 14 characters per line.
  - Make it a question or a sharp claim the Short then answers.
- **`baslik_yt`**: the YouTube title.
  - 15–70 characters, no `#`.
  - Specific and curious, and true to what the Short says. For example "1 Egg a Day: What 32 Years of Data Show".
  - Do not reuse the long video's title word for word.
- **`aciklama`**: 1–2 plain sentences for the description, 40–300 characters, no links or `#`. The tool adds:
  - the full-video link,
  - the sources,
  - the disclaimer,
  - hashtags.
- **`parcalar`**: 5–14 parts, played in this order. Each part is:
  - **`sahne`** (required): the scene number.
  - **`cumleler`** (required): sentence indices of that scene, ascending (see `kisa_liste.md`).
  - **`gorsel`** (optional): show another scene's image instead. Use it to split a long passage across several images,
    or when a different scene's picture fits the sentence better. Pick images that show exactly what the sentence says.
  - **`baslik`** (optional): the kinetic title for this part.
    - If you leave it out, the scene's own on-screen title is used, if it has one.
    - Use `null` for no title.
    - Otherwise give `{"satirlar": [1–2 UPPERCASE lines of ≤ 14 characters], "vurgu"?: "number ≤ 9 characters", "not"?: "≤ 28 characters"}`.
      `vurgu` is a count-up number badge (e.g. "215,000", "-5 MMHG", "+6%") with `not` as its caption.
  - **`etiket`** (optional): the source chip (≤ 40 characters, like "Ried · J Nutr · 2016").
    - If you leave it out, the scene's own chip is used.
    - Use `null` for none.
    - Show it whenever a part states a study finding.
  - **`kaydir`** (optional): `true` slowly pans a wide side-by-side comparison image. It only matters when no vertical
    image can be made.

## Short 1 and Short 2
- **Short 1** carries the video's main question and main answer, usually from the opening and the evidence sections.
- **Short 2** takes a different angle from another part of the video. Good angles:
  - a surprising mechanism or number,
  - a myth and its history,
  - who should be more careful,
  - a practical how-to.

  Rules for Short 2:
  - Give it its own hook (`baslik`) and its own `baslik_yt`. Both must differ from Short 1.
  - It must make sense to someone who never saw Short 1.
  - It must not reuse any sentence marked `USED`.
  - Where possible, use images Short 1 did not use.
- **Short 3** (an extra Short from an older video) follows the Short 2 rules: its own angle, hook and `baslik_yt`,
  different from both earlier Shorts, and no sentence marked `USED`.

## Rules
- **Length.** Narration (the sum of the sentence durations plus small gaps) must be 25–52 seconds. Aim for 38–45 s.
  The closing call to action adds about 12 s; the whole Short must stay under 60 s.
- **One image must not stay too long.** A part with more than one sentence may last at most 9 s. Single sentences of
  about 8 s are fine, but give them a strong image or a number badge.
- **Open with the hook: the first 2 seconds decide everything.** Channel data (25 October 2026): only 18–30% of
  people who saw our Shorts in the feed kept watching; the rest swiped away in the first seconds. Those who stayed
  watched about 40% of the Short.
  - The first part is one short sentence, ideally under 4 s (never over 5 s). It must hit immediately: the most
    surprising number, a direct claim, or the viewer's own situation ("One egg a day, every day, for 32 years.").
    Avoid slow scene-setting openers ("If you eat oatmeal to look after your heart, here is what the research shows").
  - The hook title (`baslik`) must work on its own, with the sound off: a short question or sharp claim, ideally
    with a number or a verdict word ("3 G A DAY?", "MYTH OR FACT?", "-10 LDL?"). Not just the food's name.
  - The key number must be on screen by the second part (about 5 s in), as a `vurgu` badge with its source chip.
  - Avoid sentences that start with "So", "And", "But" or "That" and need earlier context.
  - No sentence that only restates the question ("So what does the research say?") anywhere in the first 10 s.
- **Self-contained.** Every sentence must make sense without the ones you skipped. Check pronouns ("this", "they",
  "that study") and numbers that refer back. When in doubt, choose another sentence.
- **Stay honest.**
  - Keep the evidence balanced, as in the long video: the main finding, its limits or the other side, then the practical takeaway.
  - Never pick sentences so that a finding sounds stronger, more certain or more causal than the long video says.
  - Keep cautions about medication or conditions if the topic needs them.
- **End on the takeaway.** The last part should be the practical answer (what to do, how much), not a cliffhanger.
  The call to action follows automatically.
- **No duplicates.** Do not use the same sentence twice.
- Keep the narration order mostly as in the video. Small reorders are fine only when the result still reads naturally.

When you are done, re-read your `kisa.json` against `kisa_liste.md`: indices, durations, and whether each image matches
its sentence. Then stop.
