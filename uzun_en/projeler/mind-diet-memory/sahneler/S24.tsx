// Sahne 24 — bölüm kartı: "The randomized trial" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (25 zar + tabaklar, 27 tepsiler, 29 bloklar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/25", kirp: [60, 250, 1160, 1075] },
  { gorsel: "tam/27", kirp: [40, 100, 1340, 1075] },
  { gorsel: "tam/29", kirp: [200, 230, 1280, 1040] },
];

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "trial") + 0.2, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.yesil, flex: "none" }} />
        RANDOMIZED TRIAL
      </div>
    </>
  );
};

export default S24;
