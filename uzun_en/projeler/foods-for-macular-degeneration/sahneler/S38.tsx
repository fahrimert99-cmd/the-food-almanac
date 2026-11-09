// Sahne 38 — bölüm kartı: yeşillikler ve yumurta
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { m: "SPINACH", b: K(1, "spinach,") },
    { m: "KALE", b: K(1, "kale") },
    { m: "EGGS", b: K(1, "eggs") },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/39", kirp: [0, 150, 1200, 1050] },
        { gorsel: "tam/35", kirp: [160, 60, 1360, 960] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 16 }}>
        {ogeler.map((o) => {
          const [sc, al] = pop(t, o.b, 0.5);
          return (
            <div key={o.m} style={{ transform: `scale(${sc})`, opacity: al, background: RENK.lacivert, color: "#fff", borderRadius: 999,
              padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, whiteSpace: "nowrap" }}>{o.m}</div>
          );
        })}
      </div>
    </>
  );
};

export default S38;
