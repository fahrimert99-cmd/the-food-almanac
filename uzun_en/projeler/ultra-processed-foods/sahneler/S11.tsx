// Sahne 11 — bölüm kartı: "The NIH trial" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (12 yatak odası, 15 büfe kaseleri, 16 patates kızartması)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/12", kirp: [80, 330, 1080, 1080] },
  { gorsel: "tam/15", kirp: [40, 330, 880, 960] },
  { gorsel: "tam/16", kirp: [940, 300, 1900, 1020] },
];

const ROZETLER = [
  { ifade: "2019", metin: "2019", renk: RENK.altin },
  { ifade: "controlled", metin: "CONTROLLED TRIAL", renk: RENK.yesil },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ROZETLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
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

export default S11;
