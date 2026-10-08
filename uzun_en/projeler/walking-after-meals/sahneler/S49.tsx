// Sahne 49 — Güvenlik notu. Kamera sol alttaki sahte yazılı cihazı dışarıda tutar; solda risk grupları, sağda yapılacak.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Panel } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSafe = K(0, "safety"), tIns = K(1, "insulin"), tHeart = K(1, "heart"), tOther = K(1, "other"), tTalk = K(1, "talk"),
    tTeam = K(1, "diabetes"), tAct = K(1, "activity"), tPlan = K(1, "plan");
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [330, 0, 1540], [350, 0, 1500])} />
      <Panel a={pPanel} taraf="sol" genislik={940} opak={0.96} />
      <Baslik t={t} bas={tSafe - 0.1} metin="SAFETY" x={100} y={200} boyut={120} renk={RENK.mercan} />
      <Baslik t={t} bas={tSafe + 0.35} metin="FIRST" x={100} y={326} boyut={120} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={100} y={450} aralik={104} boyut={34} genislik={800} ogeler={[
        { bas: tIns, metin: "INSULIN OR LOW-SUGAR MEDICINES", renk: RENK.altin },
        { bas: tHeart, metin: "HEART CONDITION", renk: RENK.altin },
        { bas: tOther, metin: "OTHER MEDICAL LIMITS", renk: RENK.altin },
      ]} />
      <Liste t={t} isaret="onay" x={900} y={450} aralik={104} boyut={34} genislik={720} ogeler={[
        { bas: tTalk, metin: "TALK TO YOUR DOCTOR" },
        { bas: tTeam, metin: "OR DIABETES TEAM" },
        { bas: tAct, metin: "ABOUT ACTIVITY AFTER MEALS" },
        { bas: tPlan, metin: "MATCHED TO YOUR PLAN" },
      ]} />
    </>
  );
};

export default S49;
