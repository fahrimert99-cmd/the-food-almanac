// Sahne 41 — bölüm kartı: "The rice bacterium" (PART 6).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 42 (pirinç kasesi, hücre) ve 44 (tabak); sahte yazı yok
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/42", kirp: [90, 170, 990, 845] },
  { gorsel: "tam/42", kirp: [900, 300, 1800, 975] },
  { gorsel: "tam/44", kirp: [300, 180, 1500, 1080] },
];

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "surprises"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="SURPRISES MANY PEOPLE" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S41;
