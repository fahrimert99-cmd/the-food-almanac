// Sahne 42 — bölüm kartı: "Who should be careful" (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 43 (yumurta tabağı), 44 (soru işareti + yumurta), 48 (koltuk ve yumurta kasesi); imza ve yazı dışarıda
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/43", kirp: [800, 330, 1800, 1080] },
  { gorsel: "tam/48", kirp: [60, 360, 900, 990] },
  { gorsel: "tam/44", kirp: [1000, 330, 1840, 960] },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "matters most"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="WHERE THE QUESTION MATTERS MOST" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S42;
