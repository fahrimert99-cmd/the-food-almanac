// Sahne 19 — bölüm kartı: "Raw and single-flower honey" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün görsellerinden kusursuz 4:3 kırpımlar (20: kavanoz + çiçek, 21: kavanoz + petek, 23: kavanoz + tabak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/20", kirp: [780, 230, 1780, 980] },
  { gorsel: "tam/21", kirp: [60, 420, 780, 960] },
  { gorsel: "tam/23", kirp: [180, 150, 1320, 1005] },
];

const OGELER = [
  { ifade: "raw honey", metin: "RAW HONEY", renk: RENK.altin },
  { ifade: "single kind", metin: "SINGLE-FLOWER", renk: RENK.koyuYesil },
];

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S19;
