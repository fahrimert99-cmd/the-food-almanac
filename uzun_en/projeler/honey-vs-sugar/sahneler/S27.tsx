// Sahne 27 — bölüm kartı: THE HONEST PART
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "shakier"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/28", kirp: [100, 180, 1000, 855] },
        { gorsel: "tam/29", kirp: [160, 240, 960, 840] },
        { gorsel: "tam/30", kirp: [200, 180, 1400, 1080] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="SHAKIER THAN THEY LOOK" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S27;
