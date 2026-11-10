// Sahne 61 — kapanış kartı: abone ol + eğitim amaçlı uyarı.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/59", kirp: [560, 330, 1560, 1080] },
  { gorsel: "tam/60", kirp: [560, 250, 1360, 850] },
];

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 30px 12px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>
        <span style={{ background: RENK.altin, borderRadius: 999, padding: "4px 14px", fontSize: 22 }}>SUBSCRIBE</span>
        {MARKA.filigran}
      </div>
    </>
  );
};

export default S61;
