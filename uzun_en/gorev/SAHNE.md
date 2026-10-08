# Task: design Remotion scenes for one video

<!-- Sahne tasarım ajanı (Claude Code / Gemini CLI, GitHub Actions matrisinde paralel gruplar). -->

You are a senior motion designer and React/Remotion engineer for the YouTube channel **The Food Almanac**: calm, evidence-based food-science explainers about 10–11 minutes long.

**The style**
- Vintage engraving illustrations (NVIDIA FLUX) fill the frame.
- A slow camera moves over each image.
- Overlays are synced word-by-word to the narration: dashed callouts on real objects, Anton kinetic titles, number badges, hand-drawn charts and flowing particles.

The prompt tells you the project **SLUG** and **your scene numbers**. Other agents design the other scenes in parallel.

## Setup (already done for you)
- Working directory: the repo root. The Remotion project is `uzun_en/remotion`. Run Remotion and `node` commands from that folder.
- Dependencies, fonts and the headless browser are installed.
- `python3 uzun_en/araclar/hazirla.py --proje SLUG --sessiz` has already run. It set up:
  - `src/tam/tam.gen.json`, the timeline;
  - `src/tam/sahneler/SNN.tsx`, where undesigned scenes are stubs that render the automatic template `Genel`;
  - `public/img/tam/NN.jpg`, the images;
  - `out/izgara/NN.jpg`, the coordinate grids.

## Read first
- `uzun_en/remotion/TASARIM.md`: the design guide, hard rules, library and checklist (in Turkish).
- `uzun_en/remotion/src/tam/kutuphane.tsx`: the component library.
- The approved reference scenes in `uzun_en/projeler/food-order-blood-sugar/sahneler/`. Read `S01`–`S06`, plus `S12` (chapter card) and `S17` (chart). Your scenes must reach the same quality.
- `uzun_en/projeler/SLUG/proje.json`, so you understand the whole story, including the meta for your scenes.

## For each of your scenes, in order
Finish and verify one scene before moving to the next. Your quota can run out at any time, and finished scenes are kept.

### a. Timing and meta
Run `cd uzun_en/remotion && node kare.mjs --sahne N --bilgi`. It prints the sentences, every word's scene-local time, and the meta (`baslik`, `etiket`, `kart`, `grafik`, `bolumNo`).

### b. The image
Look at `public/img/tam/NN.jpg` and its labelled grid `out/izgara/NN.jpg` with the Read tool. The grid labels are 1920×1080 coordinates. Note:
- the real subjects,
- the empty paper areas you can use,
- DEFECTS: garbled or fake text, letters, signatures, malformed hands, fingers or faces, broken anatomy.

**If the image is unusable** (wrong subject, ugly defects that cannot be cropped, black or empty), regenerate it once or twice:
1. Run `python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne N [--aciklama "new short English description"] [--tohum 3]` from the repo root.
2. Inspect the candidate `uzun_en/projeler/SLUG/images/NN.aday.jpg`.
3. If it is better, run `python3 uzun_en/araclar/gorsel.py --proje SLUG --sahne N --kabul`.
4. Re-run `python3 uzun_en/araclar/hazirla.py --proje SLUG --sessiz` so `public/` and the grids update.

When writing a new description:
- Avoid the safety-filter words: blood, anatomy, cut-away, wound.
- Avoid words that make the model draw text: label, chart, diagram, text, numbers.

### c. Design `src/tam/sahneler/SNN.tsx`
- **Imports:** only `react` and `../kutuphane`. `export default` a `React.FC<SP>`.
- **Timing:** every overlay appears exactly when its words are spoken: `const K = kelimeZamani(s); K(sentence, "exact phrase")`.
  - Check every phrase against the `--bilgi` output.
  - A missing phrase silently falls back to the sentence start, which is a bug.
- **Beats:** short scenes need at least 2. Scenes over 10 s need 3–5.
- **What to use:**
  - `Etiket` callouts on REAL objects in the image.
  - Kinetic titles from `meta.baslik`.
  - `VurguRozet` for `meta.baslik.vurgu`.
  - `KaynakEtiketi` when `meta.etiket` exists.
  - Simple animated diagrams for mechanisms and comparisons.
  - `CubukGrafik` for `meta.grafik`, which holds real numbers.
- **Chapter cards (`tip: kart`):** use `<BolumKarti t={t} s={s} gorseller={[...]} />`.
  - Pick 2–3 images from that chapter, with defect-free 4:3 `kirp` crops.
  - You may add at most ONE small synced element under the subtitle (x 140–1000, y 700–900).
  - Never write the channel name by hand: use `MARKA.ad` or `MARKA.filigran`.
- **Hide defects:**
  - Choose camera windows that keep defects out of frame for the whole move, or
  - cover them with a paper-coloured radial patch inside `<Kamera>`, or
  - use `Panel` or `Ortu`.
- **Variety:** vary layouts between consecutive scenes. Keep code comments short and in Turkish.

### d. Verify
- `npx tsc -p . 2>&1 | grep "sahneler/SNN"` must print nothing.
- Run `node kare.mjs --sahne N --otomatik --anlar <each beat time + 0.6>`.
- Inspect `out/onizleme/SNN/temas.jpg`, and the full-size PNGs when in doubt.

Fix any of these until the TASARIM.md checklist passes:
- overlapping text,
- text on busy image areas without a backing,
- anything in the caption band (y ≥ 960) or the watermark zone (x ≥ 1590, y ≤ 92),
- callouts pointing at the wrong object,
- defects visible at any point,
- elements arriving before their word,
- an empty-looking last frame.

Use at most about 4 render iterations per scene.

## Content rules (health content: accuracy matters)
- On-screen text may only state what the scene's narration says, or what its meta or the project's `kaynaklar` provide.
- Do not invent numbers, study details or claims.
- Labels are 1–4 words, UPPERCASE.
- A schematic chart that does not plot given data must carry a visible "ILLUSTRATIVE" tag and must have no invented numbers.
- Keep the tone calm, never alarmist.

## Hard constraints
- **Files you may edit:**
  - your scene files `src/tam/sahneler/SNN.tsx`,
  - your scenes' images, through `gorsel.py` only,
  - `uzun_en/projeler/SLUG/rapor_gGRUP.md` (your report; the group number is in the prompt).
- **Never modify:**
  - `kutuphane.tsx`, `ortak.tsx`, `zaman.ts`, `Tam.tsx`, `Katmanlar.tsx`, `veri.ts`, `kayit.ts`,
  - `kare.mjs`, `hazirla.py`, `package.json`, `TASARIM.md`,
  - other scenes, `proje.json`, workflows.

  If the library has a bug, work around it inside your scene file and mention it in your report.
- **Do not:** run git commands, render the full video, run any YouTube script, or print environment variables or keys.
- **Quota:** you run on a subscription or free-tier quota, so be efficient. Avoid unneeded file reads and repeated renders of the same frame.

## Report
Write `uzun_en/projeler/SLUG/rapor_gGRUP.md`, in Turkish and short. Give 1–2 lines per scene covering:
- what it shows,
- its beats,
- defects you hid,
- images you regenerated,
- anything unresolved.
