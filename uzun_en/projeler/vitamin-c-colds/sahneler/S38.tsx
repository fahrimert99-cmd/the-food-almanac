// Sahne 38 — BÖLÜM 5 kartı: yüksek doz ve böbrek taşı uyarısı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, K(1, "not automatically"), 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/40", kirp: [100, 130, 1160, 925] },
        { gorsel: "tam/39", kirp: [120, 160, 1080, 880] },
        { gorsel: "tam/41", kirp: [320, 100, 1560, 1030] },
      ]} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 140, top: 790, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
          <Hap metin="NOT AUTOMATICALLY SAFER" renk={RENK.mercan} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S38;
