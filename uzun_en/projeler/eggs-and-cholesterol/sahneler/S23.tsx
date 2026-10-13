// Sahne 23 — bölüm kartı: "Not everyone responds alike" (bireysel farklar).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 24'ten iki kusursuz 4:3 kırpım (kalabalık; sepet ve kişi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/24", kirp: [20, 405, 820, 1005] },
  { gorsel: "tam/24", kirp: [1000, 480, 1800, 1080] },
];

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "same way"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="NOT THE SAME WAY" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S23;
