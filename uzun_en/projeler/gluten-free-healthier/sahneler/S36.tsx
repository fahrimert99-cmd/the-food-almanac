// Sahne 36 — Bölüm 3 kartı: ürünlerin içinde ne var. Kırpımlar etiketsiz raf bölgeleri.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "inside"), 0.55);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/37", kirp: [60, 30, 780, 570] },
        { gorsel: "tam/38", kirp: [10, 250, 730, 790] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 830, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="LOOK INSIDE THE BOX" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S36;
