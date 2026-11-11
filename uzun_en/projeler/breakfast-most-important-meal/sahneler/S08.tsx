// Sahne 8 — bölüm kartı: Kahvaltı ve kilo.
import React from "react";
import { BolumKarti, RENK, SP, kelimeZamani, pop, INTER } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (09: sahte yazı yok; 01: tabak; 10: tost ve yumurta)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/09", kirp: [180, 440, 980, 1040] },
  { gorsel: "tam/01", kirp: [130, 330, 1000, 982] },
  { gorsel: "tam/10", kirp: [370, 480, 1130, 1050] },
];

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "weight."), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        WEIGHT FIRST
      </div>
    </>
  );
};

export default S08;
