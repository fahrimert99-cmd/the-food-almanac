// Sahne 5 — bölüm kartı: "Thirst and the kidneys" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 06 (kap + bardak), 07 (beyin + bardak), 08 (böbrekler) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [130, 120, 1180, 908] },
  { gorsel: "tam/07", kirp: [100, 170, 1100, 920] },
  { gorsel: "tam/08", kirp: [400, 50, 1740, 1055] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "water in balance"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="WATER IN BALANCE" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S05;
