// Sahne 57 — kapanış kartı: "Evidence over hype".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (01: sağdaki boş kenar dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/04", kirp: [100, 330, 1000, 1005] },
  { gorsel: "tam/01", kirp: [60, 290, 1060, 1040] },
  { gorsel: "tam/56", kirp: [60, 235, 1160, 1060] },
];

// Altyazı üstünde tek senkron öğe: önce abone ol, sonra eğitim amaçlı notu
const PILLER = [
  { cumle: 0, ifade: "subscribe", son: 7.0, metin: "SUBSCRIBE", renk: RENK.altin },
  { cumle: 1, ifade: "education", son: 99, metin: "FOR EDUCATION ONLY", renk: RENK.koyuYesil },
];

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800 }}>
        {PILLER.map((o) => {
          const bas = K(o.cumle, o.ifade);
          if (t < bas || t > o.son) return null;
          const [sc, al] = pop(t, bas, 0.5);
          return (
            <div key={o.metin} style={{ position: "absolute", left: 0, top: 0, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 28px",
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S57;
