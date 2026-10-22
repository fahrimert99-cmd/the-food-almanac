// Sahne 15 — bölüm kartı: Stanford denemesi.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Stanford"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/16", kirp: [140, 400, 993, 1040] },
        { gorsel: "tam/17", kirp: [420, 200, 1500, 1010] },
        { gorsel: "tam/18", kirp: [260, 250, 1340, 1060] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="STANFORD · 2021" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S15;
