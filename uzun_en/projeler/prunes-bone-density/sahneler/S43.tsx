// Sahne 43 — bölüm kartı: "Limits and cautions" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm sahnelerinden kusursuz 4:3 kırpımlar (44: masa ve kase; 45: kase, ilaç, bardak; 47: erik kasesi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [560, 300, 1360, 900] },
  { gorsel: "tam/45", kirp: [100, 150, 1300, 1050] },
  { gorsel: "tam/47", kirp: [560, 200, 1400, 830] },
];

const OGELER = [
  { ifade: "covers", metin: "COVERED", renk: RENK.yesil },
  { ifade: "does not", metin: "NOT COVERED", renk: RENK.mercan },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S43;
