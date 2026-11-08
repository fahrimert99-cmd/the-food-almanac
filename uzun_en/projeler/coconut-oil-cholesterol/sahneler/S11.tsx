// Sahne 11 — bölüm kartı: on altı denemelik derleme (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm görselleri: kusursuz 4:3 kırpımlar (12: kitaplar + büyüteç, 13: raf, 15: kavanoz + hindistan cevizi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/12", kirp: [40, 380, 900, 1025] },
  { gorsel: "tam/13", kirp: [30, 130, 1060, 902] },
  { gorsel: "tam/15", kirp: [60, 200, 1047, 940] },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "head to head"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="HEAD TO HEAD" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S11;
