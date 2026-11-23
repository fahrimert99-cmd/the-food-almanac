// Sahne 24 — BÖLÜM 3 kartı: "Smell is not a test".
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "nose"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/18", kirp: [60, 240, 860, 840] },
        { gorsel: "tam/25", kirp: [150, 150, 950, 750] },
        { gorsel: "tam/23", kirp: [150, 380, 690, 785] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `translate(0, -50%) scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="THE NOSE TEST" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S24;
