// Sahne 15 — bölüm kartı: "Cut the greens, then add them" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar (sandalye+masa, tepsi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/16", kirp: [650, 300, 1650, 1050] },
  { gorsel: "tam/17", kirp: [100, 280, 1100, 1030] },
];

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "change"), 0.5);
  const [s2, a2] = pop(t, K(0, "how much"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 18 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}><Hap metin="CUT" renk={RENK.mercan} boyut={30} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}><Hap metin="ADD" renk={RENK.yesil} boyut={30} /></div>
      </div>
    </>
  );
};

export default S15;
