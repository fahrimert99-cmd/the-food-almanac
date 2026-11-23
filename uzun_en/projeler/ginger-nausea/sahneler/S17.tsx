// Sahne 17 — bölüm kartı: kemoterapi sırasında (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [100, 200, 1100, 950] },
  { gorsel: "tam/19", kirp: [60, 150, 1000, 855] },
  { gorsel: "tam/21", kirp: [40, 60, 1240, 960] },
];

// Altyazı altında tek senkron öğe: reçeteli ilaç + zencefil?
const OGELER = [
  { ifade: "prescription medicines", metin: "PRESCRIPTION MEDICINES", renk: RENK.lacivert },
  { ifade: "ginger", metin: "GINGER?", renk: RENK.altin, k: 1 },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "ginger") - 0.2, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o, i) => {
          const [sc, al] = pop(t, o.k ? K(1, o.ifade) : K(0, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.gri }}>+</span>
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

export default S17;
