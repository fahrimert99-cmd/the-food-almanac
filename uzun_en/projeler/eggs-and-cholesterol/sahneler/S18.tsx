// Sahne 18 — bölüm kartı: "What eggs do to LDL" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (20: sağ alttaki imza dışarıda; 22: alt yazı kalıntısı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/19", kirp: [40, 270, 840, 870] },
  { gorsel: "tam/20", kirp: [150, 380, 1050, 1055] },
  { gorsel: "tam/22", kirp: [1000, 420, 1800, 1020] },
];

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "blood cholesterol"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="BLOOD CHOLESTEROL" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S18;
