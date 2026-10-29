// Sahne 23 — bölüm kartı: PART 3, protein + egzersiz denemeleri
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPro = K(0, "more protein");
  const a = eout(ilerle(t, tPro, 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/24", kirp: [800, 150, 1740, 855] },
        { gorsel: "tam/27", kirp: [460, 40, 1560, 865] },
        { gorsel: "tam/28", kirp: [0, 30, 1040, 810] },
      ]} />
      {/* eşzamanlı küçük öğe: deneme */}
      <div style={{ position: "absolute", left: 140, top: 790, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
        <Hap metin="MORE PROTEIN · A TRIAL" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S23;
