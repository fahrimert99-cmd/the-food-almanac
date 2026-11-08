# Research notes: Can bananas and potassium really lower blood pressure?

Slug: `bananas-potassium-blood-pressure`

Access note: PubMed pages and the NIH Office of Dietary Supplements (ODS) pages returned errors (cookie wall / HTTP 403) from the research tool. Abstracts and numbers below were read via Europe PMC records, the PMC full text of Aburto 2013, the Harvard Nutrition Source page, the National Kidney Foundation page, MedlinePlus, and search-result summaries of the AHA and NIH ODS pages. Items that rest only on a secondary view of a primary page are marked **(secondary)**.

---

## 1. Banana potassium content and recommended intake

**Banana.** USDA FoodData Central, "Bananas, raw" (SR Legacy, FDC ID 173944): **358 mg potassium per 100 g** (read from the FoodData Central API).
- A medium banana is USDA's standard portion of **118 g**, which gives 358 x 1.18 = **about 422 mg** (the 118 g portion weight was not returned by the API call; it is the standard USDA medium-banana portion and matches several secondary sources that all report 422 mg).
- URL: https://fdc.nal.usda.gov/ (search "Bananas, raw", FDC 173944)
- Limitation: banana size varies; larger bananas give more.

**Adequate Intake (AI).** National Academies of Sciences, Engineering, and Medicine. Dietary Reference Intakes for Sodium and Potassium. 2019. AI for adults: **3,400 mg/day men, 2,600 mg/day women** (age 19+). No RDA because evidence is insufficient. Confirmed on the Harvard Nutrition Source potassium page (which summarizes NIH ODS) and in search results for the NIH ODS fact sheet.
- URL: https://www.nationalacademies.org/read/25353/chapter/11
- Harvard page: https://nutritionsource.hsph.harvard.edu/potassium/

**Average US intake (NHANES, NIH ODS) (secondary).** Adults 20+: about **3,016 mg/day men, 2,320 mg/day women** (2013-2014). Both are below the AI. Same figures on the Harvard page.
- URL: https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/ (page itself returned 403; figures read on the Harvard page and in search summaries)

**Arithmetic used in the script.** 3,400 / 422 = about 8 bananas for a man's AI from bananas alone. 422/3,400 = 12% (about one eighth); 422/2,600 = 16% (about one sixth). 90 mmol/day x 39.1 mg/mmol = about 3,500 mg; 120 mmol/day = about 4,700 mg.

---

## 2. Meta-analysis of potassium trials and cohorts (the key review)

**Aburto NJ, Hanson S, Gutierrez H, Hooper L, Elliott P, Cappuccio FP.** Effect of increased potassium intake on cardiovascular risk factors and disease: systematic review and meta-analyses. *BMJ*. 2013;346:f1378. DOI 10.1136/bmj.f1378. PMC4816263. https://pmc.ncbi.nlm.nih.gov/articles/PMC4816263/

- **Design:** Systematic review and meta-analysis. **22 randomized controlled trials (1,606 adults)** for blood pressure, lipids, catecholamines, kidney function; **11 cohort studies (127,038 adults)** for mortality, CVD, stroke, CHD. Most supplement trials used potassium chloride.
- **Blood pressure, all adults:** systolic **-3.49 mm Hg** (95% CI -5.15 to -1.82); diastolic **-1.96 mm Hg** (-3.06 to -0.86).
- **Hypertensive adults (16 studies):** systolic **-5.32 mm Hg** (-7.20 to -3.43); diastolic **-3.10 mm Hg** (-4.53 to -1.66).
- **Normotensive adults (3 studies):** systolic +0.09 mm Hg (-0.77 to 0.95); diastolic -0.56 (-1.55 to 0.42). **Not significant.**
- **Dose:** largest systolic reduction at achieved intake of **90-120 mmol/day** (-7.16 mm Hg, -12.41 to -1.91); no clear dose-response.
- **Sodium interaction:** sodium intake above 4 g/day: systolic -6.91 mm Hg (-11.53 to -2.29); 2-4 g/day: -1.97 (-3.41 to -0.52). The difference between the groups was **not statistically significant**.
- **Stroke (cohorts):** RR **0.76** (0.66-0.89) in the abstract (about 24% lower); Table 2 lists 0.79 (0.68-0.93). Rated low quality under GRADE. CHD (RR 0.96) and total CVD (RR 0.88) were not significant.
- **Safety:** no adverse effect on lipids, catecholamines or kidney function in adults (few studies measured these). Excluded: acutely ill people, HIV, heart failure, impaired renal potassium handling. The authors say results should not be applied to those groups.
- **Recommendation drawn:** at least 90 mmol/day (about 3,500 mg) for adults, bringing sodium:potassium near 1:1 if sodium is under 2 g/day. The WHO guideline based on this review advises people without impaired renal potassium handling to increase potassium intake **from food**.
- **Limitations:** high heterogeneity (explained mostly by hypertension status); small-study bias not excluded; few trials in normotensives (3); few outcome events; trials mostly potassium chloride supplements, not foods; no sex-specific analysis. Participants of all adult ages; not specific to older adults.

---

## 3. Dose-response: more is not always better

**Filippini T, Naska A, Kasdagli MI, Torres D, Lopes C, Carvalho C, Moreira P, Malavolti M, Orsini N, Whelton PK, Vinceti M.** Potassium intake and blood pressure: a dose-response meta-analysis of randomized controlled trials. *J Am Heart Assoc*. 2020;9(12):e015719. DOI 10.1161/JAHA.119.015719. PMID 32500831. PMC7429027.

- **Design:** dose-response meta-analysis (one-stage cubic spline) of **32 RCTs** of potassium supplementation lasting at least 4 weeks; doses 30-140 mmol/day; mostly adults with hypertension, mostly crossover designs.
- **Findings:** **U-shaped** relation between potassium (24-hour urinary excretion difference and achieved excretion) and blood pressure. The lowering effect weakened above a difference of about 30 mmol/day and blood pressure **rose** above about 80 mmol/day. The effect was stronger in people with hypertension and at higher sodium intake. The rise at high potassium appeared in **drug-treated** hypertension but not in untreated.
- **Authors' conclusion:** adequate intake, avoid excessive supplementation, interpret high-dose estimates cautiously because few trials studied them.
- Limitations: the total number of participants and the mm Hg values were not available in the abstract record I could read; I used only the shape of the curve and the subgroup finding. Supplements, not foods. Few trials at high doses.

---

## 4. Largest randomized trial: potassium-enriched salt substitute

**Neal B, Wu Y, Feng X, et al.** Effect of salt substitution on cardiovascular events and death. *N Engl J Med*. 2021;385(12):1067-1077. DOI 10.1056/NEJMoa2105675. PMID 34459569. https://www.nejm.org/doi/full/10.1056/NEJMoa2105675 (abstract read via Europe PMC)

- **Design:** open-label, cluster-randomized (by village, 1:1) trial, **600 villages in rural China, 20,995 participants**. Eligibility: history of stroke, **or age 60+ with high blood pressure**. Salt substitute = **75% sodium chloride, 25% potassium chloride** (by mass) vs regular salt. Mean follow-up **4.74 years** (secondary report).
- **Stroke:** 29.14 vs 33.65 events per 1,000 person-years; rate ratio **0.86** (95% CI 0.77-0.96; P = 0.006).
- **Major cardiovascular events:** 49.09 vs 56.29; rate ratio **0.87** (0.80-0.94).
- **Death from any cause:** 39.28 vs 44.61; rate ratio **0.88** (0.82-0.95).
- **Serious adverse events attributed to hyperkalemia:** 3.35 vs 3.30 per 1,000 person-years; rate ratio 1.04 (0.80-1.37), not significantly different.
- **Exclusions (secondary, from trial coverage):** chronic kidney disease, use of potassium-sparing diuretics, potassium supplements.
- **Limitations:** the substitute lowers sodium **and** raises potassium, so the two effects cannot be separated; rural China with a high-sodium baseline, so generalizability to US diets is limited (NEJM editorial urged caution); potassium levels were not monitored serially; open-label.
- Note: one search snippet gave a rate ratio of 0.87 for stroke; the abstract (read via Europe PMC) gives 0.86 for stroke and 0.87 for major cardiovascular events. The script uses 0.86 (a 14% lower stroke rate).

---

## 5. Observational: urinary potassium, sodium:potassium ratio and cardiovascular events

**Ma Y, He FJ, Sun Q, et al.** 24-hour urinary sodium and potassium excretion and cardiovascular risk. *N Engl J Med*. 2022;386(3):252-263. DOI 10.1056/NEJMoa2109794. (details read via search summary of the abstract) **(secondary)**

- **Design:** pooled individual data from **six prospective cohorts** of generally healthy adults; at least two 24-hour urine collections per person. **n = 10,709**, mean age **51.5 +/- 12.6 years**, 54.2% women; **571 CV events** over median **8.8 years**.
- **Top vs bottom quartile hazard ratios:** sodium 1.60 (1.19-2.14); **potassium 0.69 (0.51-0.91)**; sodium:potassium ratio **1.62 (1.25-2.10)**. Per 1,000 mg/day: sodium +18% risk, potassium -18% risk.
- **Limitations:** observational (association, not cause); younger than our audience on average; urinary potassium reflects the whole diet (fruit, vegetables, etc.), so it cannot isolate bananas or potassium itself.

---

## 6. DASH eating pattern and sodium

**Sacks FM, Svetkey LP, Vollmer WM, Appel LJ, et al. (DASH-Sodium Collaborative Research Group).** Effects on blood pressure of reduced dietary sodium and the Dietary Approaches to Stop Hypertension (DASH) diet. *N Engl J Med*. 2001;344(1):3-10. PMID 11136953.

- **Design:** randomized feeding trial, **412 participants**; control (typical US) diet or DASH; each person ate high, intermediate and low sodium for 30 days each, in random order.
- **Results:** sodium reduction lowered systolic BP on both diets. **DASH with low sodium vs control with high sodium: systolic 7.1 mm Hg lower in people without hypertension and 11.5 mm Hg lower in people with hypertension.** DASH lowered pressure at each sodium level, and the gap was larger at high sodium.
- **Limitations:** DASH is a whole eating pattern (more fruit, vegetables, low-fat dairy), so effects cannot be assigned to potassium alone. A 30-day feeding study, not free-living.
- The Harvard Nutrition Source page describes DASH as high in potassium and low in sodium and says it lowered blood pressure in people with hypertension.

---

## 7. Safety: kidney disease, medicines, salt substitutes

- **National Kidney Foundation, "Potassium" page** https://www.kidney.org/atoz/content/potassium : people with kidney disease may have potassium that is too high or too low; if high (hyperkalemia), a provider may advise limiting high-potassium foods. "High potassium" is generally 200 mg or more per serving. Lists bananas (half a banana is listed as high), potatoes, tomatoes, beans, lentils, milk, yogurt, oranges, spinach, salt substitutes and lite salt among higher-potassium foods. Recommends talking to a care team or dietitian.
- **MedlinePlus, "Potassium"** https://medlineplus.gov/potassium.html : "If you have chronic kidney disease, your kidneys may not remove extra potassium from the blood." Some medicines can raise potassium; contact your provider with questions.
- **Harvard T.H. Chan School, Nutrition Source, "Potassium"** https://nutritionsource.hsph.harvard.edu/potassium/ : hyperkalemia can occur with advanced kidney disease; intakes above 4,700 mg/day and potassium-based salt substitutes are flagged for these people; medicines that retain potassium, including NSAIDs, can raise levels; diuretics can cause potassium loss; check with a doctor before using potassium salt, especially if taking medicines that raise potassium.
- **American Heart Association, hyperkalemia pages** https://www.heart.org/en/health-topics/heart-failure/treatment-options-for-heart-failure/hyperkalemia-high-potassium and https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/types-of-blood-pressure-medications (read via search summaries; the first page returned 403 **(secondary)**): severe hyperkalemia can cause dangerous heart rhythms; risk factors include chronic kidney disease and heart failure; ACE inhibitors and ARBs are associated with high potassium.
- **Limitations:** these are agency and educational pages, not trials. They do not give a threshold at which a banana becomes unsafe; individual advice comes from blood tests and the care team.

---

## 8. Mechanism (background, hedged)

Palmer BF, Clegg DJ. Editorial. *J Hum Hypertens*. 2020;34(10):671-672 (read via PMC7550247, summary). Potassium affects renal sodium handling and blood pressure; a urinary Na/K ratio below 1 is described as a beneficial long-term target; Western sodium intake is about three times potassium on a molar basis. The script says only that potassium "may help the kidneys release more sodium" and that the sodium:potassium balance seems to matter. The mechanism is described in cautious language and not treated as established by these notes alone.

---

## Honest verdict

**Well supported**
- In adults with high blood pressure, higher potassium intake (mostly from potassium chloride supplements in trials) lowers blood pressure by roughly 5/3 mm Hg (Aburto 2013, 22 RCTs). In adults with normal blood pressure, no clear effect.
- A potassium-enriched salt substitute lowered stroke (-14%), major cardiovascular events (-13%) and death (-12%) in older rural Chinese adults with a stroke history or hypertension (Neal 2021, n = 20,995), without more serious hyperkalemia in a population screened to exclude kidney disease.
- The DASH pattern combined with lower sodium lowers blood pressure substantially (Sacks 2001).
- A banana has about 422 mg potassium, roughly an eighth to a sixth of the daily Adequate Intake. Average American intake is below the AI.
- People with chronic kidney disease and people on ACE inhibitors, ARBs or other potassium-retaining medicines can develop high potassium and should ask their care team before adding potassium, salt substitutes or supplements.

**Uncertain**
- Whether bananas themselves, or food-sourced potassium alone, lower blood pressure: the trials tested supplements, salt substitutes or whole diets.
- How much of the salt-substitute benefit was from the extra potassium vs the lower sodium.
- Stroke protection from dietary potassium (cohort evidence, low quality; the 2022 pooled cohorts were younger on average).
- Whether the U-shaped curve in the dose-response analysis matters for food intakes (it concerns high supplement doses and few trials).
- Evidence specific to adults over 65; the meta-analyses covered adults of all ages.

**False or overstated**
- "A banana a day lowers blood pressure" or "bananas are the best potassium food": no trial tested this, and many foods supply similar or more potassium per serving.
- "Potassium helps everyone's blood pressure": the effect was seen in people with hypertension, not clearly in people with normal pressure.
- "More potassium is always better" or "potassium is harmless": not true for kidney disease, some medicines, or high-dose supplements.
