// Sahne 33 — BÖLÜM 4 kartı: suyu mu hap mı?
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "orange juice");
  const a = eout(ilerle(t, b, 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/34", kirp: [100, 100, 1140, 880] },
        { gorsel: "tam/35", kirp: [300, 120, 1500, 1020] },
        { gorsel: "tam/36", kirp: [50, 80, 1100, 867] },
      ]} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 140, top: 770, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
          <Hap metin="JUICE OR PILL?" renk={RENK.altin} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S33;
