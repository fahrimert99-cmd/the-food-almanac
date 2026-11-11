// Sahne 31 — bölüm kartı: "The honest part" (PART 5).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (yazı ve kusur yok)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/32", kirp: [100, 230, 1100, 980] },
  { gorsel: "tam/35", kirp: [60, 150, 1160, 975] },
  { gorsel: "tam/34", kirp: [410, 160, 1510, 985] },
];

const OGELER = [
  { ifade: "can beans", metin: "WHAT BEANS CAN DO", renk: RENK.yesil, ikon: "onay" as const },
  { ifade: "can't", metin: "WHAT THEY CAN'T", renk: RENK.mercan, ikon: "carpi" as const },
];

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.45);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: o.renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IkonYol ad={o.ikon} boyut={22} renk="#fff" />
              </span>
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S31;
