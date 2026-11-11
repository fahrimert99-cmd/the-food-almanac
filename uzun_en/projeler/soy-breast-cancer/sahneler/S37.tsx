// Sahne 37 — bölüm kartı: Soy and hot flashes (PART 4)
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: yelpaze+bardak, iki bardak+tofu, masa lambası
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/38", kirp: [130, 330, 1010, 990] },
  { gorsel: "tam/40", kirp: [140, 300, 1100, 1020] },
  { gorsel: "tam/41", kirp: [320, 180, 1520, 1080] },
];

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "hot flashes"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap",
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>HOT FLASHES</div>
    </>
  );
};

export default S37;
