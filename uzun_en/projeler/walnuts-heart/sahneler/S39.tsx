// Sahne 39 — bölüm kartı: "The honest part" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümden 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [440, 170, 1640, 1070] },
  { gorsel: "tam/42", kirp: [380, 170, 1580, 1070] },
  { gorsel: "tam/44", kirp: [100, 120, 1300, 1020] },
];

// Altyazı altında iki senkron hap: solid / doesn't
const HAPLAR = [
  { ifade: "solid", metin: "WHAT LOOKS SOLID", renk: RENK.yesil },
  { ifade: "doesn't", metin: "WHAT DOESN'T", renk: RENK.mercan },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {HAPLAR.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.45);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
              alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`,
              borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
              letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S39;
