// Sahne 32 — BÖLÜM 5 kartı: "Putting it in proportion".
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "eight"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/33", kirp: [220, 200, 1220, 950] },
        { gorsel: "tam/34", kirp: [280, 60, 1480, 960] },
        { gorsel: "tam/35", kirp: [100, 50, 1300, 950] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 810, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="8–9 POINTS, REALLY?" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};
export default S32;
