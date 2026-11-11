// Sahne 61 — kapanış kartı: abone ol çağrısı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar (57: buhar sepeti, 58: tabak, 60: tencere ve salata)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [120, 230, 1020, 905] },
  { gorsel: "tam/58", kirp: [380, 300, 1280, 975] },
  { gorsel: "tam/60", kirp: [600, 230, 1500, 905] },
];

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.mercan, color: "#fff", borderRadius: 999, padding: "12px 36px", fontFamily: INTER, fontWeight: 800,
        fontSize: 32, letterSpacing: 3, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>SUBSCRIBE</div>
    </>
  );
};

export default S61;
