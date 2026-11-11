// Sahne 59 — bölüm kartı: "A spice, not a treatment" (RECAP).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 58 ölçüm cihazı ve defter, 53 tarçın çubukları, 55 fincan
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [280, 180, 1280, 930] },
  { gorsel: "tam/53", kirp: [940, 330, 1840, 1005] },
  { gorsel: "tam/55", kirp: [380, 200, 1380, 950] },
];

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap"), 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`,
        borderRadius: 999, padding: "10px 28px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <IkonYol ad="onay" boyut={34} renk={RENK.koyuYesil} />
        KEY POINTS
      </div>
    </>
  );
};

export default S59;
