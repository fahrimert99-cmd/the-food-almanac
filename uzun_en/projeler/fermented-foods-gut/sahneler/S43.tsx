// Sahne 43 — bölüm kartı: "The honest part" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden 4:3 kırpımlar (kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [380, 200, 1480, 1025] },
  { gorsel: "tam/46", kirp: [60, 100, 1160, 925] },
  { gorsel: "tam/45", kirp: [60, 100, 1060, 850] },
];

const ROZETLER = [
  { ifade: "actually know", metin: "WHAT WE KNOW", renk: RENK.yesil },
  { ifade: "what don't", metin: "WHAT WE DON'T", renk: RENK.mercan },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ROZETLER.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12,
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

export default S43;
