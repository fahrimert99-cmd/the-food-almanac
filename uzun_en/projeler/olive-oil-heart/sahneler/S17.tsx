// Sahne 17 — bölüm kartı: "Retracted, then republished"
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 16: yalnızca peg tepsisi; 18: dosya ve şişe; 19: masa (sağ üst boşluk dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/16", kirp: [160, 130, 1360, 1030] },
  { gorsel: "tam/18", kirp: [40, 170, 1040, 920] },
  { gorsel: "tam/19", kirp: [0, 0, 1280, 960] },
];

// altyazı altında tek senkron öğe: tarih çizgisi
const ADIMLAR = [
  { ifade: "2013,", metin: "2013", renk: RENK.yesil },
  { ifade: "withdrawn,", metin: "WITHDRAWN", renk: RENK.mercan },
  { ifade: "2018.", metin: "2018", renk: RENK.altin },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ opacity: al, fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.altin }}>→</span>}
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

export default S17;
