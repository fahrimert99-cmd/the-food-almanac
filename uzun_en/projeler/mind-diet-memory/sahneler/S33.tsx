// Sahne 33 — bölüm kartı: "Why both groups improved" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 34 (bloklar+kalem, saat dışarıda), 35 (şerit metre+somon), 36 (masa)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/34", kirp: [140, 420, 840, 945] },
  { gorsel: "tam/35", kirp: [60, 150, 1260, 1050] },
  { gorsel: "tam/36", kirp: [450, 170, 1650, 1070] },
];

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "both"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.yesil }} />
        BOTH GROUPS IMPROVED
      </div>
    </>
  );
};

export default S33;
