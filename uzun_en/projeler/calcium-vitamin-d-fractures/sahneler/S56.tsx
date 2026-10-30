// Sahne 56 — bölüm kartı: özet (RECAP).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [380, 80, 1580, 980] },
  { gorsel: "tam/58", kirp: [240, 0, 1680, 1080] },
  { gorsel: "tam/59", kirp: [100, 110, 760, 605] },
];

// Altyazının altında tek senkron öğe: kart başlığındaki iki fikir
const HAPLAR = [
  { gecik: 0, metin: "FOOD FIRST", renk: RENK.yesil },
  { gecik: 0.4, metin: "PILLS FOR GAPS", renk: RENK.altin },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(0, "recap");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", alignItems: "center", gap: 18 }}>
        {HAPLAR.map((o) => {
          const [sc, al] = pop(t, b + o.gecik, 0.45);
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

export default S56;
