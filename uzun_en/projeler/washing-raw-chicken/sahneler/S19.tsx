// Sahne 19 — bölüm kartı: ev mutfağı çalışması.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/20", kirp: [0, 150, 1100, 975] },
  { gorsel: "tam/23", kirp: [60, 200, 1060, 950] },
  { gorsel: "tam/25", kirp: [70, 130, 1130, 925] },
];

const OGELER = [
  { ifade: "lab", metin: "LAB", renk: RENK.gri },
  { ifade: "test kitchen", metin: "TEST KITCHEN", renk: RENK.yesil },
];

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(0, "step") + 0.1, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o, i) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.altin }}>→</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`,
                borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
                boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{o.metin}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
export default S19;
