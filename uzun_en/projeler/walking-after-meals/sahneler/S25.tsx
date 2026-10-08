// Sahne 25 — BÖLÜM 3 kartı: Why walking works.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "muscles"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/26", kirp: [60, 150, 980, 840] },
        { gorsel: "tam/27", kirp: [140, 100, 1100, 820] },
        { gorsel: "tam/28", kirp: [60, 200, 1100, 980] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="THE ANSWER: YOUR MUSCLES" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S25;
