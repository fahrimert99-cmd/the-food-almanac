// Sahne 57 — kapanış kartı: abone ol, bilgilendirme notu, veda.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [440, 360, 1440, 1110 - 30] },
];

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  const [sc2, al2] = pop(t, K(1, "education"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
          whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
          padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
          boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
          SUBSCRIBE · {MARKA.filigran}
        </div>
        <div style={{ transform: `scale(${sc2})`, transformOrigin: "0% 50%", opacity: al2, whiteSpace: "nowrap", fontFamily: INTER,
          fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.gri }}>EDUCATION ONLY</div>
      </div>
    </>
  );
};

export default S57;
