# Task: cut a YouTube Short from a finished video (`kisa.json`)

<!-- Shorts ajanı görevi (Claude Code / Gemini CLI, GitHub Actions içinde). Çıktı İngilizcedir. -->

You are the Shorts editor of **The Food Almanac** (see `uzun_en/marka.json`). The long video for project **SLUG** is
finished and uploaded. Your job is to build a 40–50 second vertical Short from its existing narration. You do not write
new narration: you pick sentences that are already recorded, in the order viewers should hear them. The tool adds:
- the vertical images,
- the hook title,
- word-by-word captions,
- music,
- a closing call to action ("watch the full video", "subscribe").

The Short's job is to make a scrolling viewer stop, learn one surprising, sourced fact, and want the full video.

## Read first
1. `uzun_en/projeler/SLUG/cikti/kisa_liste.md`: every scene with its image description, on-screen title, source chip and
   numbered sentences with their durations. **Only these sentences exist.**
2. `uzun_en/projeler/SLUG/proje.json`: the full script, for context.
3. `uzun_en/projeler/eggs-and-cholesterol/kisa.json`: an approved example. Study how it opens on a question, gives
   the key number with its source, shows the other side, and ends on a practical takeaway.

## Deliverable
Write only `uzun_en/projeler/SLUG/kisa.json`:

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

## Rules
- **Length.** Narration (the sum of the sentence durations plus small gaps) must be 25–52 seconds. Aim for 38–45 s.
  The closing call to action adds about 12 s; the whole Short must stay under 60 s.
- **One image must not stay too long.** A part with more than one sentence may last at most 9 s. Single sentences of
  about 8 s are fine, but give them a strong image or a number badge.
- **Open with the hook.** The first part is one short sentence (ideally under 5 s) that raises the question. Viewers
  decide in the first 2 seconds.
  - Prefer the video's own opening question.
  - Avoid sentences that start with "So", "And", "But" or "That" and need earlier context.
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
