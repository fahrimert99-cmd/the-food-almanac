// Sahne 46 — BÖLÜM 6 kartı: "If you decide to try it". Üç görsel kartı + "five" anında beş nokta.
import React from "react";
import { BolumKarti, RENK, ANTON, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER = [
  { gorsel: "tam/47", kirp: [560, 80, 1280, 620] as [number, number, number, number] },
  { gorsel: "tam/48", kirp: [180, 90, 1140, 810] as [number, number, number, number] },
  { gorsel: "tam/49", kirp: [60, 100, 1020, 820] as [number, number, number, number] },
];

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* beş numaralı nokta: "five practical points" */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + (n - 1) * 0.12, 0.45);
          return (
            <div key={n} style={{ width: 78, height: 78, borderRadius: "50%", background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 44, opacity: al,
              transform: `scale(${sc})`, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S46;
