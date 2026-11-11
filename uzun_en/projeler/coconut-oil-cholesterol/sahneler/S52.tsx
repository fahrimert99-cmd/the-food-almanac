// Sahne 52 — özet bölüm kartı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/53", kirp: [1000, 330, 1800, 930] },
        { gorsel: "tam/54", kirp: [300, 240, 1300, 990] },
        { gorsel: "tam/55", kirp: [100, 180, 1100, 930] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="LDL · HDL · MCT" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S52;
