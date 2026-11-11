// Sahne 12 — bölüm kartı: "Fish oil pills, tested" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: 13 (şişe rafı), 14 (kavanoz), 16 (terazi) — kusur yok
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/13", kirp: [100, 260, 1000, 935] },
  { gorsel: "tam/14", kirp: [60, 185, 1060, 935] },
  { gorsel: "tam/16", kirp: [330, 60, 1590, 1005] },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "large trials"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        LARGE TRIALS
      </div>
    </>
  );
};

export default S12;
