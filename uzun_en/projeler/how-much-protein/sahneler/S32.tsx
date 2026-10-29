// Sahne 32 — bölüm kartı: "Spread it across the day" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden 4:3 kırpımlar (kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/33", kirp: [120, 330, 1120, 1080] },
  { gorsel: "tam/34", kirp: [440, 270, 1520, 1080] },
  { gorsel: "tam/35", kirp: [140, 150, 1100, 870] },
];

// Altyazının altında tek senkron öğe: üç öğün
const OGUNLER = [
  { ifade: "divide", metin: "BREAKFAST" },
  { ifade: "your protein", metin: "LUNCH" },
  { ifade: "across the day", metin: "DINNER" },
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {OGUNLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex",
              alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
              borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.yesil, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S32;
