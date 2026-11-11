// Sahne 48 — bölüm kartı: dürüst kısım.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/49", kirp: [200, 330, 1200, 1080] },
  { gorsel: "tam/50", kirp: [0, 330, 1000, 1080] },
  { gorsel: "tam/52", kirp: [130, 230, 1130, 980] },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "What"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        WHAT WE DON'T KNOW YET
      </div>
    </>
  );
};
export default S48;
