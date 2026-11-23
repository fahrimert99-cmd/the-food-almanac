// Sahne 63 — kapanış kartı: abone ol + yalnızca eğitim amaçlı.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/60", kirp: [60, 330, 960, 1005] },
  { gorsel: "tam/61", kirp: [300, 120, 1500, 1020] },
  { gorsel: "tam/58", kirp: [120, 230, 1120, 980] },
];

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex",
        alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.lacivert, borderRadius: 999, padding: "12px 30px 12px 20px",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: "#fff", boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />
        SUBSCRIBE · {MARKA.filigran}
      </div>
    </>
  );
};

export default S63;
