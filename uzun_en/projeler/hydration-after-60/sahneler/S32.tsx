// Sahne 32 — bölüm kartı: "When to drink less" (PART 5). Bu bölümün görselleri yok: ortalı kart.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "condition"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 820, display: "flex", justifyContent: "center" }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
          background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px 10px 18px",
          fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, flex: "none" }} />
          CHANGES FLUID HANDLING
        </div>
      </div>
    </>
  );
};

export default S32;
