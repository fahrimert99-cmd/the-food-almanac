// Sahne 30 — bölüm kartı: işlemenin kaldırdığı
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "chocolate versus"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/31", kirp: [100, 200, 740, 680] },
        { gorsel: "tam/31", kirp: [860, 410, 1760, 1085] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 830, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="CHOCOLATE VS CAPSULES" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S30;
