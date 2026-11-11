// Sahne 50 — bölüm kartı: Part 6, beş pratik nokta.
import React from "react";
import { BolumKarti, INTER, RENK, ANTON, SP, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/51", kirp: [360, 100, 1560, 1000] },
        { gorsel: "tam/53", kirp: [100, 100, 1100, 850] },
        { gorsel: "tam/54", kirp: [340, 100, 1640, 1075] },
      ]} />
      {/* beş nokta: "five" ile tek tek belirir */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 18 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + (n - 1) * 0.16, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 64, height: 64, borderRadius: "50%",
              background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 36, border: `3px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S50;
