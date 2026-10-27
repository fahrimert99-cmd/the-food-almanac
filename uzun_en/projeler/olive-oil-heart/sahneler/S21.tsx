// Sahne 21 — bölüm kartı: miktarlar (İspanya ve ABD)
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 22: kaşıklar ve salata; 23: tabak, kaşık, ekmek; 20: Akdeniz sofrası
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/22", kirp: [40, 100, 1240, 1000] },
  { gorsel: "tam/23", kirp: [400, 90, 1600, 990] },
  { gorsel: "tam/20", kirp: [200, 0, 1640, 1080] },
];

const ULKELER = [
  { ifade: "Spain", metin: "SPAIN", renk: RENK.mercan },
  { ifade: "United", metin: "UNITED STATES", renk: RENK.lacivert },
];

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "between"), 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 18 }}>
        {ULKELER.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.gri }}>VS</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
                fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep,
                boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
                {o.metin}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default S21;
