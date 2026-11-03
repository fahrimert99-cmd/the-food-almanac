// Sahne 5 — bölüm kartı: EPA ve DHA.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [80, 100, 1240, 970] },
  { gorsel: "tam/07", kirp: [140, 200, 940, 800] },
  { gorsel: "tam/08", kirp: [60, 300, 1100, 1080] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 18 }}>
        {[{ i: "EPA", m: "EPA" }, { i: "DHA", m: "DHA" }].map((o, k) => {
          const [sc, al] = pop(t, K(0, o.i), 0.5);
          return (
            <div key={o.m} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              background: RENK.kagitAcik, border: `3px solid ${k ? RENK.altin : RENK.yesil}`, borderRadius: 999, padding: "10px 28px 10px 18px",
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: k ? RENK.altin : RENK.yesil }} />
              {o.m}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default S05;
