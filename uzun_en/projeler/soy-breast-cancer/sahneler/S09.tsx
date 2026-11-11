// Sahne 9 — bölüm kartı: "The rodent experiments" (PART 1).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (kafes+fare, terazi, miso kasesi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/10", kirp: [60, 150, 1060, 900] },
  { gorsel: "tam/11", kirp: [260, 30, 1660, 1080] },
  { gorsel: "tam/14", kirp: [0, 180, 1200, 1080] },
];

// Altyazı altında tek senkron öğe: laboratuvar → hayvanlar
const ADIMLAR = [
  { c: 1, ifade: "laboratories", metin: "LABORATORY", renk: RENK.altin },
  { c: 1, ifade: "animals", metin: "ANIMALS", renk: RENK.mercan },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "animals") - 0.1, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(o.c, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.gri }}>→</span>
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

export default S09;
