// Sahne 35 — bölüm kartı: "The honest part" (PART 4)
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 36: imza (sol alt) dışarıda; 37: sadece yemekler
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/36", kirp: [340, 60, 1540, 960] },
  { gorsel: "tam/37", kirp: [150, 180, 1350, 1080] },
];

const OGELER = [
  { ifade: "bananas", metin: "BANANAS + BLOOD PRESSURE?", renk: RENK.altin },
  { ifade: "honest", metin: "THE HONEST ANSWER", renk: RENK.koyuYesil },
];

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(o.ifade === "bananas" ? 0 : 1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
              background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 24px",
              fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{o.metin}</div>
          );
        })}
      </div>
    </>
  );
};

export default S35;
