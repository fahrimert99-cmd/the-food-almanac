// Sahne 29 — bölüm kartı: "How much, which oats?" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/30", kirp: [0, 180, 1200, 1080] },
  { gorsel: "tam/32", kirp: [160, 30, 1560, 1080] },
  { gorsel: "tam/35", kirp: [0, 150, 1100, 975] },
];

// Altyazı altındaki tek senkron öğe: iki soru
const SORULAR = [
  { ifade: "three grams", metin: "3 GRAMS?", renk: RENK.altin },
  { ifade: "type of oat", metin: "WHICH OAT?", renk: RENK.yesil },
];

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {SORULAR.map((o, i) => {
          const [sc, al] = pop(t, K(i, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S29;
