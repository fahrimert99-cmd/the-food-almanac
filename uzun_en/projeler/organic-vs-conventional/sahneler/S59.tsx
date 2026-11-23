// Sahne 59 — kapanış kartı: abone ol + sorumluluk reddi.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [130, 270, 970, 900] },
  { gorsel: "tam/56", kirp: [520, 110, 1440, 800] },
  { gorsel: "tam/58", kirp: [700, 120, 1600, 795] },
];

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="SUBSCRIBE" renk={RENK.mercan} />
      </div>
    </>
  );
};

export default S59;
