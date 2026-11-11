// Sahne 59 — kapanış kartı: ortalı başlık, "subscribe" anında kanal hapı.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 810, display: "flex", justifyContent: "center" }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
          background: RENK.lacivert, borderRadius: 999, padding: "12px 32px 12px 22px", color: "#fff", fontFamily: INTER,
          fontWeight: 800, fontSize: 28, letterSpacing: 2, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.altin }} />
          SUBSCRIBE · {MARKA.filigran}
        </div>
      </div>
    </>
  );
};

export default S59;
