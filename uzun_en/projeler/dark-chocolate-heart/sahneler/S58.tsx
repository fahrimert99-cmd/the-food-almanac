// Sahne 58 — kapanış kartı: abone ol + yasal not.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (57: tabak + fincan + kalp; 56: raf)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [120, 100, 1320, 1000] },
  { gorsel: "tam/57", kirp: [200, 105, 1500, 1080] },
];

const HAPLAR = [
  { ifade: "subscribe", metin: "SUBSCRIBE", renk: RENK.mercan, k: 0 },
  { ifade: "education", metin: "EDUCATION ONLY", renk: RENK.altin, k: 1 },
];

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {HAPLAR.map((o) => {
          const [sc, al] = pop(t, K(o.k, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S58;
