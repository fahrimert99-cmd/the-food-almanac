// Sahne 23 — BÖLÜM 3 kartı: dürüst kısım. Kartın altına iki küçük hap ("neyi gösterir / göstermez").
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a1 = eout(ilerle(t, K(1, "numbers"), 0.4));
  const a2 = eout(ilerle(t, K(1, "don't"), 0.4));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/24", kirp: [60, 200, 1060, 950] },
        { gorsel: "tam/25", kirp: [350, 100, 1550, 1000] },
        { gorsel: "tam/28", kirp: [250, 100, 1550, 1075] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 24 }}>
        <div style={{ opacity: a1, transform: `translateY(${(1 - a1) * 12}px)` }}><Hap metin="WHAT THEY MEAN" renk={RENK.yesil} boyut={28} /></div>
        <div style={{ opacity: a2, transform: `translateY(${(1 - a2) * 12}px)` }}><Hap metin="WHAT THEY DON'T SHOW" renk={RENK.mercan} boyut={28} /></div>
      </div>
    </>
  );
};

export default S23;
