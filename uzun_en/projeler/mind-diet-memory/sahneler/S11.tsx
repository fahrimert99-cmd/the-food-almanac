// Sahne 11 — bölüm kartı: Rush çalışmaları; altta tek senkron öğe: ne yenir → hafıza sorunu.
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/12", kirp: [820, 330, 1520, 855] },
  { gorsel: "tam/13", kirp: [380, 570, 1020, 1050] },
  { gorsel: "tam/15", kirp: [640, 150, 1300, 645] },
];

const ADIMLAR = [
  { ifade: "what people eat", metin: "WHAT PEOPLE EAT", renk: RENK.yesil },
  { ifade: "memory problems", metin: "MEMORY PROBLEMS?", renk: RENK.altin },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "then") + 0.1, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ transform: `scale(${sv})`, opacity: av, display: "flex" }}><IkonYol ad="ok" boyut={40} renk={RENK.gri} /></span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
                fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
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

export default S11;
