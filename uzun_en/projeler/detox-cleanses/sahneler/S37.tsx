// Sahne 37 — bilinen risk faktörleri listesi.
import React from "react";
import { BaslikBlok, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c1 = s.cumleler[1].bas - 0.1;
  const [s1, a1] = pop(t, K(0, "one"), 0.5);
  const [s2, a2] = pop(t, K(0, "uncommon"), 0.5);
  const kapat = t < c1 ? 1 : 0;
  const b = s.meta.baslik?.satirlar ?? ["KNOWN RISK", "FACTORS"];
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])} />
      <div style={{ position: "absolute", left: 1500, top: 250, transform: `translate(-50%,0) scale(${s1})`, opacity: a1 * kapat }}>
        <Hap metin="ONE PATIENT" renk={RENK.altin} boyut={36} />
      </div>
      <div style={{ position: "absolute", left: 1500, top: 380, transform: `translate(-50%,0) scale(${s2})`, opacity: a2 * kapat }}>
        <Hap metin="UNCOMMON INJURY" renk={RENK.yesil} boyut={36} />
      </div>
      <BaslikBlok t={t} bas={K(1, "risk")} satirlar={b} x={1190} y={130} boyut={84} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="nokta" boyut={34} x={1190} y={360} aralik={92} genislik={700} ogeler={[
        { bas: K(1, "older"), metin: "OLDER AGE" },
        { bas: K(1, "diabetes,"), metin: "DIABETES" },
        { bas: K(1, "dehydration,"), metin: "DEHYDRATION" },
        { bas: K(1, "kidney"), metin: "KIDNEY DISEASE" },
        { bas: K(1, "gastric"), metin: "GASTRIC BYPASS" },
        { bas: K(1, "recent"), metin: "RECENT ANTIBIOTICS" },
      ]} />
    </>
  );
};

export default S37;
