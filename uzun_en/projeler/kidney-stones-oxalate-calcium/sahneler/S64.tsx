// Sahne 64 — kapanış kartı: abone ol, yalnızca eğitim amaçlı, görüşürüz.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/61", kirp: [330, 150, 1530, 1050] },
  { gorsel: "tam/55", kirp: [0, 0, 1440, 1080] },
  { gorsel: "tam/63", kirp: [150, 0, 1590, 1080] },
];

const S64: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = K(0, "subscribe"), b2 = K(1, "education"), b3 = K(2, "See");
  const gorunen = t < b2 - 0.2 ? 0 : t < b3 - 0.2 ? 1 : 2;
  const metin = ["SUBSCRIBE FOR MORE FOOD SCIENCE", "FOR EDUCATION ONLY", "SEE YOU NEXT TIME"][gorunen];
  const bas = [b1, b2, b3][gorunen];
  const [sc, al] = pop(t, bas, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {t >= b1 && (
        <div key={gorunen} style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
          whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik,
          border: `3px solid ${gorunen === 1 ? RENK.lacivert : RENK.altin}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
          fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: gorunen === 1 ? RENK.lacivert : RENK.altin }} />
          {metin}
        </div>
      )}
    </>
  );
};

export default S64;
