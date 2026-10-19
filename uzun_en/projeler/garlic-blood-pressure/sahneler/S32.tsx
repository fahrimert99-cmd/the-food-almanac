// Sahne 32 — bölüm kartı: "Putting it in proportion" (PART 5).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 33 (masa), 34 (terazi), 35 (hap kutusu) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/33", kirp: [0, 100, 1280, 1060] },
  { gorsel: "tam/34", kirp: [380, 40, 1580, 940] },
  { gorsel: "tam/35", kirp: [100, 60, 1180, 870] },
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "eight or nine"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="EIGHT OR NINE POINTS" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S32;
