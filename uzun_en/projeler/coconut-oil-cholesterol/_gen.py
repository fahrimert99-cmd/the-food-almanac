import json, os
S = []


def g(metin, gorsel, bolum=None, baslik=None, etiket=None):
    d = {"metin": metin, "gorsel": gorsel}
    if bolum: d["bolum"] = bolum
    if baslik: d["baslik"] = baslik
    if etiket: d["etiket"] = etiket
    S.append(d)


def k(metin, ust, baslik, alt, bolum=None):
    d = {"tip": "kart", "metin": metin, "kart": {"ust": ust, "baslik": baslik, "alt": alt}}
    if bolum: d["bolum"] = bolum
    S.append(d)


def ch(metin, baslik, alt, cub, kaynak, bolum=None):
    d = {"tip": "grafik", "metin": metin,
         "grafik": {"baslik": baslik, "alt": alt,
                    "cubuklar": [{"etiket": a, "deger": b, "metin": c} for a, b, c in cub], "kaynak": kaynak}}
    if bolum: d["bolum"] = bolum
    S.append(d)


def B(sat, vurgu=None, note=None):
    d = {"satirlar": sat}
    if vurgu: d["vurgu"] = vurgu
    if note: d["not"] = note
    return d


g("If you cook with coconut oil, here is what sixteen trials found. Compared with other vegetable oils, it raised LDL cholesterol by about ten milligrams per deciliter.",
  "a large glass jar of white solid coconut oil with a wooden spoon lifting out a scoop, a halved coconut with white flesh beside it, close up",
  bolum="Coconut oil and LDL", baslik=B(["16 TRIALS"], "+10", "mg/dL of LDL versus other vegetable oils"),
  etiket="Neelakantan et al. · Circulation · 2020")
g("But it raised HDL too, and one trial saw no clear LDL difference from olive oil. So which result matters?",
  "a jar of coconut oil on a kitchen counter beside a glass bottle of olive oil, two small wooden spoons in front of them, soft morning light drawn as fine lines",
  baslik=B(["WHICH RESULT", "MATTERS?"]))
g("By the end, you'll know why the medium-chain claim fails, and what to cook with instead.",
  "a kitchen shelf with a jar of coconut oil, a bottle of olive oil and a bottle of canola oil lined up in a row, a cast iron skillet below",
  baslik=B(["COOK WITH", "WHAT?"]))
g("This is The Food Almanac. Let's start with what's actually in the jar.",
  "an open jar of coconut oil, pale and solid, with a glass lid resting beside it and a whole brown coconut behind")
g("Coconut oil is solid at room temperature, which is a clue. Solid fats tend to be rich in saturated fat, the kind that behaves differently from liquid vegetable oils in the body.",
  "a block of solid white coconut oil softening in a small saucepan on a stove, one half still solid and one half melted clear",
  baslik=B(["SOLID", "FAT"]))
g("According to US Department of Agriculture data, one hundred grams of coconut oil contain about 82 grams of saturated fat. That is more than eight-tenths of the oil.",
  "a kitchen scale holding a small bowl of coconut oil, a wooden spoon resting beside it, a jar of coconut oil in the background",
  baslik=B(["82 G", "SATURATED"], "82 g", "per 100 g of coconut oil"), etiket="USDA · FoodData Central · SR Legacy")
g("About 42 grams of that is lauric acid. Another 17 grams is myristic acid, and nearly 9 grams is palmitic acid. These are the saturated fats that dominate the jar.",
  "a jar of coconut oil with three small glass vials beside it filled with pale oil, a coconut half behind",
  baslik=B(["LAURIC ACID"], note="the largest part of coconut oil"))
g("Federal dietary guidelines advise keeping saturated fat under 10 percent of daily calories. On a 2,000-calorie day, that is about 22 grams. One tablespoon of coconut oil has about 11 grams, so a single spoonful uses up about half.",
  "a single tablespoon heaped with white coconut oil held over a jar of coconut oil, a kitchen scale in the corner, an antique pocket watch beside it",
  baslik=B(["ONE SPOON", "HALF THE DAY"]), etiket="Dietary Guidelines for Americans")
g("Why does that matter? Because saturated fat tends to raise LDL, the cholesterol carried in particles that can build up in the walls of arteries. Swapping it for unsaturated fat lowers LDL.",
  "a tube-shaped vessel opened lengthwise, small yellow fatty particles lining the inner wall among small red discs, a jar of coconut oil sketched beside it with dashed lines",
  baslik=B(["SATURATED FAT", "→ LDL"]))
k("In 2020, researchers set out to test coconut oil head to head, by gathering every trial they could find.",
  "THE EVIDENCE", "Sixteen trials, one answer", "Neelakantan et al. · Circulation · 2020", bolum="The sixteen-trial review")
g("Nithya Neelakantan, Rob van Dam and a colleague searched four research databases through June 2019. They wanted trials lasting at least two weeks that compared coconut oil with other fats.",
  "a quiet library desk with stacked journals with blank covers, an antique brass magnifying glass and a small jar of coconut oil beside them")
g("Sixteen articles qualified, and all of them measured blood fats. The main comparison was against vegetable oils that don't come from the tropics.",
  "sixteen small jars of coconut oil arranged in a tidy four by four grid on a laboratory shelf",
  baslik=B(["16 TRIALS"], note="at least two weeks each"))
ch("Against those oils, coconut oil raised total cholesterol by about 15 milligrams per deciliter, LDL by about 10, and HDL by about 4. Triglycerides did not change in a clear way.",
   "Coconut oil vs. non-tropical vegetable oils", "Average difference in blood fats, mg/dL",
   [("Total", 14.69, "+14.7"), ("LDL", 10.47, "+10.5"), ("HDL", 4.00, "+4.0"), ("Triglycerides", 2.39, "+2.4 (not clear)")],
   "Neelakantan et al., Circulation 2020 · 16 trials, pooled analysis")
g("The LDL increase held up when the authors left out trials that weren't randomized, and trials with weaker quality scores.",
  "a jar of coconut oil beside a sturdy brass balance scale, one side holding a small stack of papers with blank pages",
  baslik=B(["STILL HELD", "UP"]))
g("The trials didn't agree closely with each other, though. Some found small changes and others larger ones, so think of ten milligrams per deciliter as an average, not a promise for any one person.",
  "a row of five coconut oil jars of slightly different heights on a shelf, some filled higher and some lower",
  baslik=B(["AN", "AVERAGE"]))
g("The review found no significant effect of coconut oil on body weight, waist size, blood sugar or inflammation markers. So the extra health benefits often claimed for it didn't show up here.",
  "a measuring tape coiled beside a jar of coconut oil and a glucose meter with a blank screen",
  baslik=B(["NO CLEAR", "EXTRAS"]))
g("Coconut oil did raise HDL, and that sounds like good news. But the American Heart Association's 2017 review didn't find that this rise offsets the higher LDL. Hold that thought for the honest part, later in the video.",
  "a red heart symbol drawn like an engraving above a jar of coconut oil, with a small balance scale beside it",
  baslik=B(["HDL ROSE", "TOO"], "+4", "mg/dL of HDL"))
k("What about a direct test against butter and olive oil?", "THE KITCHEN TEST", "Coconut, olive or butter?",
  "Khaw et al. · BMJ Open · 2018", bolum="A trial with butter and olive oil")
g("In 2018, a team led by Kay-Tee Khaw randomly assigned 96 healthy adults to eat 50 grams a day of one of three fats. That is nearly four tablespoons, for four weeks.",
  "three small ceramic bowls on a wooden table, one holding coconut oil, one olive oil in a clear glass bowl, one a block of butter, a coconut half behind",
  baslik=B(["3 FATS", "4 WEEKS"], "50 g", "a day"), etiket="Khaw et al. · BMJ Open · 2018")
g("The fats were extra virgin coconut oil, extra virgin olive oil, or unsalted butter. The volunteers had an average age of 60, and two-thirds were women. Ninety-one finished the trial.",
  "a jar of extra virgin coconut oil, a bottle of olive oil and a wrapped block of butter lined up on a clean table, a pair of reading glasses beside them",
  baslik=B(["AVERAGE", "AGE 60"]))
ch("Butter raised LDL by about 16 milligrams per deciliter more than coconut oil, and about 15 more than olive oil. Coconut oil and olive oil were nearly the same.",
   "Difference in LDL cholesterol after four weeks", "Butter vs. coconut oil vs. olive oil, mg/dL (converted from mmol/L)",
   [("Butter vs coconut", 16.2, "16 higher"), ("Butter vs olive", 14.7, "15 higher"), ("Coconut vs olive", 1.5, "no clear gap")],
   "Khaw et al., BMJ Open 2018 · 91 healthy adults, mean age 60 · 4 weeks")
g("The gap between coconut oil and olive oil was too small to tell apart from chance. Coconut oil did raise HDL more than either of the other two fats.",
  "a glass bowl of olive oil and a bowl of coconut oil side by side on a wooden table, level as if on a balance, a coconut half behind",
  baslik=B(["COCONUT VS", "OLIVE: A TIE"]))
g("So this trial looks different from the sixteen-trial review. But it was small, it lasted only four weeks, and it studied healthy people. It can't tell us what happens over years, or in people whose LDL is already high.",
  "a small calendar page with only four weeks drawn as four columns of empty squares, a jar of coconut oil resting on the page",
  baslik=B(["SMALL AND", "SHORT"]))
g("A 2016 review in Nutrition Reviews looked at 21 papers, eight clinical trials and 13 observational studies. Coconut oil raised total and LDL cholesterol more than unsaturated plant oils, but less than butter.",
  "a coconut oil jar placed in the middle between a block of butter on the left and a bottle of vegetable oil on the right, spaced evenly on a table",
  baslik=B(["IN THE", "MIDDLE"]), etiket="Eyres et al. · Nutr Rev · 2016")
g("Some groups that eat coconut as part of traditional diets haven't shown more heart disease. But the reviewers warned that this can't be carried over to a typical Western diet, which differs in many other ways.",
  "a palm-lined tropical shore with a woven basket of whole coconuts on the sand, a small pot of coconut oil beside the basket",
  baslik=B(["TRADITIONAL", "DIETS"]))
k("You may have heard that coconut oil is full of MCTs, and that they are different. Is that true?",
  "THE CLAIM", "Is coconut oil an MCT oil?", "Medium-chain fats, explained", bolum="The MCT claim")
g("MCT stands for medium-chain triglycerides. These are fats with shorter chains than most fats in food. Supplements called MCT oil are made from them.",
  "a small glass bottle of clear MCT oil beside a jar of coconut oil and a halved coconut, a teaspoon in front",
  baslik=B(["WHAT IS", "MCT?"]))
g("A 2015 meta-analysis by Karen Mumme and Welma Stonehouse pooled 13 trials with 749 adults. MCTs lowered body weight by about half a kilogram, about one pound, more than long-chain fats did. Blood fats overall didn't differ.",
  "a small bottle of MCT oil next to a bathroom scale with a blank dial, and a measuring tape coiled beside a coconut half",
  baslik=B(["MCT: ABOUT", "1 POUND"], "–0.5 kg", "more than long-chain fats"),
  etiket="Mumme & Stonehouse · J Acad Nutr Diet · 2015")
g("Here is the catch. That analysis was about MCTs, not coconut oil as a cooking fat. MCT oil products are generally made from the two shortest medium-chain fats, caprylic and capric acid.",
  "a bottle of clear MCT oil on the left and a jar of coconut oil on the right with a gap between them, a coconut half in the middle",
  baslik=B(["NOT THE", "SAME THING"]))
g("USDA data show those two fats make up only about 12 percent of coconut oil. Lauric acid, at about 42 percent, is the largest part, and more than eight-tenths of the jar is saturated fat.",
  "a jar of coconut oil with a small glass beaker beside it, the beaker filled only one eighth of the way with pale oil, a coconut half behind",
  baslik=B(["ONLY", "12%"], "12%", "caprylic and capric acid in coconut oil"), etiket="USDA · FoodData Central")
g("So the weight results belong to MCT oil. A spoonful of coconut oil delivers a very different mix, mostly lauric acid and longer saturated fats. A claim about one ingredient doesn't automatically carry over.",
  "two spoons held side by side, one holding clear MCT oil and one holding white coconut oil, with a jar of coconut oil behind",
  baslik=B(["DIFFERENT", "MIX"]))
k("Now, the honest part. What do these studies not show?", "THE HONEST PART", "What we still don't know",
  "Limits of the evidence", bolum="The honest part")
g("This evidence is about cholesterol numbers, not heart attacks. Van Dam noted that studies of heart disease itself are the next step for research.",
  "a laboratory bench with a rack of small capped sample tubes and a jar of coconut oil, an open notebook with blank pages",
  baslik=B(["NUMBERS,", "NOT EVENTS"]))
g("That matters, but it isn't a loophole. LDL is a main driver of heart disease. In the American Heart Association's 2017 advisory, trials that swapped saturated fat for polyunsaturated vegetable oil cut cardiovascular disease by about 30 percent.",
  "a jar of coconut oil on one side of a table and a bottle of vegetable oil on the other, a curved dashed arrow from the jar to the bottle",
  baslik=B(["SWAP", "STUDIES"], "–30%", "heart disease in swap trials"), etiket="Sacks et al. · Circulation · 2017")
g("The advisory described that drop as similar to the effect of statin treatment. Swapping saturated fat for refined carbohydrates and sugar, on the other hand, did not show the same benefit.",
  "a jar of coconut oil beside a white bowl of refined sugar and a loaf of white bread, a small bottle of vegetable oil in front of them",
  baslik=B(["SWAP FOR", "WHAT?"]))
g("Frank Sacks, lead author of that advisory, wrote in an editorial that, in culinary practice, coconut oil should not be used as a regular cooking oil.",
  "a stove with a skillet, a jar of coconut oil pushed to the back of the counter and a bottle of olive oil in front",
  baslik=B(["NOT A REGULAR", "COOKING OIL"]))
g("Balance matters too. Rob van Dam, senior author of the 2020 review, said that limited, occasional use of coconut oil for taste is unlikely to have a substantial harmful effect. The concern is regular, high intake.",
  "a small pan of vegetable curry on a stove with just a teaspoon of coconut oil melting at the edge, the jar of coconut oil closed beside it",
  baslik=B(["A LITTLE", "IS FINE"]))
g("Your own response also depends on the rest of your diet and your medicines. If you take a statin or have been told your LDL is high, ask your doctor or pharmacist how fats like this fit your plan.",
  "a consultation desk with a stethoscope, a closed notebook, a jar of coconut oil and a pill organizer",
  baslik=B(["ASK YOUR", "DOCTOR"]))
g("Nothing here says coconut is dangerous. It says coconut oil is a poor choice as your everyday oil, and that the health halo around it is bigger than the evidence behind it.",
  "a jar of coconut oil in soft light on a wooden table, a single halved coconut beside it, plenty of quiet empty space around",
  baslik=B(["THE HEALTH", "HALO"]))
k("So what should you cook with? Here are five practical ways.", "HOW TO USE IT", "Cook with this instead",
  "Five practical ways", bolum="What to cook with instead")
g("One. For everyday sautéing and roasting, reach for olive oil or canola oil. Harvard's Nutrition Source lists both among healthier oils, and notes that swapping saturated fat for unsaturated fat lowers LDL.",
  "a skillet of roasted vegetables beside a bottle of olive oil and a bottle of canola oil, a jar of coconut oil pushed to the side",
  baslik=B(["OLIVE OR", "CANOLA"]))
g("Two. If you love the flavor, keep coconut oil for occasions. A teaspoon in a curry or a batch of granola is a very different thing from a spoonful every day.",
  "a small bowl of granola with a teaspoon of coconut oil beside it, the closed jar of coconut oil in the background",
  baslik=B(["A TEASPOON,", "NOT A SPOON"]))
g("Three. Check the saturated fat line on the Nutrition Facts panel. It takes ten seconds. With a ceiling of about 22 grams on a 2,000-calorie day, a food with several grams per serving uses up that budget quickly.",
  "a person's hands holding a food package up to the light next to a jar of coconut oil on a kitchen counter, reading glasses resting on the counter",
  baslik=B(["TEN-SECOND", "CHECK"]))
g("Four. Skip the spoonful-a-day habit. In the sixteen trials, coconut oil showed no significant effect on weight, waist size or blood sugar, so there is no payoff to offset the LDL rise.",
  "a single spoonful of coconut oil held above a jar of coconut oil, a red cross drawn over the spoon like an engraving mark",
  baslik=B(["NO DAILY", "SPOONFUL"]))
g("Five. Think about the whole pattern. The American Heart Association recommends replacing saturated fat with unsaturated fat within a pattern such as the DASH or Mediterranean diet. One oil is only a small part of that.",
  "a Mediterranean table with a plate of grilled fish, a green salad, a bowl of olives and a bottle of olive oil, a jar of coconut oil off to the far edge",
  baslik=B(["THE WHOLE", "PATTERN"]))
g("One safety note. Please don't stop or change any cholesterol medicine because of a video. If you have high LDL, heart disease or diabetes, talk with your doctor, pharmacist or a dietitian about which oils suit you.",
  "a doctor's desk with a pill organizer, a glucose meter, a stethoscope and a jar of coconut oil with its lid on",
  baslik=B(["SAFETY", "FIRST"]))
g("If you'd like to see what your own body does, your doctor can check your LDL on a standard lipid panel, reported in milligrams per deciliter. Ask whether a repeat test makes sense after you change your cooking oil.",
  "a laboratory rack of small capped sample tubes beside a jar of coconut oil and a clipboard with blank paper",
  baslik=B(["CHECK YOUR", "LDL"], note="lipid panel · mg/dL"))
k("Let's recap.", "THE TAKEAWAY", "Coconut oil and LDL", "Evidence over marketing", bolum="Recap")
g("Across sixteen trials, coconut oil raised LDL cholesterol by about ten milligrams per deciliter compared with other vegetable oils. It also raised HDL by about four.",
  "a jar of coconut oil with a red heart symbol above it and two small arrows drawn as engraving marks pointing upward",
  baslik=B(["LDL +10", "HDL +4"]))
g("A smaller trial in healthy adults around age 60 found coconut oil raised LDL less than butter and not clearly differently than olive oil. Coconut oil seems to sit somewhere in the middle.",
  "a jar of coconut oil in the middle between a block of butter and a bottle of olive oil on a wooden table")
g("The medium-chain claim belongs to MCT oil, not to the jar in your kitchen. Only about 12 percent of coconut oil is the shortest medium-chain fats.",
  "a jar of coconut oil beside a small bottle of MCT oil, a magnifying glass held over the jar",
  baslik=B(["MCT AND", "COCONUT OIL"]))
g("For everyday cooking, olive or canola oil is the better-supported choice. Keep coconut oil as an occasional flavor, and talk with your doctor about your own cholesterol.",
  "a skillet on a stove with olive oil being poured, a small closed jar of coconut oil resting on the shelf behind")
k("If you found this useful, subscribe to The Food Almanac for more food science, explained calmly and honestly. This video is for education only, and it isn't medical advice. See you in the next one.",
  "THE FOOD ALMANAC", "Evidence over hype", "For education only · not medical advice")
for i, s in enumerate(S, 1):
    s["id"] = i
S = [dict([("id", s["id"])] + [(a, b) for a, b in s.items() if a != "id"]) for s in S]
P = {
    "slug": "coconut-oil-cholesterol", "kanal": "The Food Almanac", "dil": "en",
    "baslik": "Does Coconut Oil Raise LDL Cholesterol?",
    "yorum": "Is coconut oil in your kitchen, and what do you use it for? Has your doctor ever talked with you about the oils you cook with?",
    "aciklama_giris": "A 2020 analysis in the journal Circulation pooled 16 clinical trials and found that coconut oil raised LDL cholesterol by about 10 milligrams per deciliter compared with non-tropical vegetable oils, and raised HDL by about 4. A smaller trial in healthy adults with an average age of 60 found coconut oil raised LDL less than butter, and not clearly differently from olive oil.\n\nIn this video we look at what is actually in coconut oil, what those two studies measured, why the claim that coconut oil is full of medium-chain fats does not carry over from MCT oil, what the American Heart Association concluded in 2017, where the evidence runs out, and five practical ways to cook with it, or without it.",
    "kaynaklar": [
        "Neelakantan N, Seah JYH, van Dam RM. The Effect of Coconut Oil Consumption on Cardiovascular Risk Factors: A Systematic Review and Meta-Analysis of Clinical Trials. Circulation. 2020;141(10):803-814. doi:10.1161/CIRCULATIONAHA.119.043052. PMID 31928080.",
        "Khaw KT, Sharp SJ, Finikarides L, Afzal I, Lentjes M, Luben R, Forouhi NG. Randomised trial of coconut oil, olive oil or butter on blood lipids and other cardiovascular risk factors in healthy men and women. BMJ Open. 2018;8(3):e020167. doi:10.1136/bmjopen-2017-020167. PMID 29511019.",
        "Eyres L, Eyres MF, Chisholm A, Brown RC. Coconut oil consumption and cardiovascular risk factors in humans. Nutrition Reviews. 2016;74(4):267-280. doi:10.1093/nutrit/nuw002. PMID 26946252.",
        "Mumme K, Stonehouse W. Effects of medium-chain triglycerides on weight loss and body composition: a meta-analysis of randomized controlled trials. Journal of the Academy of Nutrition and Dietetics. 2015;115(2):249-263. doi:10.1016/j.jand.2014.10.022. PMID 25636220.",
        "Sacks FM, Lichtenstein AH, Wu JHY, et al. Dietary Fats and Cardiovascular Disease: A Presidential Advisory From the American Heart Association. Circulation. 2017;136(3):e1-e23. doi:10.1161/CIR.0000000000000510. PMID 28620111.",
        "U.S. Department of Agriculture, FoodData Central. Oil, coconut (SR Legacy, FDC ID 171412). fdc.nal.usda.gov.",
        "Harvard T.H. Chan School of Public Health, The Nutrition Source. Types of Fat (includes the Dietary Guidelines for Americans limit of under 10 percent of calories from saturated fat). nutritionsource.hsph.harvard.edu."
    ],
    "kapak": {"satirlar": ["COCONUT", "RAISES LDL?"], "vurgu": "+10", "vurgu_alt": "mg/dL",
              "gorsel": "a large open jar of white solid coconut oil with a wooden spoon lifting out a big scoop, a halved coconut with white flesh overlapping in front, and a red heart symbol behind them, very large and close up, tightly grouped"},
    "kahraman": "coconut oil",
    "etiketler": ["coconut oil", "coconut oil cholesterol", "is coconut oil healthy", "coconut oil LDL", "saturated fat",
                  "cooking oils", "heart health", "cholesterol after 60", "MCT oil", "olive oil vs coconut oil"],
    "seslendirme_duzelt": {"LDL": "L D L", "HDL": "H D L", "MCT": "M C T", "MCTs": "M C Ts", "DASH": "dash", "USDA": "U S D A"},
    "sahneler": S}
here = os.path.dirname(os.path.abspath(__file__))
json.dump(P, open(os.path.join(here, "proje.json"), "w"), indent=2, ensure_ascii=False)
print(len(S), sum(len(s["metin"].split()) for s in S))
