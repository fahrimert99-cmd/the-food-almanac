// Sahne 38 — bölüm kartı: "The honest part" (PART 6).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (39: terazi, 40: bağ yolu, 41: kaide)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/39", kirp: [60, 60, 860, 660] },
  { gorsel: "tam/40", kirp: [0, 250, 1000, 1000] },
  { gorsel: "tam/41", kirp: [560, 130, 1360, 730] },
];

const PILLER = [
  { ifade: "know,", metin: "WHAT WE KNOW", renk: RENK.yesil },
  { ifade: "don't", metin: "WHAT WE DON'T", renk: RENK.mercan },
];

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", alignItems: "center", gap: 18 }}>
        {PILLER.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
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

export default S38;
