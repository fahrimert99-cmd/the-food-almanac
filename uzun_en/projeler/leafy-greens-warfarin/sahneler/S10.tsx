// Sahne 10 — bölüm kartı: "Vitamin K in your food" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [100, 200, 1100, 950] },
  { gorsel: "tam/12", kirp: [60, 100, 1060, 850] },
  { gorsel: "tam/14", kirp: [300, 205, 1300, 955] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "green,"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="GREEN, LEAFY PLANTS" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S10;
