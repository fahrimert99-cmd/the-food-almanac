// Sahne 52 — bölüm kartı: HOW TO USE IT (PART 6). Altyazı altında 4 numaralı nokta.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [200, 250, 1200, 1000] },
  { gorsel: "tam/54", kirp: [140, 130, 1140, 880] },
  { gorsel: "tam/55", kirp: [0, 120, 980, 855] },
];

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, b + 0.12 * (n - 1) + 0.1, 0.45);
          return (
            <div key={n} style={{ width: 70, height: 70, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 42, transform: `scale(${sc})`, opacity: al,
              border: `4px solid ${RENK.altin}` }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S52;
