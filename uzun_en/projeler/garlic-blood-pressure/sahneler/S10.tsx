// Sahne 10 — bölüm kartı: "The big reviews" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: tam/11 (kavanozlar, sol siyah cilt dışarıda) ve tam/09 (kase)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [440, 60, 1640, 960] },
  { gorsel: "tam/09", kirp: [300, 30, 1500, 930] },
  { gorsel: "tam/11", kirp: [500, 220, 1460, 940] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "pool"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="MANY TRIALS, POOLED" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};
export default S10;
