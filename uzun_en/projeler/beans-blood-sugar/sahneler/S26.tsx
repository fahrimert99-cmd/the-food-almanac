// Sahne 26 — bölüm kartı: ikinci öğün etkisi (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (27: mercimek kasesi; 28: tabak ve kase, saat yüzü dışarıda; 29: kepçe ve kum saati)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/27", kirp: [140, 150, 1100, 870] },
  { gorsel: "tam/28", kirp: [180, 360, 1140, 1080] },
  { gorsel: "tam/29", kirp: [560, 60, 1760, 960] },
];

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "started"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="STARTED WITH LENTILS" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S26;
