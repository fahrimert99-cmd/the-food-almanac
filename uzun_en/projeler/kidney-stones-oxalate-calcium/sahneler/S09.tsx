// Sahne 9 — bölüm kartı: beş yıllık çalışma (PART 1).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/10", kirp: [330, 100, 1530, 1000] },
  { gorsel: "tam/11", kirp: [180, 230, 1180, 980] },
  { gorsel: "tam/12", kirp: [120, 30, 1520, 1080] },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "five-year"), 0.5);
  const [s2, a2] = pop(t, K(0, "directly"), 0.5);
  const hap: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
    borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
    boxShadow: "0 8px 22px rgba(48,40,34,0.14)" };
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ ...hap, border: `3px solid ${RENK.altin}`, transform: `scale(${sc})`, opacity: al }}>120 MEN · 5 YEARS</div>
        <div style={{ ...hap, border: `3px solid ${RENK.koyuYesil}`, transform: `scale(${s2})`, opacity: a2 }}>TESTED DIRECTLY</div>
      </div>
    </>
  );
};

export default S09;
