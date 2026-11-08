# Research notes: Is a glass of red wine really good for your heart?

Slug: `red-wine-heart`. Angle: where the "French paradox" came from, why the old J-curve studies are doubted (the "sick quitter" problem), the 2023 JAMA Network Open meta-analysis, resveratrol doses, and what heart guidance says about alcohol.

Access note: PubMed and PMC pages blocked automated fetching (cookie or CAPTCHA wall). Numbers below come from the JAMA Network Open full-text page (opened), the AHA fact-sheet page (opened), and search-result abstracts and summaries of the other papers. Items I could not read in full are marked **(abstract/summary only)**.

Unit conversion used in the script: one US standard drink = about 14 g of alcohol (AHA fact sheet), so 25 g is about 1.8 drinks, 45 g about 3.2 drinks, and 65 g about 4.6 drinks.

---

## 1. Origin of the "French paradox"

- **Claim:** In France, saturated fat intake was high but coronary heart disease (CHD) mortality was low. The authors suggested this "may be attributable in part to high wine consumption" and proposed that moderate alcohol acts through a clotting (haemostatic) mechanism, not through the arteries.
- **Design:** Re-examination of existing population data (ecological comparison between populations, plus platelet data from the Caerphilly cohort, Wales). Not a trial of wine.
- **Source:** Renaud S, de Lorgeril M. Wine, alcohol, platelets, and the French paradox for coronary heart disease. *Lancet*. 1992;339(8808):1523-1526. doi:10.1016/0140-6736(92)91277-F. https://pubmed.ncbi.nlm.nih.gov/1351198/ (abstract/summary only)
- **Mechanism claimed:** alcohol at protective intake levels inhibited platelet aggregation (Caerphilly data).
- **Limitations:** Comparing countries cannot show what one person's drinking does; many other differences between populations; hypothesis-generating only.

## 2. The J-curve and the "sick quitter" problem

- **Concept:** People who reduce or stop drinking as they age or become ill (or start medicines) can be lumped into the "abstainer" group. That makes the non-drinking group look unhealthy and makes light drinkers look protected.
- **Fillmore et al. 2006:** Meta-analysis of 54 published studies. In the studies judged free of this systematic error, there was no significant all-cause or cardiac protection from light drinking. The authors cautioned that they had not disproved a benefit, because too few error-free studies existed. A 2007 follow-up (Annals of Epidemiology) reported that the few studies without this error show abstainers and light/moderate drinkers at similar risk.
  - Source: Fillmore KM, Kerr WC, Stockwell T, Chikritzhs T, Bostrom A. Moderate alcohol use and reduced mortality risk: systematic error in prospective studies. *Addiction Research & Theory*. 2006;14(2):101-132. doi:10.1080/16066350500497983. (abstract/summary only; UCSF news summary: https://www.ucsf.edu/news/2006/03/97831/international-study-questions-health-benefits-moderate-drinking)
- **Zhao et al. 2023 (below)** quantifies it: former drinkers vs lifetime non-drinkers, fully adjusted RR **1.26 (95% CI 1.12-1.42)** for all-cause mortality.
- **Limitation:** Fillmore's conclusion rests on a small number of "error-free" studies.

## 3. The 2023 JAMA Network Open meta-analysis

- **Source:** Zhao J, Stockwell T, Naimi T, Churchill S, Clay J, Sherk A. Association Between Daily Alcohol Intake and Risk of All-Cause Mortality: A Systematic Review and Meta-analyses. *JAMA Netw Open*. 2023;6(3):e236185. doi:10.1001/jamanetworkopen.2023.6185. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2802963 (author list from memory; confirm if needed. Numbers below read from the full-text page.)
- **Design:** Systematic review and meta-analysis of prospective cohort studies, 1980 to July 2021. **107 studies, 4,838,825 participants, 425,564 deaths** (news reports agree with these totals; read from abstract summaries).
- **Outcome:** all-cause mortality. This is not heart disease alone.
- **Fully adjusted RR vs lifetime non-drinkers (g ethanol/day):**
  - Former drinkers 1.26 (1.12-1.42)
  - Any drinker 1.11 (0.96-1.28), not significant
  - Occasional (>0 to <1.3) 0.96 (0.86-1.06)
  - **Low volume (1.3 to <25, under about 1.8 drinks) 0.93 (0.85-1.01), P = .07/.08, not significant**
  - Medium (25 to <45, about 1.8-3.2 drinks) 1.05 (0.96-1.14), not significant
  - High (45 to <65, about 3.2-4.6 drinks) 1.19 (1.07-1.32)
  - Higher (65 or more) 1.35 (1.23-1.47)
- **Unadjusted** low-volume RR was 0.85 (0.81-0.88), i.e. the apparent benefit shrank and lost significance after adjusting for study-level problems such as abstainer bias.
- **By sex (fully adjusted):** Women: medium 1.21 (1.08-1.36), high 1.34 (1.11-1.63), higher 1.61 (1.44-1.80). Men: medium 1.01 (0.93-1.10), high 1.15 (1.03-1.28), higher 1.34 (1.23-1.47). Women at any level 1.22 (1.02-1.46).
- **Limitations:** Observational cohorts; self-reported intake; drinking measured mostly once; mortality from all causes; the authors note inconsistent P values between abstract and tables (.07 vs .08, .03 vs .04). The abstract and tables I read do not give results split by age 60+.

## 4. Genetic (Mendelian randomization) evidence

- **Source:** Millwood IY, Walters RG, Mei XW, et al. Conventional and genetic evidence on alcohol and vascular disease aetiology: a prospective study of 500 000 men and women in China. *Lancet*. 2019;393(10183):1831-1842. PMID 30955975. https://pubmed.ncbi.nlm.nih.gov/30955975/ (abstract/summary only; first-author name from memory, a search summary listed authors in a different order; check before publishing citations.)
- **Design:** China Kadoorie Biobank, **512,715 adults** from ten areas of China, recruited 2004-2008, followed about 10 years. **161,498** were genotyped for ALDH2-rs671 and ADH1B-rs1229984 (variants that strongly change how much people drink).
- **Findings:** In men, self-reported intake showed a U-shaped link with stroke. Genotype-predicted alcohol intake in men was positively linked with ischemic stroke (RR 1.27, 95% CI 1.13-1.43, per 280 g/week) and with higher systolic blood pressure; for heart attack (myocardial infarction) RR was 0.96 and not significant. The authors concluded the apparent protective effect of moderate drinking on stroke was largely non-causal.
- **Limitations:** Chinese population, mostly men (few women drank, so no usable genetic result for women); drinking patterns differ from the US; partly industry-funded (GSK); genetic method assumptions.

## 5. Resveratrol: dose and human evidence

- **Amount in wine (secondary sources, wide range):** about 0.03-1.07 mg per 5-oz glass (News-Medical, https://www.news-medical.net/health/Resveratrol-in-Wines-and-Grapes.aspx); University of Michigan Health library: about 640 micrograms (0.64 mg) per 8-oz glass (https://uofmhealth.org/health-library/hn-2905008). One lay source calculated that reaching 500 mg a day from wine would take nearly 40 liters (LiveStrong). Human trials of purified resveratrol have used about 150 to 5,000 mg a day (same lay source). **Weak sourcing; script says only "well under one milligram" and "much larger doses, often 150 milligrams or more".**
- **Semba et al. 2014:** Semba RD, Ferrucci L, Bartali B, et al. Resveratrol levels and all-cause mortality in older community-dwelling adults. *JAMA Intern Med*. 2014;174(7):1077-1084. (abstract/summary only; https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1869012 or search PMID 24819981; DOI not confirmed.)
  - InCHIANTI prospective cohort, Tuscany, Italy: **783 adults aged 65 or older**, total urinary resveratrol metabolites over 24 hours, **9 years** of follow-up, **268 deaths**. Death rates by quartile of urinary resveratrol: 34.4%, 31.6%, 33.5%, 37.4% (P = .67). No significant association with all-cause mortality, cardiovascular disease or cancer.
  - Limits: observational; urine as a marker of intake; diet-derived resveratrol, not pills; authors said other compounds in foods could matter.
- **Not claimed:** the script does not say resveratrol pills are useless in people; it says wine-sized amounts are small and the older-adult cohort found no link.

## 6. What heart authorities say

- **AHA:** American Heart Association Scientific Statement, Alcohol Use and Cardiovascular Disease (Circulation, 2025; first author listed as Piano MR in a search result; unconfirmed). Fact-sheet page opened: https://newsroom.heart.org/facts/alcohol-use-and-cardiovascular-disease
  - "If you don't drink, don't start." Does not recommend drinking wine or any alcohol for potential health benefits. Those who drink: no more than two drinks a day for men, one for women.
  - No research has proven a direct cause-and-effect link between drinking alcohol and better heart health (AHA summary as reported by secondary coverage).
  - Heavy drinking (2-4 drinks/day) and binge drinking are consistently linked with high blood pressure, coronary artery disease, stroke, arrhythmias, cardiomyopathy and heart failure.
  - "Alcohol consumption, even in moderation (1-2 drinks/day), may worsen high blood pressure" in people who already have it. For people with high blood pressure or atrial fibrillation, reducing or stopping may be important.
  - Alcohol may affect some people differently, including women, older adults, binge drinkers and people with chronic conditions such as diabetes.
  - Who should not drink: people on medicines that interact with alcohol, people with conditions it can worsen (heart failure, uncontrolled high blood pressure, liver disease), and others.
  - Standard drink: about 14 g alcohol = 5 oz wine at 12% ABV, 12 oz regular beer, 1.5 oz 80-proof spirits.
- **2025-2030 Dietary Guidelines for Americans:** reported by AARP and others to drop numeric daily limits in favor of "consume less alcohol for better health." Only secondary reporting seen, so **not used in the script**.

---

## Honest verdict

**Well supported**
- Heavy drinking (about 3 or more drinks a day) is linked with a higher risk of death; in the 2023 review the risk was 19% higher at about 3-4.6 drinks and 35% higher above that.
- The old "J-curve" is shaky: former drinkers have a higher risk (RR 1.26), and mixing them into the non-drinker group can make light drinking look protective. After adjustment the low-volume result was not statistically significant.
- The AHA does not recommend starting to drink, or drinking wine, for health. Alcohol can worsen high blood pressure.
- A cohort of 783 adults 65+ found no link between urinary resveratrol and death, heart disease or cancer.

**Uncertain**
- Whether light drinking (under about 2 drinks a day) helps, harms or does nothing for the heart in an individual. The pooled estimate leaned slightly below 1 but was not significant. Too few clean studies exist.
- Results specific to adults over 60 and to red wine versus other alcohol; the genetic study was in China, largely men.
- The exact resveratrol content of wine and the dose a person would need.

**False or unsupported**
- That red wine is proven to protect the heart, or that non-drinkers should start for their heart.
- That resveratrol in wine is a meaningful dose (wine-sized amounts are tiny compared with study doses).
- That the French paradox shows wine protects individuals.
