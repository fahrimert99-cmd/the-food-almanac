// Sahne 59 — özet bölüm kartı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/60", kirp: [380, 100, 1380, 850] },
  { gorsel: "tam/61", kirp: [0, 140, 1000, 890] },
  { gorsel: "tam/61", kirp: [1000, 250, 1900, 925] },
];

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap"), 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 4, whiteSpace: "nowrap" }}>RECAP</div>
    </>
  );
};

export default S59;
