// Sahne 53 — bölüm kartı: beş pratik adım.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [160, 130, 1360, 1030] },
  { gorsel: "tam/56", kirp: [300, 130, 1500, 1030] },
  { gorsel: "tam/58", kirp: [250, 130, 1250, 880] },
];

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "five"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        5 PRACTICAL MOVES
      </div>
    </>
  );
};
export default S53;
