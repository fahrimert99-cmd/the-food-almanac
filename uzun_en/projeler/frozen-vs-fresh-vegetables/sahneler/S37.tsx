// Sahne 37 — BÖLÜM 5 kartı: pişirme. Altta taze/dondurulmuş hapları (söylendikçe).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 38: tencere, 39: mikrodalga (kontrol paneli dışarıda), 40: buhar sepeti (kronometre dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/38", kirp: [40, 200, 1000, 920] },
  { gorsel: "tam/39", kirp: [100, 200, 1000, 875] },
  { gorsel: "tam/40", kirp: [440, 200, 1400, 920] },
];

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { ad: "STARTS FRESH", bas: K(1, "fresh"), renk: RENK.yesil },
    { ad: "STARTS FROZEN", bas: K(1, "frozen"), renk: RENK.lacivert },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 18 }}>
        {ogeler.map((o) => {
          const [sc, al] = pop(t, o.bas, 0.5);
          return <div key={o.ad} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}><Hap metin={o.ad} renk={o.renk} boyut={30} /></div>;
        })}
      </div>
    </>
  );
};

export default S37;
