// Sahne 28 — bölüm kartı: "Juice, capsules and sugar" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 29 (kesikli çizgi kusuru dışarıda), 30 (tepsi), 31 (iki bardak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/29", kirp: [40, 150, 920, 810] },
  { gorsel: "tam/30", kirp: [120, 130, 1160, 910] },
  { gorsel: "tam/31", kirp: [40, 150, 1000, 870] },
];

// Altyazı altında tek senkron öğe: iki seçenek
const SECENEKLER = [
  { ifade: "Juice", metin: "JUICE", renk: RENK.mercan },
  { ifade: "capsules", metin: "CAPSULES", renk: RENK.altin },
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "or") + 0.0, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {SECENEKLER.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.gri }}>OR</span>
              )}
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

export default S28;
