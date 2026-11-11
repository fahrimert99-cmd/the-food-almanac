// Sahne 56 — kapanış kartı: abone ol, yalnızca eğitim amaçlı, görüşürüz.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/55", kirp: [60, 60, 760, 585] },
        { gorsel: "tam/55", kirp: [860, 400, 1660, 1000] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>SUBSCRIBE</div>
    </>
  );
};

export default S56;
