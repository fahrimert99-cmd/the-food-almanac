// Sahne 5 — bölüm kartı: dört ifade, senkron hap sırası.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 6 (mama), 7 (saat + kâse), 8 (ekmek) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [100, 60, 1300, 960] },
  { gorsel: "tam/07", kirp: [100, 40, 1300, 940] },
  { gorsel: "tam/08", kirp: [440, 40, 1640, 940] },
];

const IFADELER = [
  { ifade: "best", metin: "BEST IF USED BY", renk: RENK.yesil },
  { ifade: "sell", metin: "SELL BY", renk: RENK.altin },
  { ifade: "use by,", metin: "USE BY", renk: RENK.mercan },
  { ifade: "freeze", metin: "FREEZE BY", renk: RENK.lacivert },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 780, width: 860, display: "flex", flexWrap: "wrap", gap: 14 }}>
        {IFADELER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "8px 24px 8px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S05;
