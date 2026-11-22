# Research notes: Is organic food healthier than conventional?

Project slug: `organic-vs-conventional` · Written 22 November 2026.

Access note: PubMed, the USDA AMS PDF and EWG's own pages returned errors (cookie wall / 403) when fetched. Abstracts and figures below were read through Europe PMC, PMC, Stanford, the ACP press release, USDA ERS and Food Safety News. Where a figure comes only from a search-result summary or a secondary page, this is marked **[secondary]** and the script does not lean on it.

---

## 1. Smith-Spangler et al. 2012 (Stanford review): nutrients and pesticides

- **Citation:** Smith-Spangler C, Brandeau ML, Hunter GE, Bavinger JC, Pearson M, Eschbach PJ, Sundaram V, Liu H, Schirmer P, Stave C, Olkin I, Bravata DM. Are organic foods safer or healthier than conventional alternatives? A systematic review. *Ann Intern Med.* 2012;157(5):348–366. DOI: 10.7326/0003-4819-157-5-201209040-00007. Stanford release: https://med.stanford.edu/news/all-news/2012/09/little-evidence-of-health-benefits-from-organic-foods-study-finds.html · ACP release: https://www.acponline.org/acp-newsroom/no-nutritional-or-safety-differences-between-organic-and-conventional-foods
- **Design:** systematic review. 237 studies in all: 17 studies in people (6 were randomized trials) and 223 studies comparing nutrient or contaminant levels in food.
- **Findings:**
  - Only 3 human studies measured clinical outcomes; no significant differences by food type were reported. Human studies lasted from 2 days to 2 years; none followed people for long-term health outcomes (Stanford release).
  - No consistent differences in vitamin content. Phosphorus was the only nutrient significantly higher in organic produce, judged clinically minor (Stanford release).
  - Weak evidence of higher total phenols in organic produce, and of higher omega-3 fats in organic milk and chicken; authors called the evidence weak and of little clinical significance (ACP release).
  - Eating organic fruits and vegetables reduced the risk of detectable pesticide residue by **30 percent**. Residues were generally within allowable safety limits (ACP release).
  - Organic chicken and pork carried lower risk of bacteria resistant to three or more antibiotics; clinical importance unclear.
  - Children on organic diets had lower pesticide residues in urine (Stanford release).
- **Limitations (per the authors/abstract summary):** heterogeneous, few studies, possible publication bias; human studies short. **Quote:** "the published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods."
- **Type of evidence:** food composition (lab measurements) plus small human studies. Not outcome trials.

## 2. Barański et al. 2014: the later meta-analysis that found more antioxidants

- **Citation:** Barański M, Srednicka-Tober D, Volakakis N, et al. Higher antioxidant and lower cadmium concentrations and lower incidence of pesticide residues in organically grown crops: a systematic literature review and meta-analyses. *Br J Nutr.* 2014;112(5):794–811. PMID 24968103; DOI 10.1017/S0007114514001366; PMC4141693 (https://pmc.ncbi.nlm.nih.gov/articles/PMC4141693/).
- **Design:** systematic review and meta-analysis. 343 publications selected; 156 used in the weighted meta-analysis.
- **Findings (organic vs conventional crops):**
  - Higher polyphenols. Phenolic acids +19% (95% CI 5–33), flavanones +69% (13–125), stilbenes +28% (12–44), flavones +26% (3–48), flavonols +50% (28–72), anthocyanins +51% (17–86).
  - Cadmium about 48% lower in organic crops in the Results, but the 95% CI (−112 to 16%) includes zero: imprecise.
  - Detectable pesticide residues: abstract says frequency was four times higher in conventional crops; Results: 46% of conventional samples vs 11% of organic samples. That comparison rests on only 11 studies, 8 of them on one crop.
  - Total nitrogen about 10% lower in organic crops.
- **Limitations (stated in the paper):** very high heterogeneity (I² above 75% for most outcomes); publication bias suspected or detected for about half of parameters; no health outcomes measured, so the health meaning of the differences is unclear. Funding: EU Sixth Framework Programme and the Sheepdrove Trust, which supports organic farming research (authors say the Trust had no influence on the study).
- **Why it matters:** it is the main counterpoint to the "small differences" message. Antioxidant concentrations are higher, but no study showed that this changes anyone's health.

## 3. Mie et al. 2017: comprehensive review

- **Citation:** Mie A, Andersen HR, Gunnarsson S, et al. Human health implications of organic food and organic agriculture: a comprehensive review. *Environ Health.* 2017;16:111. DOI 10.1186/s12940-017-0315-4. https://ehjournal.biomedcentral.com/articles/10.1186/s12940-017-0315-4 (read via abstract/search summary **[secondary]**).
- **Findings:** crop composition differs only modestly; organic fruit and vegetables have somewhat more phenolic compounds; organic dairy (and possibly meat) has more omega-3 fats, differences of marginal nutritional importance. Organic eating may be linked to lower allergy and overweight risk but evidence is inconclusive because organic eaters have healthier lifestyles overall. Conventional fruit and vegetables are the main source of human pesticide exposure; some epidemiology links certain pesticides to children's cognitive development.
- **Use in script:** only as supporting context ("a 2017 review reached a similar view"); not for numbers.

## 4. Pesticide residues vs safety limits

### 4a. USDA Pesticide Data Program (agency monitoring)
- **Source:** USDA Agricultural Marketing Service, Pesticide Data Program annual summaries. Index: https://www.ams.usda.gov/node/43358 (2022 summary page, returned 403 on fetch). Figures below were read in a Food Safety News report of the 2021 summary: https://www.foodsafetynews.com/2022/12/usda-reports-99-percent-of-foods-tested-are-below-pesticide-residue-limits/
- **Figures (2021 data, 10,127 samples of foods bought for monitoring):** over 99 percent at or below EPA tolerances; 0.53 percent (54 samples) above a tolerance; 3.7 percent had a residue with no established tolerance; 24.0 percent had no detectable residue. Samples were selected without regard to organic labeling.
- **2022 summary [secondary]:** search-result text reports more than 99 percent below EPA benchmarks again, and that PDP "is not designed for enforcement."
- **Limits:** a tolerance is a legal limit set by EPA from toxicity studies with safety margins; being under it does not prove zero risk for every person, and tolerances cover single compounds, not mixtures. Monitoring is of food as sold, not of what people actually absorb.
- **Script wording:** "USDA's yearly testing of thousands of samples: more than 99 percent at or below the legal limit." Cite 2021 data (read) explicitly as "in 2021."

### 4b. Winter & Katz 2011: exposure on the "Dirty Dozen" foods
- **Citation:** Winter CK, Katz JM. Dietary exposure to pesticide residues from commodities alleged to contain the highest contamination levels. *J Toxicol.* 2011;2011:589674. PMID 21776262; DOI 10.1155/2011/589674; PMC3135239 (https://pmc.ncbi.nlm.nih.gov/articles/PMC3135239).
- **Design:** probabilistic exposure modeling using USDA PDP data for the 12 produce items on EWG's 2010 Dirty Dozen list: the 10 most frequently detected pesticides on each (120 pesticide-food estimates). Authors: University of California, Davis, Department of Food Science and Technology.
- **Findings:** every mean exposure estimate was well below its chronic reference dose (RfD). Highest: methamidophos on bell peppers, 2% of the RfD. Only 1 of 120 estimates exceeded 1% of the RfD; about three-quarters were below 0.01% of the RfD. Conventional produce was 2.9 to 4.8 times more likely to have detectable residues, but 23% of organic samples also tested positive. Authors conclude that switching to organic would not measurably reduce consumer risk, and that the advocacy list's ranking method lacks scientific credibility.
- **Limitations:** a modeling study using population-average exposures, built on regulators' reference doses; no measurement in people. The funding or conflict-of-interest statement was not visible in the page I read, so I cannot rule out industry ties. Uses 2010 list and older data. Reference doses protect against single-chemical effects and can be challenged. The script presents it as "one analysis by food toxicologists at UC Davis".
- **Type of evidence:** modeling, not outcomes.

### 4c. Hyland et al. 2019: organic diet and urinary pesticide levels
- **Citation:** Hyland C, et al. Organic diet intervention significantly reduces urinary pesticide levels in U.S. children and adults. *Environ Res.* 2019;171. PMID 30765100. (Read via Europe PMC abstract.) https://pubmed.ncbi.nlm.nih.gov/30765100/
- **Design:** before-and-after intervention in 4 US families (16 people: adults and children), 158 urine samples. Funded by Friends of the Earth U.S., with an author affiliated with that group.
- **Findings:** 13 pesticide metabolites or compounds fell significantly after the organic diet began; for example malathion dicarboxylic acid −95.0%, clothianidin −82.7%, chlorpyrifos metabolite TCPy −60.7%.
- **Limitations:** tiny sample, no control group, intervention length not in the abstract, advocacy funder. Shows exposure goes down, not that health improves.
- **Script wording:** "In a small study of four families, urine pesticide levels dropped on an organic diet." Exposure marker, not health.

## 5. NutriNet-Santé: organic food and cancer

- **Citation:** Baudry J, et al. Association of frequency of organic food consumption with cancer risk: findings from the NutriNet-Santé prospective cohort study. *JAMA Intern Med.* 2018;178(12):1597–1606. DOI 10.1001/jamainternmed.2018.4357; PMID 30422212; PMC6583612 (https://pmc.ncbi.nlm.nih.gov/articles/PMC6583612).
- **Design:** prospective cohort, France. 68,946 adults (78.0% women, mean age 44.2). Mean follow-up 4.56 years (2009–2016). 1,340 first cancers. Organic consumption was self-reported frequency for 16 product groups (never, occasionally, most of the time) turned into a 0–32 score.
- **Findings:** highest vs lowest quarter of organic score: overall cancer hazard ratio **0.75** (95% CI 0.63–0.88); absolute risk reduction 0.6% (as reported). Each 5-point increase: HR 0.92. Postmenopausal breast cancer HR 0.66 (0.45–0.96). Non-Hodgkin lymphoma HR 0.14 (0.03–0.66), based on very few cases (2 in the top group). No association for prostate, colorectal or premenopausal breast cancer. In a sensitivity analysis adjusting for a plant-based diet score, the postmenopausal breast cancer link was no longer significant.
- **Who ate organic:** people with higher organic scores were more educated, had higher incomes, ate better overall, were more physically active and had lower BMI.
- **Limitations (authors):** volunteers more health-conscious than the general population; self-reported organic intake with no quantity; short follow-up; residual confounding possible; **pesticide exposure was not measured** (the pesticide explanation is a hypothesis). Observational: cannot show cause. One author is an unpaid expert for two nonprofit foundations that promote organic food. Participants were young (average 44), not older adults.
- **Honest reading:** a signal worth studying, not proof. The mean age (44) means little is known directly about people over 60.

## 6. Cost per serving

- **Source:** USDA Economic Research Service, Amber Waves, "Investigating Retail Price Premiums for Organic Foods" (May 2016), based on Carlson & Jaenicke, ERR-209; Nielsen Homescan purchases 2004–2010. https://www.ers.usda.gov/amber-waves/2016/may/investigating-retail-price-premiums-for-organic-foods
- **Figures:** in 2010, organic premiums for fresh fruit and vegetables ranged from 7 percent (spinach) to 60 percent (salad mix). Spinach's premium was 57 percent in 2004 and 7 percent in 2010. Premiums are statistical estimates for prepackaged products.
- **Limits:** data are 12–16 years old and only prepackaged items. Prices vary by store, region and year. **The script does not give a current dollar figure**; it says premiums "ranged widely" and invites viewers to compare shelf tags. Newer USDA material suggests some wholesale premiums have shrunk **[secondary]**; not used.

## 7. The "Dirty Dozen" list

- **What it is:** an annual ranking by the Environmental Working Group (EWG), built on USDA test data. 2025 version (search-result reporting **[secondary]**): spinach first, strawberries second; kale/collards/mustard greens, grapes, peaches, cherries, nectarines, pears, apples, blackberries, blueberries, potatoes. Used USDA tests of more than 53,000 samples of 47 produce types, and for the first time added government toxicity information. Some crops were tested years earlier (spinach: 2016) **[secondary]**.
- **Critique (peer-reviewed):** Winter & Katz (section 4b) argued the earlier method scored foods by whether residues could be found, not by dose or toxicity, and that real exposure on the listed foods was far below reference doses. Later critics say the 2025 version still does not weigh dose **[secondary, industry-adjacent sources: treat cautiously]**.
- **What I could not verify:** EWG's own methodology page (403). So the script does not describe EWG's current formula beyond "ranks produce using USDA test results" and attributes criticism to the named UC Davis analysis.
- **Take-away for viewers:** the list tells you which foods are *more likely to carry a detectable residue*, not which are unsafe. If you want to lower exposure, it is a rough guide for where organic cuts residue most; washing and peeling remove some residue (general FDA advice; not studied in this video's sources, so the script keeps washing as a generic safe-handling tip without numbers).

## 8. Honest verdict

**Well supported**
- Organic and conventional produce are close in vitamins and minerals. The 2012 Stanford review found no consistent vitamin differences.
- Organic produce is less likely to carry detectable pesticide residue: about 30 percent lower risk in the 2012 review; the 2014 meta-analysis found residues four times more often in conventional crops (small number of studies).
- Almost all conventional samples USDA tests are at or below legal limits (over 99 percent in 2021).
- Eating an organic diet lowers pesticide markers in urine (small studies).

**Uncertain**
- Whether the higher polyphenols in organic crops matter for health (no outcome data).
- Whether lower residue exposure improves health in adults. NutriNet-Santé saw 25 percent lower cancer risk in heavy organic consumers, but these people differ in many ways, follow-up was short and the cohort was young.
- Long-term effects of low-level pesticide mixtures; reference doses can be debated.
- Organic milk and meat omega-3 differences: real in some studies, nutritionally marginal.

**False or unsupported**
- "Organic food is far more nutritious." Not supported.
- "Conventional produce is unsafe or poisonous." Residues are nearly always under legal limits.
- "Organic means no pesticides." Organic farming uses approved (mostly natural-origin) pesticides, and 23 percent of organic samples had a detectable residue in PDP data cited by Winter & Katz.
- "Organic is proven to prevent cancer." No.
- Practical conclusion supported by all sources: eating more fruits and vegetables, organic or not, is the thing that matters; organic is a personal choice about exposure, environment and budget. Frozen or conventional produce beats skipping produce.

## Sources not used for numbers
- Chiu et al. 2018 (JAMA Intern Med, high-residue produce and fertility treatment outcomes in women of reproductive age): not relevant to this audience.
