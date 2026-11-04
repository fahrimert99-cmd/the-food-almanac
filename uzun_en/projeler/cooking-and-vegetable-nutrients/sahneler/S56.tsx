// Sahne 56 — bölüm kartı: özet ("Cook smart, not less").
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bu bölümün sahnelerinden kusursuz 4:3 kırpımlar (buhar, kaynatma, zeytinyağı).
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/49", kirp: [60, 100, 1260, 1000] },
  { gorsel: "tam/50", kirp: [300, 30, 1700, 1080] },
  { gorsel: "tam/51", kirp: [200, 20, 1600, 1070] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap") + 0.2, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />
        FIVE KITCHEN HABITS
      </div>
    </>
  );
};

export default S56;
