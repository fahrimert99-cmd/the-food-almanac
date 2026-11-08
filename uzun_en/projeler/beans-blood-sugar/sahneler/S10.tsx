// Sahne 10 — BÖLÜM 2 kartı: Toronto denemesi.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Toronto"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/11", kirp: [280, 280, 1280, 1030] },
        { gorsel: "tam/13", kirp: [200, 120, 1400, 1020] },
        { gorsel: "tam/12", kirp: [620, 430, 1220, 880] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="UNIVERSITY OF TORONTO · 2012" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S10;
