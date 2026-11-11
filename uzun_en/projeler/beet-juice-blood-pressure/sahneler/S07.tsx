// Sahne 7 — bölüm kartı: Inside your body.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "your mouth"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/05", kirp: [80, 60, 980, 735] },
        { gorsel: "tam/08", kirp: [0, 100, 960, 820] },
        { gorsel: "tam/04", kirp: [300, 180, 1500, 1080] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert,
        whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />
        YOUR MOUTH IS PART OF IT
      </div>
    </>
  );
};

export default S07;
