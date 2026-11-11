// Sahne 53 — bölüm kartı: "How to use this" (PART 7). Altta altı adım noktası.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm sahnelerinden kusursuz 4:3 kırpımlar (süt ürünleri, ıspanak salatası, hap kutusu)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [440, 170, 1560, 1010] },
  { gorsel: "tam/55", kirp: [60, 80, 1180, 920] },
  { gorsel: "tam/56", kirp: [140, 230, 1100, 950] },
];

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSix = K(1, "six");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 18 }}>
        {[1, 2, 3, 4, 5, 6].map((n) => {
          const [sc, al] = pop(t, tSix + 0.07 * n, 0.4);
          return (
            <div key={n} style={{ width: 64, height: 64, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 32,
              transform: `scale(${sc})`, opacity: al, border: `3px solid ${RENK.kagitAcik}` }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S53;
