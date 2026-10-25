// Sahne 46 — bölüm kartı: beş pratik nokta.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/48", kirp: [760, 120, 1880, 960] },
        { gorsel: "tam/49", kirp: [900, 330, 1860, 1050] },
      ]} />
      {/* beş nokta: 'five' söylenince sırayla sayılır */}
      {[1, 2, 3, 4, 5].map((n) => {
        const [sc, al] = pop(t, K(1, "five") + 0.12 * n, 0.4);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + (n - 1) * 80, top: 780, width: 60, height: 60, borderRadius: "50%",
            background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 34, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};

export default S46;
