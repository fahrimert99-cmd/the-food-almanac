// Sahne 28 — bölüm kartı: "The salt substitute trial" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 29 (kavanozlar, muz, tuz) ve 30 (kâse + muz) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/29", kirp: [0, 230, 1000, 980] },
  { gorsel: "tam/30", kirp: [60, 480, 860, 1080] },
];

// Altyazının altında tek senkron öğe: muz değil, tuz
const OGELER = [
  { ifade: "bananas", metin: "NOT BANANAS", renk: RENK.mercan },
  { ifade: "salt", metin: "SALT", renk: RENK.yesil },
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = [K(0, "bananas"), K(1, "salt")];
  const [sv, av] = pop(t, bas[1], 0.4);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o, i) => {
          const [sc, al] = pop(t, bas[i], 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.gri }}>→</span>}
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

export default S28;
