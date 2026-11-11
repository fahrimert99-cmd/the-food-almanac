// Sahne 51 — BÖLÜM 6 kartı: dört pratik adım.
import React from "react";
import { BolumKarti, RENK, SP, ANTON, pop, kelimeZamani } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [1000, 300, 1800, 900] },
  { gorsel: "tam/55", kirp: [500, 200, 1500, 950] },
  { gorsel: "tam/56", kirp: [0, 250, 800, 850] },
];

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* dört adım noktası */}
      {[1, 2, 3, 4].map((n, i) => {
        const [sc, al] = pop(t, bas + i * 0.18, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 84, top: 790, width: 64, height: 64, borderRadius: "50%",
            background: i === 0 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};

export default S51;
