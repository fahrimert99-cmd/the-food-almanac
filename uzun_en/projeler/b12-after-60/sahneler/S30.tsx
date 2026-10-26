// Sahne 30 — bölüm kartı: "A different kind of B12" (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (31: kase + süt; 33: kase, şişe, hap; 32: süt kavanozları)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/31", kirp: [20, 340, 1000, 1075] },
  { gorsel: "tam/33", kirp: [900, 330, 1900, 1080] },
  { gorsel: "tam/32", kirp: [1100, 480, 1900, 1080] },
];

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "payoff"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="PAYOFF OF THE EARLIER CLUE" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S30;
