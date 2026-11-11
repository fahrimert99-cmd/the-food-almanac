// Sahne 46 — bölüm kartı: "It depends on the stone" (PART 6).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden 4:3 kırpımlar (47: taşlar, sebze, su; 48: tüp rafı, tabak, panonun sağı)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/47", kirp: [40, 120, 1120, 930] },
  { gorsel: "tam/48", kirp: [700, 160, 1760, 955] },
];

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "most common"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="CALCIUM STONES: MOST COMMON" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S46;
