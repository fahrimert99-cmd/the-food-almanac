// Sahne 60 — kapanış kartı: kanal adı, "evidence over hype", abone ol hapı.
import React from "react";
import { BolumKarti, Hap, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.55);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/01", kirp: [80, 90, 1280, 990] },
        { gorsel: "tam/58", kirp: [400, 200, 1520, 1040] },
        { gorsel: "tam/57", kirp: [300, 150, 1500, 1050] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin={`SUBSCRIBE · ${MARKA.filigran}`} renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S60;
