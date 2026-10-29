// Sahne 11 — Bölüm kartı: "The official number" (PART 1). Görseller 12–14. sahnelerden.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: terazi (sağdaki boş kâğıt dışarıda), iki terazi + tabak, laboratuvar masası
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/12", kirp: [70, 150, 1110, 930] },
  { gorsel: "tam/13", kirp: [180, 20, 1580, 1070] },
  { gorsel: "tam/14", kirp: [160, 100, 1360, 1000] },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "number"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="THE RDA" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S11;
