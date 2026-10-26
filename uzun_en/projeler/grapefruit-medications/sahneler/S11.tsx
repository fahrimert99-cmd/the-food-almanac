// Sahne 11 — bölüm kartı: "The first evidence" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/15", kirp: [20, 540, 740, 1080] },
  { gorsel: "tam/12", kirp: [330, 300, 1330, 1050] },
  { gorsel: "tam/14", kirp: [0, 330, 860, 975] },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "David"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="DAVID BAILEY" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S11;
