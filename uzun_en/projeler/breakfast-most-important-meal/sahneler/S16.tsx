// Sahne 16 — bölüm kartı: "The second-meal effect" (PART 2).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri (kusursuz 4:3 kırpımlar): 17 mide, 20 öğle tabağı (kadran yazısı dışarıda),
// 19 sol masa (alt yazı kalıntısı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/19", kirp: [100, 230, 800, 755] },
  { gorsel: "tam/17", kirp: [800, 230, 1700, 905] },
  { gorsel: "tam/20", kirp: [80, 250, 1080, 1000] },
];

// Altyazı altında tek senkron öğe: bir öğün -> sonraki öğün
const OGUNLER = [
  { ifade: "one meal", metin: "ONE MEAL", renk: RENK.altin },
  { ifade: "the next", metin: "THE NEXT", renk: RENK.koyuYesil },
];

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sa, aa] = pop(t, K(1, "change") , 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", alignItems: "center", gap: 18 }}>
        {OGUNLER.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sa})`, opacity: aa, display: "flex" }}>
                  <IkonYol ad="ok" boyut={40} renk={RENK.gri} kalinlik={6} />
                </span>
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

export default S16;
