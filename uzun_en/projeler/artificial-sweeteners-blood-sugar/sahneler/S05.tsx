// Sahne 5 — bölüm kartı: "Sweet without sugar" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [100, 270, 1180, 1080] },
  { gorsel: "tam/07", kirp: [620, 100, 1700, 910] },
  { gorsel: "tam/08", kirp: [100, 100, 1180, 910] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "map"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="A QUICK MAP" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S05;
