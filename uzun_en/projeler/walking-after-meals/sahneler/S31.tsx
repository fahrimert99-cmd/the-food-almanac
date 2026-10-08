// Sahne 31 — bölüm kartı: "When to start" (PART 4)
import React from "react";
import { BolumKarti, Ikon, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 4:3 kırpımlar (32: masa ve sandalye, imzasız; 33: koşu bandı ve pencere; 35: kapı ve ışıklı pencere)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/32", kirp: [20, 290, 900, 950] },
  { gorsel: "tam/33", kirp: [60, 130, 1160, 955] },
  { gorsel: "tam/35", kirp: [700, 80, 1700, 830] },
];

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(1, "not a stopwatch");
  const [sc, al] = pop(t, K(1, "hints") + 0.1, 0.5);
  const [sc2, al2] = pop(t, tNot, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Ikon t={t} bas={K(1, "hints")} ad="saat" x={190} y={810} boyut={72} zemin={RENK.altin} />
      <div style={{ position: "absolute", left: 250, top: 770, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap" }}>
        <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
          borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
          boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>HINTS</div>
        <div style={{ transform: `scale(${sc2})`, transformOrigin: "0% 50%", opacity: al2, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
          borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
          boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>NOT A STOPWATCH</div>
      </div>
    </>
  );
};

export default S31;
