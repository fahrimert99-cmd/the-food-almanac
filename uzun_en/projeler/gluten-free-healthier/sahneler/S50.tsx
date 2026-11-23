// Sahne 50 — bölüm kartı: dört pratik adım.
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/49", kirp: [80, 200, 880, 800] },
  { gorsel: "tam/53", kirp: [420, 150, 1620, 1050] },
  { gorsel: "tam/54", kirp: [0, 90, 1200, 990] },
];

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.28, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 70, height: 70, borderRadius: "50%", background: RENK.lacivert,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 40,
              border: `3px solid ${RENK.altin}`, fontStyle: "normal" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S50;
