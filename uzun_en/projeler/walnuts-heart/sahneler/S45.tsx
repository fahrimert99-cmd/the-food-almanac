// Sahne 45 — bölüm kartı: "How to use walnuts" (PART 6).
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (46'daki sahte yazılı kaplar kullanılmadı)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/47", kirp: [330, 250, 1430, 1075] },
  { gorsel: "tam/42", kirp: [380, 240, 1480, 1065] },
  { gorsel: "tam/48", kirp: [60, 130, 1160, 955] },
];

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "five"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: ANTON, fontSize: 30 }}>5</span>
        PRACTICAL POINTS
      </div>
    </>
  );
};

export default S45;
