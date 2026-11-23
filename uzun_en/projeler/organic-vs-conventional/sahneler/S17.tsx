// Sahne 17 — bölüm kartı: kalıntılar.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [0, 90, 960, 810] },
  { gorsel: "tam/19", kirp: [200, 440, 1000, 1040] },
  { gorsel: "tam/20", kirp: [100, 60, 1300, 960] },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "pesticide") , 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="PESTICIDE RESIDUE" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S17;
