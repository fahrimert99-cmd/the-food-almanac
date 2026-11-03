// Sahne 34 — bölüm kartı: "What fish may add" (PART 4).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden yazısız 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/35", kirp: [180, 120, 1460, 1080] },
  { gorsel: "tam/38", kirp: [120, 250, 1220, 1075] },
  { gorsel: "tam/40", kirp: [560, 330, 1560, 1080] },
];

// Altyazı altında tek senkron öğe: kapsül → balık
const OGELER = [
  { ifade: "capsules", metin: "CAPSULES", renk: RENK.mercan, ikon: "carpi" as const },
  { ifade: "fish keep", metin: "WHOLE FISH", renk: RENK.yesil, ikon: "onay" as const },
];

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: o.renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IkonYol ad={o.ikon} boyut={22} renk="#fff" kalinlik={7} />
              </span>
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S34;
