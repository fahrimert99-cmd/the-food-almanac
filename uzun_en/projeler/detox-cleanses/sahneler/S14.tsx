// Sahne 14 — bölüm kartı: Do detox diets work?
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Klein"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/16", kirp: [200, 280, 950, 842] },
        { gorsel: "tam/15", kirp: [130, 100, 1130, 850] },
        { gorsel: "tam/17", kirp: [120, 60, 1200, 870] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="KLEIN & KIAT" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S14;
