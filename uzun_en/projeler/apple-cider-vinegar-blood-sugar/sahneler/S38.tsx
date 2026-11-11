// Sahne 38 — BÖLÜM 6 kartı: güvenlik. Bölüm kartı + asitlik hapı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "acidity"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/37", kirp: [300, 100, 1100, 700] },
        { gorsel: "tam/39", kirp: [800, 480, 1600, 1080] },
        { gorsel: "tam/35", kirp: [60, 120, 860, 720] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 810, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="VINEGAR'S ACIDITY" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S38;
