// Sahne 44 — bölüm kartı: ilaçlar ve kahvaltı (PART 5).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm sahnelerinden kusursuz 4:3 kırpımlar (48: yalnızca üç şişe, yazılı yan yatan şişe dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [600, 300, 1600, 1050] },
  { gorsel: "tam/46", kirp: [400, 250, 1400, 1000] },
  { gorsel: "tam/48", kirp: [160, 330, 960, 930] },
];

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "pills"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="PILLS IN THE MORNING" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S44;
