// Sahne 19 — bölüm kartı: "The kidney side" (PART 3).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
// (20: yalnızca kavanozlar, saat dışarıda; 21: tüpler; 22: böbrekler).
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/20", kirp: [140, 300, 1000, 945] },
  { gorsel: "tam/22", kirp: [300, 100, 1500, 1000] },
  { gorsel: "tam/21", kirp: [100, 150, 1180, 960] },
];

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "hold on"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="HOLDING ON TO WATER" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S19;
