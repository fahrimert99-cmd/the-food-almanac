// Sahne 53 — BÖLÜM 6 kartı: beş pratik adım.
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [100, 60, 1200, 885] },
  { gorsel: "tam/56", kirp: [250, 80, 1250, 830] },
  { gorsel: "tam/57", kirp: [60, 150, 1160, 975] },
];

const S53: React.FC<SP> = (p) => {
  const K = kelimeZamani(p.s);
  const t5 = K(1, "five");
  return (
    <>
      <BolumKarti {...p} gorseller={GORSELLER} />
      {/* beş adım için beş nokta, "five practical steps" ile sırayla */}
      {[0, 1, 2, 3, 4].map((i) => {
        const [sc, al] = pop(p.t, t5 + i * 0.16, 0.45);
        return (
          <div key={i} style={{ position: "absolute", left: 140 + i * 84, top: 820, width: 62, height: 62, borderRadius: "50%",
            background: i % 2 ? RENK.koyuYesil : RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{i + 1}</div>
        );
      })}
    </>
  );
};
export default S53;
