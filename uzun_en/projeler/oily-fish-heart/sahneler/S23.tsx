// Sahne 23 — bölüm kartı: "The prescription exception" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/24", kirp: [60, 150, 1060, 900] },
  { gorsel: "tam/22", kirp: [50, 150, 950, 825] },
  { gorsel: "tam/21", kirp: [1000, 480, 1800, 1080] },
];

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "prescription"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        ONE MEDICINE · LOWER HEART EVENTS
      </div>
    </>
  );
};

export default S23;
