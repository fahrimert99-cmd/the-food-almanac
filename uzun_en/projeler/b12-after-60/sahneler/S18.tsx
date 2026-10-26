// Sahne 18 — BÖLÜM 3 kartı: ilaç dolabı. Kusursuz 4:3 kırpımlar; altyazı altında tek senkron öğe.
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "lower b12"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/19", kirp: [100, 180, 1100, 930] },
        { gorsel: "tam/20", kirp: [540, 180, 1340, 780] },
        { gorsel: "tam/22", kirp: [0, 140, 1000, 890] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 780, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="LINKED WITH LOWER B12" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S18;
