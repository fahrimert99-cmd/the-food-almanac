// Sahne 20 — bölüm kartı: "The kitchen test" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (21: kaseler ve tereyağı; 22: şişeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/21", kirp: [40, 0, 1480, 1080] },
  { gorsel: "tam/22", kirp: [0, 0, 1440, 1080] },
];

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(0, "butter");
  const [sc, al] = pop(t, tB, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazının altına küçük, senkron bir hap */}
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", gap: 14, alignItems: "center", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "8px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>
        BUTTER · OLIVE OIL
      </div>
    </>
  );
};

export default S20;
