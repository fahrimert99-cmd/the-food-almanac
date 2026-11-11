// Sahne 18 — bölüm kartı: AREDS
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/20", kirp: [80, 180, 1280, 1080] },
  { gorsel: "tam/23", kirp: [0, 150, 1200, 1050] },
  { gorsel: "tam/22", kirp: [380, 60, 1580, 960] },
];

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Age-Related"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 770, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        AGE-RELATED EYE DISEASE STUDY
      </div>
    </>
  );
};

export default S18;
