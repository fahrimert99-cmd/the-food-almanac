// Sahne 9 — bölüm kartı: "Turmeric versus ibuprofen" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden 4:3 kırpımlar (bekleme odası, kapsül tepsisi, botlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/10", kirp: [0, 330, 960, 1050] },
  { gorsel: "tam/11", kirp: [100, 150, 1000, 825] },
  { gorsel: "tam/12", kirp: [60, 300, 1060, 1050] },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "trial"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="FROM THE OPENING" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S09;
