// Sahne 12 — bölüm kartı: "The experiment" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
// (16: yalnızca tüp rafı; 15: saat, ok ve sol alttaki imza dışarıda).
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/14", kirp: [200, 330, 1200, 1080] },
  { gorsel: "tam/16", kirp: [60, 480, 760, 1005] },
  { gorsel: "tam/15", kirp: [1090, 610, 1690, 1060] },
];

// Altyazının altındaki boşlukta tek senkron öğe: karşılaştırılacak iki sıra
const SIRALAR = [
  { ifade: "test the idea", metin: "CARBS FIRST", renk: RENK.mercan },
  { ifade: "directly", metin: "VEG + PROTEIN FIRST", renk: RENK.yesil },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(0, "test the idea") + 0.25, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {SIRALAR.map((o, i) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 26,
                  letterSpacing: 2, color: RENK.gri }}>VS</span>
              )}
              <div style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
                whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
                padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
                color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
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

export default S12;
