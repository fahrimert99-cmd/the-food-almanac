// Sahne 8 — bölüm kartı: Stanford 2012 incelemesi.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 4:3 kırpımlar (kusur içermeyen bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/09", kirp: [60, 170, 1060, 920] },
  { gorsel: "tam/10", kirp: [60, 330, 1060, 1080] },
  { gorsel: "tam/11", kirp: [100, 200, 1100, 950] },
];

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "every study"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        EVERY STUDY THEY COULD FIND
      </div>
    </>
  );
};

export default S08;
