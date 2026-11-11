// Sahne 51 — bölüm kartı: dört pratik fikir.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [0, 180, 1000, 930] },
  { gorsel: "tam/55", kirp: [0, 190, 1000, 940] },
  { gorsel: "tam/53", kirp: [60, 200, 1000, 905] },
];

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, b + (n - 1) * 0.16, 0.45);
          return (
            <div key={n} style={{ width: 76, height: 76, borderRadius: "50%", background: RENK.lacivert, color: "#fff", opacity: al,
              transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 44,
              border: `4px solid ${RENK.altin}` }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S51;
