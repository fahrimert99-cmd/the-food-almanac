// Sahne 61 — kapanış kartı: Evidence over hype.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bu videonun sahnelerinden 4:3 kırpımlar (kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [600, 180, 1800, 1080] },
  { gorsel: "tam/59", kirp: [420, 150, 1620, 1050] },
  { gorsel: "tam/60", kirp: [0, 180, 1000, 930] },
];

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="SUBSCRIBE" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S61;
