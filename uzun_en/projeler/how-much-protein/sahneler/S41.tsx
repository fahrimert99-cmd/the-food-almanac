// Sahne 41 — bölüm kartı: "The honest part" (PART 5).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden 4:3 kırpımlar (yazısız, kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [90, 200, 1250, 1070] },
  { gorsel: "tam/45", kirp: [0, 255, 1100, 1080] },
  { gorsel: "tam/46", kirp: [200, 230, 1500, 1005] },
];

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "careful"), 0.5);
  const [s2, a2] = pop(t, K(1, "not"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1, transformOrigin: "0 50%" }}>
          <Hap metin="BE CAREFUL" renk={RENK.mercan} boyut={28} />
        </div>
        <div style={{ transform: `scale(${s2})`, opacity: a2, transformOrigin: "0 50%" }}>
          <Hap metin="WHAT WE DON'T KNOW" renk={RENK.altin} boyut={28} />
        </div>
      </div>
    </>
  );
};

export default S41;
