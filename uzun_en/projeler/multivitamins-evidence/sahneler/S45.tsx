// Sahne 45 — bölüm kartı: "How to use it" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (46 tabak, 41 pencere, 43 muayene masası)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/46", kirp: [300, 80, 1500, 980] },
  { gorsel: "tam/41", kirp: [60, 250, 860, 850] },
  { gorsel: "tam/43", kirp: [560, 330, 1560, 1080] },
];

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* beş nokta: beş pratik madde */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 16 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, b + (n - 1) * 0.12, 0.4);
          return (
            <div key={n} style={{ width: 56, height: 56, borderRadius: "50%", background: RENK.lacivert, color: "#fff", opacity: al,
              transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28,
              border: `3px solid ${RENK.altin}` }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S45;
