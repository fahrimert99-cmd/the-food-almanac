// Sahne 17 — bölüm kartı: "What the trials show" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar (18: imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [200, 120, 1040, 750] },
  { gorsel: "tam/21", kirp: [40, 300, 1040, 1050] },
  { gorsel: "tam/24", kirp: [100, 100, 1000, 775] },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "on its own"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altı tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="POTASSIUM ON ITS OWN" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S17;
