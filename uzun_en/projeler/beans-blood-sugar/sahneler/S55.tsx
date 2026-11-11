// Sahne 55 — kapanış kartı: abone ol + yasal not.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { bas: K(0, "subscribe"), bitis: K(2, "See") - 0.1, metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(2, "See"), bitis: 1e9, metin: "SEE YOU IN THE NEXT ONE", renk: RENK.koyuYesil },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} />
      {ogeler.map((o) => {
        const [sc, al] = pop(t, o.bas, 0.5);
        const a = al * sol(t, o.bitis);
        if (a <= 0) return null;
        return (
          <div key={o.metin} style={{ position: "absolute", left: 960, top: 840, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
            display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
            padding: "12px 32px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.lacivert,
            whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk }} />
            {o.metin}
          </div>
        );
      })}
    </>
  );
};

export default S55;
