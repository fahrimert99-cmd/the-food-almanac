// Sahne 16 — bölüm kartı: "How much food is tossed" (PART 2 / THE COST).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: kavanozlar (18), telefon (19), çöp kovası (20); kusur yok
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [50, 300, 950, 975] },
  { gorsel: "tam/19", kirp: [0, 200, 1000, 950] },
  { gorsel: "tam/20", kirp: [60, 90, 1060, 840] },
];

// Altyazı altındaki tek senkron öğe: iki anket
const ANKETLER = [
  { metin: "2016 · 1,029 ADULTS", renk: RENK.altin, gec: 0 },
  { metin: "2025 · 2,069 ADULTS", renk: RENK.yesil, gec: 0.4 },
];

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tb = K(1, "surveys");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 20 }}>
        {ANKETLER.map((a) => {
          const [sc, al] = pop(t, tb + a.gec, 0.5);
          return (
            <div key={a.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${a.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: a.renk, flex: "none" }} />
              {a.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S16;
