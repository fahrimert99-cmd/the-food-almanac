// Sahne 23 — BÖLÜM 3 kartı: istisnalar (bebek maması, listeria).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "infant formula"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/22", kirp: [440, 20, 1440, 770] },
        { gorsel: "tam/24", kirp: [100, 40, 1100, 790] },
      ]} />
      {/* kartın altına tek küçük senkron öge */}
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="FIRST: INFANT FORMULA" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S23;
