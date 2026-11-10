// Sahne 49 — bölüm kartı: "How to use it" (PART 5).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/51", kirp: [140, 90, 1000, 735] },
  { gorsel: "tam/52", kirp: [150, 250, 750, 700] },
  { gorsel: "tam/53", kirp: [100, 200, 1100, 950] },
];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t0 = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altında 1–5 alışkanlık noktaları */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, t0 + 0.12 * n, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 74, height: 74, borderRadius: "50%",
              background: RENK.koyuYesil, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 40, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S49;
