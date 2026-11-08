// Sahne 38 — bölüm kartı: yaş ve besin zehirlenmesi (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (40: çift ve tavuk, 43: lavabo, 42: sürahi ve bardak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [300, 100, 1500, 1000] },
  { gorsel: "tam/43", kirp: [700, 60, 1600, 735] },
  { gorsel: "tam/42", kirp: [100, 200, 1100, 950] },
];

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "adults"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        ADULTS PAST SIXTY
      </div>
    </>
  );
};

export default S38;
