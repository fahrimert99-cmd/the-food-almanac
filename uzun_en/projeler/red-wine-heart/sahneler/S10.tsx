// Sahne 10 — bölüm kartı: sick quitter problemi
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 11 (masa), 12 (figürler), 13 (terazi) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [0, 330, 1000, 1080] },
  { gorsel: "tam/12", kirp: [0, 330, 1000, 1080] },
  { gorsel: "tam/13", kirp: [300, 150, 1540, 1080] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "doubt"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px 10px 18px", display: "flex",
        alignItems: "center", gap: 12, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
        DOUBTING THE CURVE
      </div>
    </>
  );
};
export default S10;
