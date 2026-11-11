// Sahne 10 — bölüm kartı: Cochrane incelemesi
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 11, 12 ve 13'ten kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [60, 60, 1160, 885] },
  { gorsel: "tam/12", kirp: [100, 260, 1100, 1010] },
  { gorsel: "tam/13", kirp: [80, 50, 1080, 800] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "best"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 830, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 30px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>BEST AVAILABLE EVIDENCE</div>
    </>
  );
};
export default S10;
