// Sahne 46 — Bölüm kartı: "If you decide to try it". Altta "beş madde" için beş küçük numara.
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/47", kirp: [640, 60, 1480, 690] },
        { gorsel: "tam/48", kirp: [100, 100, 1100, 850] },
        { gorsel: "tam/49", kirp: [60, 100, 1000, 805] },
      ]} />
      {[1, 2, 3, 4, 5].map((n) => {
        const [sc, al] = pop(t, tBes + (n - 1) * 0.16, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + (n - 1) * 82, top: 790, width: 62, height: 62, borderRadius: "50%",
            background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};

export default S46;
