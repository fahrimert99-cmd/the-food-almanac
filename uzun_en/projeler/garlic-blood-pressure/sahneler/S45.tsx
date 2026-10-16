// Sahne 45 — bölüm kartı: HOW TO USE IT
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/46", kirp: [1000, 40, 1840, 670] },
        { gorsel: "tam/47", kirp: [900, 0, 1700, 600] },
        { gorsel: "tam/48", kirp: [500, 180, 1400, 855] },
      ]} />
      {[1, 2, 3, 4, 5].map((n, i) => {
        const [sc, al] = pop(t, bas + i * 0.14, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 84, top: 800, width: 62, height: 62, borderRadius: "50%",
            background: n % 2 ? RENK.lacivert : RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 30, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};

export default S45;
