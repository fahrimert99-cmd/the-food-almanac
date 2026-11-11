// Sahne 28 — bölüm kartı: Why it may work (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (tereyağı+ceviz, terazi+ceviz kasesi, ceviz)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/29", kirp: [100, 250, 1100, 1000] },
  { gorsel: "tam/30", kirp: [1150, 420, 1830, 930] },
  { gorsel: "tam/31", kirp: [300, 230, 1100, 830] },
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "replace"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />WHAT THEY REPLACE
      </div>
    </>
  );
};

export default S28;
