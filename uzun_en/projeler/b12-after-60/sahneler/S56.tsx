// Sahne 56 — kapanış kartı: "Evidence over hype".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar (52: sol alttaki sahte harfler dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [600, 380, 1500, 1055] },
  { gorsel: "tam/52", kirp: [150, 340, 1030, 1000] },
  { gorsel: "tam/55", kirp: [780, 300, 1620, 930] },
];

// Altyazının altında senkron iki hap
const HAPLAR = [
  { cumle: 0, ifade: "subscribe", metin: "SUBSCRIBE", renk: RENK.koyuYesil },
  { cumle: 0, ifade: "calmly", metin: "CALM & HONEST", renk: RENK.altin },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 830, display: "flex", alignItems: "center", gap: 18 }}>
        {HAPLAR.map((o) => {
          const [sc, al] = pop(t, K(o.cumle, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S56;
