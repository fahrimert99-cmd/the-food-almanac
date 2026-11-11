// Sahne 49 — bölüm kartı: "How to use it" (PART 6). Altta "five" deyince beş numaralı nokta.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [440, 170, 1440, 920] },
  { gorsel: "tam/55", kirp: [440, 260, 1440, 1010] },
  { gorsel: "tam/51", kirp: [40, 430, 840, 1030] },
];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 18 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + 0.12 * (n - 1), 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 70, height: 70, borderRadius: "50%",
              background: n % 2 ? RENK.koyuYesil : RENK.altin, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 40, boxShadow: "0 8px 20px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S49;
