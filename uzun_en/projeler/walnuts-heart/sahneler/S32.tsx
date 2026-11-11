// Sahne 32 — bölüm kartı: "Walnuts and the aging brain" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümden 4:3 kırpımlar (kusursuz alanlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/33", kirp: [330, 280, 1370, 1060] },
  { gorsel: "tam/34", kirp: [80, 40, 1160, 850] },
  { gorsel: "tam/38", kirp: [380, 150, 1580, 1050] },
];

// Altyazı altındaki tek senkron öğe: "WAHA" denince
const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(2, "WAHA"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        WAHA TRIAL
      </div>
    </>
  );
};

export default S32;
