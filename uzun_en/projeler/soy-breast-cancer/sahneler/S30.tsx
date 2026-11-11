// Sahne 30 — bölüm kartı: "Food versus pills" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/31", kirp: [100, 150, 1100, 900] },
  { gorsel: "tam/32", kirp: [120, 130, 1000, 790] },
  { gorsel: "tam/33", kirp: [250, 150, 1250, 900] },
];

// Altyazının altındaki boşlukta tek senkron öğe: iki seçenek
const SECENEKLER = [
  { ifade: "soy foods", metin: "SOY FOODS", renk: RENK.yesil },
  { ifade: "pills", metin: "PILLS & POWDERS", renk: RENK.altin },
];

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(0, "versus") + 0.05, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {SECENEKLER.map((o, i) => {
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

export default S30;
