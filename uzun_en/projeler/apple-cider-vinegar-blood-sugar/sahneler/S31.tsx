// Sahne 31 — bölüm kartı: "Why the evidence is thin" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 27 (bardak + kâse), 30 (şişe + büyüteç), 29 (mide + bardak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/27", kirp: [200, 150, 1400, 1050] },
  { gorsel: "tam/30", kirp: [300, 20, 1700, 1070] },
  { gorsel: "tam/29", kirp: [120, 90, 1120, 840] },
];

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "thinner"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        THINNER THAN THE HEADLINES
      </div>
    </>
  );
};

export default S31;
