// Sahne 32 — bölüm kartı: kimler için haplar
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "AREDS2"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/33", kirp: [200, 130, 1200, 880] },
        { gorsel: "tam/37", kirp: [120, 150, 1320, 1050] },
        { gorsel: "tam/36", kirp: [80, 130, 1280, 1030] },
      ]} />
      {/* kartın altına tek senkron hap */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 30px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>AREDS2 EYE VITAMINS</div>
    </>
  );
};

export default S32;
