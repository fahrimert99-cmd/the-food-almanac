// Sahne 17 — bölüm kartı: "What about real tea?" (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (18, 19, 20)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [100, 200, 1230, 1048] },
  { gorsel: "tam/19", kirp: [700, 100, 1860, 970] },
  { gorsel: "tam/20", kirp: [150, 80, 1050, 755] },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "cup of tea"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="CHAMOMILE TEA" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S17;
