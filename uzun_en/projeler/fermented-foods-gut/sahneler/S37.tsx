// Sahne 37 — bölüm kartı: şeker tuzağı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "lot of"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/38", kirp: [200, 100, 1000, 700] },
        { gorsel: "tam/40", kirp: [20, 100, 1020, 850] },
        { gorsel: "tam/41", kirp: [250, 260, 1250, 1010] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 820, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        background: RENK.mercan, color: "#fff", borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 3 }}>A LOT OF SUGAR</div>
    </>
  );
};

export default S37;
