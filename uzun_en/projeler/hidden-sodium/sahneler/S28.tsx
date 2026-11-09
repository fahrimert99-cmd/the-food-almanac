// Sahne 28 — BÖLÜM 4 kartı: etiket okuma.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/29", kirp: [0, 170, 1200, 1070] },
  { gorsel: "tam/30", kirp: [330, 40, 1330, 790] },
  { gorsel: "tam/32", kirp: [260, 30, 1660, 1080] },
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "decode"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="DECODE THE LABEL" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};
export default S28;
