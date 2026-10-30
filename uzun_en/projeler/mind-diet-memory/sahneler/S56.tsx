// Sahne 56 — kapanış kartı: abone ol + yasal not.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 55'ten kusursuz 4:3 kırpımlar (yeşillik, yaban mersini, ceviz kavanozu)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [200, 280, 1000, 880] },
  { gorsel: "tam/55", kirp: [830, 480, 1350, 870] },
  { gorsel: "tam/55", kirp: [1000, 270, 1760, 840] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "education only"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>EDUCATION ONLY</div>
    </>
  );
};

export default S56;
