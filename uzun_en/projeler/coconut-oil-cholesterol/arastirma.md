# Research notes: coconut oil and LDL cholesterol

Topic: "Is coconut oil good or bad for your cholesterol?" (slug `coconut-oil-cholesterol`)
Title used: **Does Coconut Oil Raise LDL Cholesterol?**
Audience: US adults, mostly 60+. Units: mg/dL. Converted values are marked "converted".

How sources were checked: abstracts and records were opened through Europe PMC, the USDA FoodData Central API, the TCTMD news report and the Harvard Nutrition Source page. The AHA journal pages (ahajournals.org, heart.org), PMC full texts and the BMJ Open site returned 403 or a bot check, so **full texts of the 2017 AHA advisory, the 2020 meta-analysis and the Khaw trial were not read**. Everything in the script comes from the abstracts and pages listed below. Items I only saw in search-result summaries are flagged "(search summary only)" and are used in the script only in softened form.

---

## 1. Neelakantan 2020, the 16-trial meta-analysis (main study)

- **Citation:** Neelakantan N, Seah JYH, van Dam RM. The Effect of Coconut Oil Consumption on Cardiovascular Risk Factors: A Systematic Review and Meta-Analysis of Clinical Trials. *Circulation* 2020;141(10):803-814. doi:10.1161/CIRCULATIONAHA.119.043052. PMID 31928080. (epub 13 Jan 2020)
- **URLs:** https://pubmed.ncbi.nlm.nih.gov/31928080/ · https://doi.org/10.1161/CIRCULATIONAHA.119.043052
- **Design:** systematic review and random-effects meta-analysis (PRISMA). Searched PubMed, SCOPUS, Cochrane Registry, Web of Science through June 2019. Included trials of at least 2 weeks comparing coconut oil with other fats. 16 articles included; all 16 reported blood lipids; 8 body weight, 5 body fat %, 4 waist circumference, 4 fasting glucose, 5 CRP.
- **Numbers, coconut oil vs non-tropical vegetable oils (pooled difference, 95% CI):**
  - LDL-C: **+10.47 mg/dL** (3.01 to 17.94), I² = 84%
  - HDL-C: **+4.00 mg/dL** (2.26 to 5.73), I² = 72%
  - Total cholesterol: +14.69 mg/dL (4.84 to 24.53)
  - Triglycerides: +2.39 mg/dL (-1.13 to 5.91), not significant
  - Body weight -0.23 kg (-0.82 to 0.36); waist -0.63 cm (-2.44 to 1.19); body fat +0.03% (-0.33 to 0.38); fasting glucose +0.12 mmol/L (-0.11 to 0.35); CRP -0.001 mg/L (-0.85 to 0.85): all not significant.
  - LDL and HDL effects remained significant after excluding non-randomized trials and trials with Jadad score under 3 (abstract).
  - Vs palm oil (point estimates, TCTMD): total +25.57, LDL +20.50, HDL +2.83 mg/dL; not used in the script (palm oil is a different comparison and could confuse).
- **Sources opened:** Europe PMC record (abstract) and TCTMD news report https://www.tctmd.com/news/coconut-oil-ups-ldl-cholesterol-compared-other-fats-meta-analysis
- **Quotes (TCTMD):** van Dam: "limited sporadic use of coconut oil for taste in cooking is unlikely to have a substantial harmful effect"; high consumption increases LDL. Next step is trials with cardiovascular disease outcomes. Sacks (editorial): "In culinary practice, coconut oil should not be used as a regular cooking oil."
- **Limitations:** high heterogeneity (I² 84% for LDL); total participants and trial sizes not seen (abstract and news report do not give them); trials are surrogate-marker (lipid) trials, not heart-disease outcomes; population ages not seen, so the script does not claim older adults were studied.

## 2. Khaw 2018, coconut oil vs olive oil vs butter (RCT)

- **Citation:** Khaw KT, Sharp SJ, Finikarides L, Afzal I, Lentjes M, Luben R, Forouhi NG. Randomised trial of coconut oil, olive oil or butter on blood lipids and other cardiovascular risk factors in healthy men and women. *BMJ Open* 2018;8(3):e020167. doi:10.1136/bmjopen-2017-020167. PMID 29511019. PMC5855206.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/29511019/
- **Design/population:** randomized trial, 3 arms, 50 g/day of extra virgin coconut oil, extra virgin olive oil or unsalted butter for 4 weeks. 96 randomized, 94 attended baseline, 91 attended follow-up. Mean age 60, 67% women. Healthy men and women.
- **Results (between-group LDL-C, mmol/L, 95% CI):** butter vs coconut +0.42 (0.19 to 0.65); butter vs olive +0.38 (0.16 to 0.60); coconut vs olive -0.04 (-0.27 to 0.19), P = 0.74 (no difference).
  - Converted to mg/dL (x 38.67): butter vs coconut about 16 (7 to 25); butter vs olive about 15 (6 to 23); coconut vs olive about -1.5 (-10 to +7). The chart uses 16.2, 14.7 and 1.5.
  - HDL-C: coconut higher than butter by 0.18 mmol/L (0.06 to 0.30) and higher than olive by 0.16 (0.03 to 0.28).
  - No significant differences between groups in weight, BMI, waist circumference or body fat.
  - 50 g = about 3.7 tablespoons (1 tablespoon coconut oil = 13.6 g, USDA), said in the script as "nearly four tablespoons".
- **Source opened:** Europe PMC record (abstract). Full text not read.
- **Limitations:** small, only 4 weeks, healthy volunteers, no high-LDL group, diet context (how the fat was consumed, background diet) not seen; extra virgin oil only (the meta-analysis may include refined oils).
- Note: this trial appears to disagree with the meta-analysis on coconut vs olive/vegetable oils. The script presents both and says the trial is small and short.

## 3. Eyres 2016, review of human data

- **Citation:** Eyres L, Eyres MF, Chisholm A, Brown RC. Coconut oil consumption and cardiovascular risk factors in humans. *Nutr Rev* 2016;74(4):267-280. doi:10.1093/nutrit/nuw002. PMID 26946252.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/26946252/
- **Content:** 21 papers (8 clinical trials, 13 observational studies). Coconut oil raised total and LDL cholesterol more than cis-unsaturated plant oils, but less than butter. Observational evidence: eating coconut flesh or squeezed coconut within traditional dietary patterns not linked with adverse CV outcomes, but cannot be applied to a typical Western diet. The total-to-HDL ratio was often not examined.
- **Source opened:** Europe PMC abstract. **Limitation:** no numerical effect sizes in the abstract.

## 4. AHA Presidential Advisory 2017

- **Citation:** Sacks FM, Lichtenstein AH, Wu JHY, Appel LJ, Creager MA, Kris-Etherton PM, Miller M, Rimm EB, Rudel LL, Robinson JG, Stone NJ, Van Horn LV. Dietary Fats and Cardiovascular Disease: A Presidential Advisory From the American Heart Association. *Circulation* 2017;136(3):e1-e23. doi:10.1161/CIR.0000000000000510. PMID 28620111.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/28620111/
- **From the abstract (opened via Europe PMC):** randomized trials that lowered saturated fat and replaced it with polyunsaturated vegetable oil reduced CVD by about 30%, "similar to the reduction achieved by statin treatment"; replacing saturated fat with mostly refined carbohydrates and sugars was not linked to lower CVD; the authors recommend replacing saturated fat with unsaturated fats within a pattern such as DASH or Mediterranean. The abstract does not mention coconut oil.
- **Coconut-oil statements (search summary only; full text not opened because of a 403):** the advisory is reported to say coconut oil is about 82% saturated fat, that 7 trials found it raised LDL similarly to butter, beef fat or palm oil, that it has no known offsetting favorable effects, and that the authors advise against its use. It is also reported to say the HDL/LDL-ratio effect of lauric acid is the basis of the optimistic claims. The script only says "the 2017 review didn't find that the HDL rise offsets the higher LDL" and uses the Sacks editorial quote from TCTMD.
- **Recommended saturated fat limit:** search summaries say the AHA aims for 5 to 6% of calories; the Harvard page lists an older 7% AHA figure. Because these disagree and the AHA page was blocked, the script uses only the **Dietary Guidelines limit of under 10% of calories** (Harvard Nutrition Source page, opened).
- **Limitations:** a narrative advisory with some dissent from other researchers (search summary only). The ~30% reduction comes from trials that swapped to polyunsaturated oil, not trials of coconut oil.

## 5. MCT claim

- **Mumme K, Stonehouse W.** Effects of medium-chain triglycerides on weight loss and body composition: a meta-analysis of randomized controlled trials. *J Acad Nutr Diet* 2015;115(2):249-263. doi:10.1016/j.jand.2014.10.022. PMID 25636220. https://pubmed.ncbi.nlm.nih.gov/25636220/
  - 13 RCTs, 749 adults. MCTs reduced body weight by **0.51 kg** more than long-chain triglycerides (95% CI -0.80 to -0.23). Waist -1.46 cm, hip -0.79 cm; total, subcutaneous and visceral fat lower. Overall no differences in blood lipid levels. Dose not given in the abstract; coconut oil not mentioned in the abstract. (Abstract only.)
  - 0.51 kg = 1.12 lb, said as "about one pound".
- **MCT oil is mostly caprylic (C8) and capric (C10) acid:** search summary of consumer/retail pages only (e.g. "50-100% C8 and 20-50% C10"); no peer-reviewed source opened. In the script this is worded "generally made from" and is the weakest-supported statement; if the fact-checker requires a source, soften to "MCT oil is a separate product".
- **Coconut oil composition (USDA FoodData Central, SR Legacy, FDC ID 171412, opened through the API):** per 100 g: total saturated 82.475 g; lauric (12:0) 41.84 g; myristic (14:0) 16.7 g; palmitic (16:0) 8.64 g; stearic 2.52 g; caprylic (8:0) 6.802 g; capric (10:0) 5.39 g; caproic (6:0) 0.477 g; monounsaturated 6.33 g; polyunsaturated 1.70 g. One tablespoon = 13.6 g.
  - Caprylic + capric = 12.19 g per 100 g = about 12%.
  - Saturated fat per tablespoon = 13.6 x 0.825 = 11.2 g.
  - 10% of 2,000 kcal = 200 kcal / 9 kcal per g = 22 g, so one tablespoon uses about half.
  - Harvard Nutrition Source lists coconut oil as 87% saturated (% of fat; different basis and database).
- **Dietary Guidelines and swap advice:** Harvard Nutrition Source "Types of Fat" page (opened): under 10% of calories from saturated fat; swapping saturated for unsaturated fat lowers LDL; healthy oils such as olive and canola; limit butter. https://nutritionsource.hsph.harvard.edu/what-should-you-eat/fats-and-cholesterol/types-of-fat/

## Not used or not verified
- Palm-oil comparison numbers (kept out to avoid confusion).
- "Virgin coconut oil has no LDL effect" (subgroup claim from Teng 2020, seen only in a search summary): not used.
- Any claim about lauric acid being absorbed like a long-chain fat: only seen on consumer sites, not used.
- Participant totals for the 16-trial review: not found.

## Honest verdict
**Well supported**
- Coconut oil is about 82% saturated fat by weight (USDA) and about 42% lauric acid.
- Compared with non-tropical vegetable oils, coconut oil raises LDL (about +10 mg/dL on average) and HDL (about +4) in trials of at least 2 weeks; the LDL effect is robust to excluding weaker trials but varies a lot between trials.
- Coconut oil raised LDL less than butter in a 4-week trial in healthy adults (mean age 60).
- Trials that replaced saturated fat with polyunsaturated vegetable oil lowered CVD by about 30% (AHA 2017); this is not a coconut-oil trial.
- No significant effect on weight, waist, glucose or inflammation was found in the pooled trials.

**Uncertain**
- Whether the small HDL rise offsets the LDL rise: the AHA says no known offsetting benefit, but no coconut-oil trial tests heart-disease outcomes.
- Whether extra virgin coconut oil behaves differently: one 4-week trial showed LDL similar to olive oil; the pooled review shows a rise versus other vegetable oils. Small, short, healthy volunteers.
- Whether occasional small amounts matter: expert opinion (van Dam) says unlikely to be harmful; no trial tests it.
- Traditional-diet observational data cannot be applied to a Western diet.

**False or misleading**
- "Coconut oil is a heart-healthy superfood" or "improves cholesterol": the evidence shows LDL goes up, and no benefit for weight, glucose or inflammation was found.
- "Coconut oil is MCT oil": MCT weight data come from MCT products; caprylic plus capric acid is only about 12% of coconut oil, and lauric acid is about 42%.
- "Coconut oil is poison": also not supported; small occasional use is not expected to cause substantial harm.
