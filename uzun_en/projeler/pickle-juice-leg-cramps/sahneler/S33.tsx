// Sahne 33 — bölüm kartı: magnezyum (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/35", kirp: [130, 80, 1330, 980] },
  { gorsel: "tam/36", kirp: [100, 150, 1300, 1050] },
  { gorsel: "tam/37", kirp: [350, 40, 1550, 940] },
];

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "first:"), 0.5);
  const [s2, a2] = pop(t, K(0, "magnesium"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
          <Hap metin="TRIED FIRST" renk={RENK.altin} boyut={28} />
        </div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
          <Hap metin="MAGNESIUM" renk={RENK.koyuYesil} boyut={28} />
        </div>
      </div>
    </>
  );
};

export default S33;
