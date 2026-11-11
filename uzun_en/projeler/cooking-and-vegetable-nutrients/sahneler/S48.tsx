// Sahne 48 — bölüm kartı: beş mutfak alışkanlığı
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/46", kirp: [60, 120, 1000, 825] },
        { gorsel: "tam/45", kirp: [200, 200, 1100, 875] },
        { gorsel: "tam/43", kirp: [420, 230, 1500, 1040] },
      ]} />
      {[1, 2, 3, 4, 5].map((n, i) => {
        const [sc, al] = pop(t, b + i * 0.14, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 96, top: 780, width: 72, height: 72, borderRadius: "50%",
            background: i % 2 ? RENK.koyuYesil : RENK.yesil, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};
export default S48;
