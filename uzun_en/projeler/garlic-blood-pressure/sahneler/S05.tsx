// Sahne 5 — açılış kartı: "Garlic and Blood Pressure".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (01: sarımsak, 04: büyüteç, 03: sarımsak ve diş)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/01", kirp: [330, 150, 1130, 750] },
  { gorsel: "tam/04", kirp: [420, 60, 1380, 780] },
  { gorsel: "tam/03", kirp: [330, 40, 1170, 670] },
];

const ADIMLAR = [
  { ifade: "blood pressure", metin: "BLOOD PRESSURE", renk: RENK.mercan },
  { ifade: "measures", metin: "WHAT IT MEASURES", renk: RENK.koyuYesil },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "measures") - 0.2, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.altin }}>→</span>
              )}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
                fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
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

export default S05;
