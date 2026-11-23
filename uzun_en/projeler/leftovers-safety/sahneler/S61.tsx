// Sahne 61 — kapanış kartı: abone ol, bilgilendirme notu.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  const [s2, a2] = pop(t, K(2, "See"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} />
      <div style={{ position: "absolute", left: 0, width: 1920, top: 800, display: "flex", justifyContent: "center", gap: 20 }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, background: RENK.mercan, color: "#fff", borderRadius: 999, padding: "12px 34px",
          fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, whiteSpace: "nowrap" }}>SUBSCRIBE · {MARKA.ad.toUpperCase()}</div>
        <div style={{ transform: `scale(${s2})`, opacity: a2, background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 999,
          padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.murekkep, whiteSpace: "nowrap" }}>SEE YOU NEXT TIME</div>
      </div>
    </>
  );
};

export default S61;
