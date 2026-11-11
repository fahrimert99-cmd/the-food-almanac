// Sahne 63 — kapanış kartı: abone ol, bilgilendirme notu, veda.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { bas: K(0, "subscribe"), bitis: K(1, "This") - 0.1, metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(1, "education only"), bitis: K(2, "See") - 0.1, metin: "FOR EDUCATION ONLY", renk: RENK.altin },
    { bas: K(2, "See you"), bitis: 1e9, metin: "SEE YOU NEXT TIME", renk: RENK.yesil },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} />
      {ogeler.map((o) => {
        const [sc, al] = pop(t, o.bas, 0.5);
        const a = al * sol(t, o.bitis);
        if (a <= 0) return null;
        return (
          <div key={o.metin} style={{ position: "absolute", left: 0, right: 0, top: 780, display: "flex", justifyContent: "center", opacity: a }}>
            <div style={{ transform: `scale(${sc})`, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
              background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "12px 34px 12px 22px",
              fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: o.renk }} />
              {o.metin}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default S63;
