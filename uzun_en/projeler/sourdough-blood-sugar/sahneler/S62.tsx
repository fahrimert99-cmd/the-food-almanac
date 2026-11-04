// Sahne 62 — kapanış kartı: abone ol, eğitim amaçlı.
import React from "react";
import { BolumKarti, RENK, SP, Hap, kelimeZamani, pop } from "../kutuphane";

// 4:3 kusursuz kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [900, 360, 1800, 1035] },
  { gorsel: "tam/59", kirp: [180, 170, 1380, 1070] },
  { gorsel: "tam/61", kirp: [560, 100, 1760, 1000] },
];

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "education only"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="FOR EDUCATION ONLY" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S62;
