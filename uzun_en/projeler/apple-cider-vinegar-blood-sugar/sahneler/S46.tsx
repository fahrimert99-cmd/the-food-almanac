// Sahne 46 — bölüm kartı: "Four careful steps"; altında dört numaralı nokta "four" kelimesiyle gelir.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFour = K(0, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/47", kirp: [0, 330, 880, 990] },
        { gorsel: "tam/48", kirp: [40, 100, 1140, 925] },
        { gorsel: "tam/49", kirp: [60, 110, 960, 785] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 24 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, tFour + (n - 1) * 0.18, 0.5);
          return (
            <div key={n} style={{ width: 84, height: 84, borderRadius: "50%", background: n % 2 ? RENK.koyuYesil : RENK.altin, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 48,
              transform: `scale(${sc})`, opacity: al, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S46;
