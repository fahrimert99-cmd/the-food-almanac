// Sahne 27 — bölüm kartı: istisna.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "half"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/28", kirp: [60, 280, 1020, 1000] },
        { gorsel: "tam/29", kirp: [150, 300, 1110, 1020] },
        { gorsel: "tam/30", kirp: [400, 100, 1600, 1000] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="COLDS DROPPED ABOUT HALF" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S27;
