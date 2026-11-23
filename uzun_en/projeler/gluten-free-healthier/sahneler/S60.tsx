// Sahne 60 — kapanış kartı
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/59", kirp: [100, 200, 1273, 1080] },
  { gorsel: "tam/57", kirp: [250, 100, 1450, 1000] },
  { gorsel: "tam/58", kirp: [800, 150, 1800, 900] },
];

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 32px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3 }}>
        <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.altin }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S60;
