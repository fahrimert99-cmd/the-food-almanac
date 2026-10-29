// Sahne 17 — bölüm kartı: WAHA denemesi.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "WAHA,"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/18", kirp: [380, 240, 1500, 1080] },
        { gorsel: "tam/19", kirp: [0, 420, 880, 1080] },
        { gorsel: "tam/20", kirp: [300, 150, 1500, 1050] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="RANDOMIZED TRIAL" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};
export default S17;
