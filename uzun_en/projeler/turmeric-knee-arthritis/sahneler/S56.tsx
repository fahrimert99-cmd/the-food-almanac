// Sahne 56 — Kapanış kartı: abone ol + eğitim amaçlıdır
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/51", kirp: [200, 100, 1400, 1000] },
        { gorsel: "tam/54", kirp: [380, 60, 1540, 930] },
        { gorsel: "tam/53", kirp: [500, 230, 1600, 1055] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="SUBSCRIBE" renk={RENK.mercan} boyut={36} />
      </div>
    </>
  );
};

export default S56;
