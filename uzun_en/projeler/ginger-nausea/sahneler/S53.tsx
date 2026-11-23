// Sahne 53 — bölüm kartı: "How to use it" (PART 6), beş adım.
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 54: şişe + zencefil + bardak; 55: dilimler + demlik; 56: yalnızca bardak (kâğıt ve yazı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [80, 130, 1080, 880] },
  { gorsel: "tam/55", kirp: [80, 170, 1280, 1070] },
  { gorsel: "tam/56", kirp: [160, 100, 960, 700] },
];

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.22, 0.45);
          return (
            <div key={n} style={{ width: 76, height: 76, borderRadius: "50%", background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 42,
              transform: `scale(${sc})`, opacity: al, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.gri, marginLeft: 10,
          opacity: pop(t, bas + 1.2, 0.5)[1] }}>STEPS</span>
      </div>
    </>
  );
};

export default S53;
