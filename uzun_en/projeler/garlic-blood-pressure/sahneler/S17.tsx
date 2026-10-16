// Sahne 17 — BÖLÜM 3 kartı: iki çalışma.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "two"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/18", kirp: [0, 0, 1440, 1080] },
        { gorsel: "tam/22", kirp: [260, 40, 1640, 1075] },
        { gorsel: "tam/20", kirp: [900, 230, 1900, 980] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 830, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="2010 + 2013" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S17;
