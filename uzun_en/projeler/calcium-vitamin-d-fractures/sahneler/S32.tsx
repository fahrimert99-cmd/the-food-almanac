// Sahne 32 — BÖLÜM 4 kartı: "Food versus pills".
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/34", kirp: [160, 100, 1260, 925] },
  { gorsel: "tam/35", kirp: [100, 80, 1060, 800] },
  { gorsel: "tam/36", kirp: [800, 300, 1820, 1065] },
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "before"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="FOOD BEFORE PILLS?" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S32;
