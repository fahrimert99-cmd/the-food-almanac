// Sahne 56 — kapanış kartı: abone ol + eğitim amaçlı uyarı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (fincan, terazi, masa)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [540, 330, 1380, 960] },
  { gorsel: "tam/54", kirp: [250, 330, 850, 780] },
  { gorsel: "tam/55", kirp: [330, 180, 1130, 780] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const oge = [
    { bas: K(0, "subscribe"), metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(1, "education"), metin: "FOR EDUCATION ONLY", renk: RENK.altin },
    { bas: K(2, "See"), metin: "SEE YOU NEXT TIME", renk: RENK.yesil },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, height: 70 }}>
        {oge.map((o, i) => {
          const sonraki = oge[i + 1]?.bas ?? 1e9;
          const [sc, al] = pop(t, o.bas, 0.5);
          const a = al * (t < sonraki - 0.05 ? 1 : 0);
          return (
            <div key={o.metin} style={{ position: "absolute", left: 0, top: 0, transform: `scale(${sc})`, transformOrigin: "0 50%",
              opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
              border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
              fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
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
