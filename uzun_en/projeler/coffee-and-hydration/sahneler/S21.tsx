// Sahne 21 — BÖLÜM 4 kartı: indeks sahnesi; üç bölüm görseli + tek senkron hap.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "water"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/22", kirp: [330, 60, 1590, 1005] },
        { gorsel: "tam/23", kirp: [0, 120, 1200, 1020] },
        { gorsel: "tam/25", kirp: [40, 100, 1340, 1075] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        WATER EACH DRINK LEAVES
      </div>
    </>
  );
};

export default S21;
