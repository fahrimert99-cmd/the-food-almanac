# The Food Almanac — “Do Eggs Really Raise Your Cholesterol?”

**Manuel üretim senaryosu · Meta AI (video) + ElevenLabs (seslendirme)**  
48 sahne × 10 sn = **8:00 dk** · Seslendirme: **1128 kelime** (≈ 7.5–8.1 dk, 140–150 kelime/dk)  
Hazırlayan / Onay: **Fahri Mert**

---

## 1. Üretim kuralları

**Meta AI (video)**

- Her sahnenin promptu, sonunda sabit stil cümlesiyle birlikte hazırdır. Kod bloğunu olduğu gibi kopyalayın; stil cümlesi tüm kliplerin aynı görünmesini sağlar.
- Promptlarda bilerek **“blood” kelimesi yoktur**. Görsel üreticilerin güvenlik filtreleri bu kelimede kararmış ya da reddedilmiş sonuç verebiliyor (kanalın otomatik hattında yaşandı). Seslendirmede kullanılabilir.
- Promptlarda **yazı ve rakam istenmez**; yapay zekâ yazıyı bozuk üretir. Rakamlar, her sahnedeki **“Ekran yazısı”** satırından kurguda eklenir.
- Klip 10 sn’den kısa çıkarsa: aynı promptla ikinci bir varyasyon üretip arka arkaya koyun ya da klibi %80–90 hıza düşürün.
- Her sahne için 2–3 varyasyon üretip en tutarlı olanı seçin. Gerçek kişi, marka logosu ya da tanınabilir yüz istemeyin.

**ElevenLabs (seslendirme)**

- Model: **Eleven Multilingual v2** (uzun anlatımda en kararlı ton). Ses: sakin, güven veren, orta tonlu bir erkek ya da kadın anlatıcı. Kanalın mevcut sesi derin ve sakin bir erkek anlatıcı.
- Ayarlar: Stability **%50–60** · Similarity **%75** · Style **%0–10** · Speaker boost **açık** · Speed **0.95–1.0**.
- Sesi **bölüm bölüm** üretin (aşağıda 8 hazır blok var). Tek parça 8 dakikalık üretimde ton kayabiliyor; bölüm bazında yeniden üretmek de daha ucuz.
- Bloklardaki telaffuz düzeltmeleri uygulanmıştır: *DIABEGG → Diab-egg*, *BMJ → B M J*, *zeaxanthin → zee-uh-ZAN-thin*, büyük sayılar yazıyla. Sahneler arasındaki `<break time="0.6s" />` etiketleri doğal nefes payı bırakır.

**Kurgu (CapCut / DaVinci Resolve / Premiere)**

1. Önce ses dosyalarını zaman çizelgesine dizin; video sese göre kesilir, ses videoya göre değil.
2. Her klibi kendi seslendirme cümlesinin altına yerleştirin. Cümle 10 sn’yi aşarsa klibi hafifçe yavaşlatın ya da son kareyi dondurun.
3. Klipler arasında **0,3 sn çapraz geçiş**; arka plan müziği seslendirmenin **−20 ile −24 dB** altında.
4. Ekran yazıları: Anton ya da benzeri kalın bir font (kanal fontu `assets/font/Anton-Regular.ttf`), krem zemine koyu kahve yazı, ekranda en az 3 sn.
5. Altyazı: ElevenLabs metninden otomatik SRT üretip yükleyin.

**YouTube**

- Yüklemede **“Altered or synthetic content” = Evet** işaretlenmeli (yapay zekâ görseli ve sentetik ses).
- Açıklamaya en alttaki kaynak listesi ve kanalın standart uyarı metni (`uzun_en/marka.json → aciklama_sonu`) eklenmeli.

---

## 2. Sahne sahne senaryo

> Stil cümlesi (her promptun sonunda yer alır):
> *Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.*

### Bölüm 1 · Açılış

#### S01 · 0:00–0:10 · 25 kelime

**Seslendirme:** One large egg carries about 186 milligrams of cholesterol, and for decades that single number made eggs one of the most feared foods at breakfast.

**Meta AI promptu:**

```text
A single brown egg resting on a plain wooden table, soft morning light from a window, the camera slowly pushes in toward the egg. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `1 large egg ≈ 186 mg cholesterol`

#### S02 · 0:10–0:20 · 26 kelime

**Seslendirme:** Your doctor checks the cholesterol in your blood. The egg contains cholesterol too. So it seems obvious: eat more of one, get more of the other.

**Meta AI promptu:**

```text
A cracked egg on a saucer on the left and an anatomical engraving of a human heart with branching arteries on the right, the two slowly drifting closer together. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S03 · 0:20–0:30 · 25 kelime

**Seslendirme:** But your body is not a simple pipe. What you eat and what shows up in your arteries are linked in a far stranger way.

**Meta AI promptu:**

```text
A network of branching arteries drawn like old botanical roots, a gentle current of small amber particles winding through them, the camera slowly tracking along. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S04 · 0:30–0:40 · 20 kelime

**Seslendirme:** In this episode: what the guidelines changed, what the largest studies found, and who should still be careful with eggs.

**Meta AI promptu:**

```text
An old leather-bound almanac opening on a wooden desk, its blank pages turning by themselves to reveal engraved illustrations of eggs and a heart. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Do eggs really raise your cholesterol?`

### Bölüm 2 · Kandaki kolesterol nereden gelir?

#### S05 · 0:40–0:50 · 26 kelime

**Seslendirme:** Start with a surprise: most of the cholesterol in your body does not come from food at all. Your own liver makes it, every single day.

**Meta AI promptu:**

```text
A detailed anatomical engraving of the human liver, softly glowing amber from within, tiny round particles streaming gently out of it. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Most of your cholesterol is made by your liver`

#### S06 · 0:50–1:00 · 25 kelime

**Seslendirme:** Cholesterol is not a poison. Every cell uses it to build its outer membrane, and your body turns it into vitamin D, bile and hormones.

**Meta AI promptu:**

```text
A microscopic view of round cells with thick outer membranes, small waxy particles slotting into the membranes like bricks into a wall, slow zoom in. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S07 · 1:00–1:10 · 25 kelime

**Seslendirme:** Because it is so useful, the liver keeps a running balance. It makes what it needs, and it adjusts when more arrives from your plate.

**Meta AI promptu:**

```text
An antique brass balance scale: an engraved liver on one pan, a breakfast plate with an egg on the other, the beam gently tipping and then settling level. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S08 · 1:10–1:20 · 24 kelime

**Seslendirme:** When you eat more cholesterol, the liver usually makes less of its own, and your gut absorbs a smaller share of what you swallowed.

**Meta AI promptu:**

```text
A cross-section of the small intestine wall with finger-like villi gently swaying, only some of the drifting amber particles being taken in while the rest float past. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S09 · 1:20–1:30 · 23 kelime

**Seslendirme:** That feedback loop is why, for most people, cholesterol on the plate moves cholesterol in the bloodstream far less than researchers once assumed.

**Meta AI promptu:**

```text
A circular loop of brass gears and pipes connecting an engraved liver to a breakfast plate, the gears slowing down as more amber particles arrive. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S10 · 1:30–1:40 · 22 kelime

**Seslendirme:** What matters most for heart risk is LDL, the particle that carries cholesterol through your bloodstream and can lodge in artery walls.

**Meta AI promptu:**

```text
Inside an artery, smooth rounded particles drifting along the vessel, a few of them settling into a soft bulge in the artery wall, slow dolly forward. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `LDL`

#### S11 · 1:40–1:50 · 22 kelime

**Seslendirme:** And for most people, the strongest dietary driver of LDL is not cholesterol itself. It is saturated fat, along with trans fat.

**Meta AI promptu:**

```text
A slab of butter, a strip of fatty meat and a block of lard on a marble counter beside one small egg, the camera slowly orbiting the group. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Saturated fat raises LDL more than dietary cholesterol`

### Bölüm 3 · 300 mg sınırı neden kalktı?

#### S12 · 1:50–2:00 · 22 kelime

**Seslendirme:** For decades, American dietary guidelines said to keep cholesterol intake below 300 milligrams a day. One egg used up most of that.

**Meta AI promptu:**

```text
A tall glass measuring cylinder with a single limit line etched near the top, slowly filling with amber liquid poured from a cracked egg until it is mostly full. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Old limit: 300 mg/day`

#### S13 · 2:00–2:10 · 20 kelime

**Seslendirme:** Many people responded by switching to egg-white omelets, or by cutting eggs out entirely, believing the yolk was the problem.

**Meta AI promptu:**

```text
A home kitchen, a cook's hands separating eggs, the yolks set aside in a bowl and only the whites poured into a frying pan, slow side pan. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S14 · 2:10–2:20 · 25 kelime

**Seslendirme:** In 2015, the US advisory committee concluded that dietary cholesterol is not a nutrient of concern for overconsumption, and the 300 milligram cap was dropped.

**Meta AI promptu:**

```text
A long wooden committee table covered with stacked books and papers, a heavy iron chain lying across it slowly coming apart and falling away. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `2015: the 300 mg cap was dropped`

#### S15 · 2:20–2:30 · 25 kelime

**Seslendirme:** That headline spread fast, and many people heard it as: eggs are fine, eat as many as you like. That is not what it said.

**Meta AI promptu:**

```text
Dozens of blank newspaper sheets fluttering through the air like birds around an open egg carton, the camera slowly rising upward. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S16 · 2:30–2:40 · 25 kelime

**Seslendirme:** The same guidelines still advised eating as little dietary cholesterol as possible within a healthy eating pattern. The limit went away. The caution did not.

**Meta AI promptu:**

```text
A wooden garden gate swinging open at dusk while a lantern on the gatepost keeps glowing steadily, slow push-in toward the lantern. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `The limit went away. The caution did not.`

#### S17 · 2:40–2:50 · 24 kelime

**Seslendirme:** So the real question became more precise: in real life, over many years, are people who eat eggs more likely to develop heart disease?

**Meta AI promptu:**

```text
A large magnifying glass moving slowly across a breakfast plate of eggs, revealing finer engraved detail wherever the lens passes. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

### Bölüm 4 · Büyük çalışmalar ne buldu?

#### S18 · 2:50–3:00 · 25 kelime

**Seslendirme:** To answer that, researchers use cohort studies, which follow large groups of people for years and track what they eat and what happens to them.

**Meta AI promptu:**

```text
A long winding country road with many small figures walking along it as the trees beside them change from summer to autumn to winter, wide shot. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S19 · 3:00–3:10 · 24 kelime

**Seslendirme:** In 2019, a study in JAMA pooled six American cohorts: nearly thirty thousand adults, followed for a median of seventeen and a half years.

**Meta AI promptu:**

```text
Six old wooden filing drawers sliding open one after another, thousands of blank index cards fluttering upward and merging into a single stream. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `JAMA 2019 · 6 cohorts · 29,615 adults · 17.5 years`

#### S20 · 3:10–3:20 · 20 kelime

**Seslendirme:** Each extra 300 milligrams of dietary cholesterol a day was linked to a 17 percent higher risk of cardiovascular disease.

**Meta AI promptu:**

```text
An antique brass pressure gauge beside a small pile of eggs, its needle slowly rising one small step, warm low light. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `+300 mg/day → +17% CVD risk`

#### S21 · 3:20–3:30 · 24 kelime

**Seslendirme:** Each extra half egg a day was linked to a 6 percent higher risk. For a while, eggs were back on the worry list.

**Meta AI promptu:**

```text
Half an egg in its shell on a saucer, a small brass warning bell hanging above it gently swinging back and forth. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `+½ egg/day → +6% CVD risk`

#### S22 · 3:30–3:40 · 23 kelime

**Seslendirme:** A year later, the BMJ published a larger analysis: more than 215,000 American nurses and health professionals, followed for up to 32 years.

**Meta AI promptu:**

```text
A vast crowd of small figures in old-fashioned nurse and doctor uniforms standing in rows to the horizon, the camera slowly pulling back to reveal the scale. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `BMJ 2020 · 215,000+ people · up to 32 years`

#### S23 · 3:40–3:50 · 23 kelime

**Seslendirme:** Eating up to one egg a day was not linked to higher cardiovascular risk. Their pooled review of other cohorts found the same.

**Meta AI promptu:**

```text
A single soft-boiled egg in an egg cup on a calm breakfast table, a fine ink heartbeat line moving smoothly and evenly behind it. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Up to 1 egg/day: no higher risk`

#### S24 · 3:50–4:00 · 22 kelime

**Seslendirme:** Why do careful studies disagree? Partly because eggs never arrive alone. People who eat many eggs often eat very different diets overall.

**Meta AI promptu:**

```text
Two breakfast trays side by side, one with eggs, fruit and greens, the other with eggs, sausages and fried potatoes, slow overhead pan between them. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S25 · 4:00–4:10 · 26 kelime

**Seslendirme:** Observational studies can adjust for some of that, but they can never fully separate the egg from the bacon, the butter and the habits around it.

**Meta AI promptu:**

```text
Hands trying to pull apart a tangle of threads that connect an egg, strips of bacon and a butter dish, the threads stubbornly staying linked. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S26 · 4:10–4:20 · 27 kelime

**Seslendirme:** Taken together, the evidence suggests that a moderate amount of eggs is not a major risk for most healthy people. But it is not a free pass.

**Meta AI promptu:**

```text
An old pharmacist's balance holding perfectly steady, two eggs on one pan and a small basket of fruit on the other, slow push-in. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S27 · 4:20–4:30 · 21 kelime

**Seslendirme:** In late 2019, the American Heart Association published a science advisory that tried to turn all of this into practical advice.

**Meta AI promptu:**

```text
A heavy book with an embossed heart on its cover opening on a wooden lectern under a desk lamp, its blank pages glowing softly. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `American Heart Association · 2019 advisory`

#### S28 · 4:30–4:40 · 24 kelime

**Seslendirme:** Healthy people, it said, can include up to one whole egg a day. Healthy older adults with normal cholesterol can include up to two.

**Meta AI promptu:**

```text
A breakfast table in warm morning light, a younger person's hands beside a plate with one egg and an older person's hands beside a plate with two eggs, slow dolly. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Healthy adults: up to 1 egg/day · Healthy older adults: up to 2`

### Bölüm 5 · Kimler daha dikkatli olmalı?

#### S29 · 4:40–4:50 · 24 kelime

**Seslendirme:** But averages hide individuals. In feeding studies, roughly one in four people are so-called hyper-responders. Their LDL rises clearly when dietary cholesterol goes up.

**Meta AI promptu:**

```text
A long row of identical small figures; about one in every four of them begins to glow amber while the rest stay plain, the camera slowly panning along the row. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `~1 in 4 people: hyper-responders`

#### S30 · 4:50–5:00 · 21 kelime

**Seslendirme:** Interestingly, in many of them HDL, the so-called good cholesterol, rises too, so the balance between the two can stay similar.

**Meta AI promptu:**

```text
Two antique brass gauges side by side, both needles rising together at exactly the same pace, gentle warm light. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `LDL ↑  HDL ↑`

#### S31 · 5:00–5:10 · 27 kelime

**Seslendirme:** There is no simple home test for being a hyper-responder. One practical way to find out is a blood test before and after a change in diet.

**Meta AI promptu:**

```text
A doctor's hand placing a small glass sample tube into an old wooden rack, blank calendar pages flipping, then a second tube placed beside the first. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S32 · 5:10–5:20 · 21 kelime

**Seslendirme:** People with familial hypercholesterolemia, an inherited condition with very high LDL, are a different case and should follow their doctor's guidance.

**Meta AI promptu:**

```text
An engraved family tree whose branches carry small glowing amber droplets passing down from one generation to the next, slow upward tilt. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Familial hypercholesterolemia → follow your doctor`

#### S33 · 5:20–5:30 · 25 kelime

**Seslendirme:** People with type 2 diabetes are another group where the evidence is less reassuring. Several cohort studies linked higher egg intake to more heart disease.

**Meta AI promptu:**

```text
A sugar cube and an egg side by side on a dark wooden table, the faint shadow of an anatomical heart appearing behind them, slow push-in. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Type 2 diabetes: the evidence is mixed`

#### S34 · 5:30–5:40 · 21 kelime

**Seslendirme:** Yet in Australia's DIABEGG trial, people with prediabetes or type 2 diabetes ate twelve eggs a week for a full year.

**Meta AI promptu:**

```text
A sunny kitchen with eucalyptus trees outside the window, a full carton of twelve eggs on the counter, blank calendar pages turning through the seasons. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `DIABEGG trial · 12 eggs/week · 12 months`

#### S35 · 5:40–5:50 · 22 kelime

**Seslendirme:** Their cholesterol markers were no worse than in the low-egg group. But their overall diet was also kept low in saturated fat.

**Meta AI promptu:**

```text
A plate of eggs with avocado, a drizzle of olive oil, leafy greens and nuts, the camera slowly circling; beside it an antique gauge whose needle stays still. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S36 · 5:50–6:00 · 23 kelime

**Seslendirme:** So if you have diabetes, the honest answer is: the evidence is mixed, and your whole diet matters more than the egg count.

**Meta AI promptu:**

```text
A large mosaic of a full dinner plate assembling itself tile by tile, the egg only one small tile in the middle, the camera slowly pulling back. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

### Bölüm 6 · Asıl mesele: yumurtanın yanındakiler

#### S37 · 6:00–6:10 · 27 kelime

**Seslendirme:** Which brings us back to the plate. A typical diner breakfast is not eggs alone. It is eggs with bacon, sausage, buttered white toast and hash browns.

**Meta AI promptu:**

```text
A crowded diner breakfast plate with fried eggs, bacon strips, sausages, buttered white toast and hash browns, steam rising, overhead shot. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S38 · 6:10–6:20 · 22 kelime

**Seslendirme:** Processed meats like bacon and sausage are themselves linked to heart disease, and they add saturated fat and a lot of salt.

**Meta AI promptu:**

```text
Bacon and sausages sizzling in a cast-iron pan while a salt shaker showers heavy salt over them, close-up. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S39 · 6:20–6:30 · 21 kelime

**Seslendirme:** Frying eggs in butter adds still more saturated fat. Poaching or boiling them, or cooking with olive oil, changes the picture.

**Meta AI promptu:**

```text
A split scene: on the left an egg frying in a pool of melting butter, on the right an egg gently poaching in simmering water, slow push-in. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S40 · 6:30–6:40 · 21 kelime

**Seslendirme:** An egg itself has about five grams of fat, and only around one and a half grams of that is saturated.

**Meta AI promptu:**

```text
A cracked egg's yolk and white resting in a clear glass bowl, the yolk glowing a slightly deeper amber, slow rotating close-up. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `1 egg: ~5 g fat · ~1.5 g saturated`

#### S41 · 6:40–6:50 · 25 kelime

**Seslendirme:** It also brings about six grams of protein, plus choline, vitamin D, and lutein and zeaxanthin, pigments that gather in the retina of your eye.

**Meta AI promptu:**

```text
A sliced boiled egg on a wooden board; delicate engraved symbols of a muscle fiber, a small sun and a human eye float gently upward from it. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `~6 g protein · choline · vitamin D · lutein`

#### S42 · 6:50–7:00 · 23 kelime

**Seslendirme:** So an egg with vegetables and whole-grain toast is a very different meal from an egg buried under processed meat and fried potatoes.

**Meta AI promptu:**

```text
Two plates side by side: a poached egg with spinach, tomatoes and whole-grain toast, and fried eggs buried under sausages and fried potatoes, slow pan left to right. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

### Bölüm 7 · Pratikte ne yapmalı?

#### S43 · 7:00–7:10 · 24 kelime

**Seslendirme:** So what can you actually do with this? First, if you are generally healthy, an egg a day is reasonable within a balanced diet.

**Meta AI promptu:**

```text
A calm kitchen table with one boiled egg, a bowl of fruit and a glass of water in soft morning light, gentle push-in. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `1. Healthy? About one egg a day is reasonable`

#### S44 · 7:10–7:20 · 20 kelime

**Seslendirme:** Second, look at what surrounds your eggs. Swap some of the bacon and sausage for vegetables, beans or whole grains.

**Meta AI promptu:**

```text
A hand lifting strips of bacon off a breakfast plate and replacing them with roasted vegetables and a spoonful of beans beside the eggs. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `2. Change what comes with the eggs`

#### S45 · 7:20–7:30 · 22 kelime

**Seslendirme:** Third, if your LDL is already high, or you have diabetes or an inherited cholesterol disorder, ask your doctor what fits you.

**Meta AI promptu:**

```text
A doctor's wooden desk with a stethoscope, an egg in an egg cup and an open notebook, a hand slowly writing with a fountain pen. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `3. High LDL or diabetes? Ask your doctor`

#### S46 · 7:30–7:40 · 27 kelime

**Seslendirme:** And if you want certainty about your own body, a simple lipid panel before and after a few months of change tells you more than any headline.

**Meta AI promptu:**

```text
A wall calendar with blank pages turning from month to month, two small glass sample tubes placed in a rack, one at the start and one at the end. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `Lipid panel: before → after`

### Bölüm 8 · Kapanış

#### S47 · 7:40–7:50 · 27 kelime

**Seslendirme:** Eggs are not the villain they were made out to be, and they are not a superfood either. They are one part of a much bigger pattern.

**Meta AI promptu:**

```text
A single egg standing upright in the middle of a vast engraved landscape of fields, orchards, rivers and grain, the camera pulling far back. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

#### S48 · 7:50–8:00 · 22 kelime

**Seslendirme:** That's The Food Almanac: food science, checked against the evidence. The sources are in the description. See you in the next episode.

**Meta AI promptu:**

```text
The old leather-bound almanac from the opening slowly closing on a wooden desk beside a single egg, the lamp light gently dimming. Vintage 19th-century science-book engraving brought to life: fine black cross-hatched ink lines on warm cream paper, muted sepia tones with soft egg-yolk amber accents, slow smooth camera movement, soft even lighting, 16:9 landscape. Exactly 10 seconds, one continuous shot with no cuts. Silent b-roll for a voiceover added later: no dialogue, no narration, no one speaking, no lip movement, no music, no sound. No text, no letters, no numbers, no subtitles, no logos.
```

**Ekran yazısı:** `The Food Almanac`

---

## 3. ElevenLabs’e yapıştırılacak bölüm metinleri

**Bölüm 1 · Açılış**

```text
One large egg carries about one hundred eighty-six milligrams of cholesterol, and for decades that single number made eggs one of the most feared foods at breakfast. <break time="0.6s" /> Your doctor checks the cholesterol in your blood. The egg contains cholesterol too. So it seems obvious: eat more of one, get more of the other. <break time="0.6s" /> But your body is not a simple pipe. What you eat and what shows up in your arteries are linked in a far stranger way. <break time="0.6s" /> In this episode: what the guidelines changed, what the largest studies found, and who should still be careful with eggs.
```

**Bölüm 2 · Kandaki kolesterol nereden gelir?**

```text
Start with a surprise: most of the cholesterol in your body does not come from food at all. Your own liver makes it, every single day. <break time="0.6s" /> Cholesterol is not a poison. Every cell uses it to build its outer membrane, and your body turns it into vitamin D, bile and hormones. <break time="0.6s" /> Because it is so useful, the liver keeps a running balance. It makes what it needs, and it adjusts when more arrives from your plate. <break time="0.6s" /> When you eat more cholesterol, the liver usually makes less of its own, and your gut absorbs a smaller share of what you swallowed. <break time="0.6s" /> That feedback loop is why, for most people, cholesterol on the plate moves cholesterol in the bloodstream far less than researchers once assumed. <break time="0.6s" /> What matters most for heart risk is LDL, the particle that carries cholesterol through your bloodstream and can lodge in artery walls. <break time="0.6s" /> And for most people, the strongest dietary driver of LDL is not cholesterol itself. It is saturated fat, along with trans fat.
```

**Bölüm 3 · 300 mg sınırı neden kalktı?**

```text
For decades, American dietary guidelines said to keep cholesterol intake below 300 milligrams a day. One egg used up most of that. <break time="0.6s" /> Many people responded by switching to egg-white omelets, or by cutting eggs out entirely, believing the yolk was the problem. <break time="0.6s" /> In 2015, the US advisory committee concluded that dietary cholesterol is not a nutrient of concern for overconsumption, and the 300 milligram cap was dropped. <break time="0.6s" /> That headline spread fast, and many people heard it as: eggs are fine, eat as many as you like. That is not what it said. <break time="0.6s" /> The same guidelines still advised eating as little dietary cholesterol as possible within a healthy eating pattern. The limit went away. The caution did not. <break time="0.6s" /> So the real question became more precise: in real life, over many years, are people who eat eggs more likely to develop heart disease?
```

**Bölüm 4 · Büyük çalışmalar ne buldu?**

```text
To answer that, researchers use cohort studies, which follow large groups of people for years and track what they eat and what happens to them. <break time="0.6s" /> In 2019, a study in JAMA pooled six American cohorts: nearly thirty thousand adults, followed for a median of seventeen and a half years. <break time="0.6s" /> Each extra 300 milligrams of dietary cholesterol a day was linked to a 17 percent higher risk of cardiovascular disease. <break time="0.6s" /> Each extra half egg a day was linked to a 6 percent higher risk. For a while, eggs were back on the worry list. <break time="0.6s" /> A year later, the B M J published a larger analysis: more than two hundred and fifteen thousand American nurses and health professionals, followed for up to 32 years. <break time="0.6s" /> Eating up to one egg a day was not linked to higher cardiovascular risk. Their pooled review of other cohorts found the same. <break time="0.6s" /> Why do careful studies disagree? Partly because eggs never arrive alone. People who eat many eggs often eat very different diets overall. <break time="0.6s" /> Observational studies can adjust for some of that, but they can never fully separate the egg from the bacon, the butter and the habits around it. <break time="0.6s" /> Taken together, the evidence suggests that a moderate amount of eggs is not a major risk for most healthy people. But it is not a free pass. <break time="0.6s" /> In late 2019, the American Heart Association published a science advisory that tried to turn all of this into practical advice. <break time="0.6s" /> Healthy people, it said, can include up to one whole egg a day. Healthy older adults with normal cholesterol can include up to two.
```

**Bölüm 5 · Kimler daha dikkatli olmalı?**

```text
But averages hide individuals. In feeding studies, roughly one in four people are so-called hyper-responders. Their LDL rises clearly when dietary cholesterol goes up. <break time="0.6s" /> Interestingly, in many of them HDL, the so-called good cholesterol, rises too, so the balance between the two can stay similar. <break time="0.6s" /> There is no simple home test for being a hyper-responder. One practical way to find out is a blood test before and after a change in diet. <break time="0.6s" /> People with familial hypercholesterolemia, an inherited condition with very high LDL, are a different case and should follow their doctor's guidance. <break time="0.6s" /> People with type 2 diabetes are another group where the evidence is less reassuring. Several cohort studies linked higher egg intake to more heart disease. <break time="0.6s" /> Yet in Australia's Diab-egg trial, people with prediabetes or type 2 diabetes ate twelve eggs a week for a full year. <break time="0.6s" /> Their cholesterol markers were no worse than in the low-egg group. But their overall diet was also kept low in saturated fat. <break time="0.6s" /> So if you have diabetes, the honest answer is: the evidence is mixed, and your whole diet matters more than the egg count.
```

**Bölüm 6 · Asıl mesele: yumurtanın yanındakiler**

```text
Which brings us back to the plate. A typical diner breakfast is not eggs alone. It is eggs with bacon, sausage, buttered white toast and hash browns. <break time="0.6s" /> Processed meats like bacon and sausage are themselves linked to heart disease, and they add saturated fat and a lot of salt. <break time="0.6s" /> Frying eggs in butter adds still more saturated fat. Poaching or boiling them, or cooking with olive oil, changes the picture. <break time="0.6s" /> An egg itself has about five grams of fat, and only around one and a half grams of that is saturated. <break time="0.6s" /> It also brings about six grams of protein, plus choline, vitamin D, and lutein and zee-uh-ZAN-thin, pigments that gather in the retina of your eye. <break time="0.6s" /> So an egg with vegetables and whole-grain toast is a very different meal from an egg buried under processed meat and fried potatoes.
```

**Bölüm 7 · Pratikte ne yapmalı?**

```text
So what can you actually do with this? First, if you are generally healthy, an egg a day is reasonable within a balanced diet. <break time="0.6s" /> Second, look at what surrounds your eggs. Swap some of the bacon and sausage for vegetables, beans or whole grains. <break time="0.6s" /> Third, if your LDL is already high, or you have diabetes or an inherited cholesterol disorder, ask your doctor what fits you. <break time="0.6s" /> And if you want certainty about your own body, a simple lipid panel before and after a few months of change tells you more than any headline.
```

**Bölüm 8 · Kapanış**

```text
Eggs are not the villain they were made out to be, and they are not a superfood either. They are one part of a much bigger pattern. <break time="0.6s" /> That's The Food Almanac: food science, checked against the evidence. The sources are in the description. See you in the next episode.
```

---

## 4. Kaynaklar (video açıklaması için)

1. Zhong VW, et al. Associations of dietary cholesterol or egg consumption with incident cardiovascular disease and mortality. *JAMA*. 2019;321(11):1081–1095.
2. Drouin-Chartier JP, et al. Egg consumption and risk of cardiovascular disease: three large prospective US cohort studies, systematic review, and updated meta-analysis. *BMJ*. 2020;368:m513.
3. Carson JAS, et al. Dietary cholesterol and cardiovascular risk: a science advisory from the American Heart Association. *Circulation*. 2020;141(3):e39–e53.
4. Dietary Guidelines Advisory Committee. *Scientific Report of the 2015 Dietary Guidelines Advisory Committee*; US HHS & USDA, *2015–2020 Dietary Guidelines for Americans*.
5. Fuller NR, et al. Effect of a high-egg diet on cardiometabolic risk factors in people with type 2 diabetes: the Diabetes and Egg (DIABEGG) Study — randomized weight-loss and follow-up phase. *Am J Clin Nutr*. 2018;107(6):921–931.
6. Rong Y, et al. Egg consumption and risk of coronary heart disease and stroke: dose-response meta-analysis of prospective cohort studies. *BMJ*. 2013;346:e8539.
7. Fernandez ML. Dietary cholesterol provided by eggs and plasma lipoproteins in healthy populations. *Curr Opin Clin Nutr Metab Care*. 2006;9(1):8–12.
8. USDA FoodData Central — Egg, whole, raw, fresh (large).

> Yayından önce her rakamı kaynağıyla bir kez daha eşleştirin; kanalın otomatik hattındaki bağımsız doğruluk denetimi (`uzun_en/gorev/DOGRULA.md`) bu manuel üretimde devrede değildir.

