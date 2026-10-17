// Sahne 56 — kapanış kartı: abone ol.
import React from "react";
import { BolumKarti, Hap, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: sarımsak + fincan + bardak, sarımsak (manometre dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/51", kirp: [300, 280, 1300, 1030] },
  { gorsel: "tam/53", kirp: [30, 110, 1030, 860] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin={`SUBSCRIBE · ${MARKA.filigran}`} renk={RENK.mercan} boyut={32} />
        </div>
      )}
    </>
  );
};

export default S56;
