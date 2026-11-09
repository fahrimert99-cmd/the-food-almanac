// Sahne 5 — bölüm kartı: THE BASICS
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden 4:3 kırpımlar (6: bacak, 7: yatak odası, 8: yastık + soru işareti)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [120, 260, 1120, 1010] },
  { gorsel: "tam/07", kirp: [60, 200, 1160, 1025] },
  { gorsel: "tam/08", kirp: [380, 60, 1740, 1080] },
];

const ADIMLAR = [
  { ifade: "what a night cramp", metin: "WHAT IT IS", renk: RENK.altin },
  { ifade: "who gets them", metin: "WHO GETS THEM", renk: RENK.yesil },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((a, i) => {
          const [sc, al] = pop(t, K(0, a.ifade), 0.5);
          return (
            <React.Fragment key={a.metin}>
              {i > 0 && <span style={{ opacity: al, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.gri }}>+</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${a.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
                fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: a.renk, flex: "none" }} />
                {a.metin}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default S05;
