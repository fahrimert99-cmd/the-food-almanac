// Sahne 43 — bölüm kartı: turunçgil rehberi (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm sahnelerinden kusursuz 4:3 kırpımlar (44, 45, 47: imza ve bozuk yazı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [50, 290, 950, 965] },
  { gorsel: "tam/45", kirp: [420, 60, 1720, 1035] },
  { gorsel: "tam/47", kirp: [250, 60, 1450, 960] },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "not all alike"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        NOT ALL ALIKE
      </div>
    </>
  );
};

export default S43;
