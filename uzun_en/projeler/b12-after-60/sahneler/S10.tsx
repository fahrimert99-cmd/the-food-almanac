// Sahne 10 — bölüm kartı: "Getting B12 out of food" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (yazı kusuru dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [20, 60, 980, 780] },
  { gorsel: "tam/12", kirp: [1000, 90, 1720, 630] },
  { gorsel: "tam/13", kirp: [1000, 100, 1840, 730] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "swallow"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="AFTER YOU SWALLOW IT" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S10;
