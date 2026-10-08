// Sahne 55 — kapanış kartı: abone ol + eğitim amaçlı uyarısı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // altyazı altı değil, kartın altında: tek senkron hap, sırayla değişir
  const hapler = [
    { bas: K(0, "subscribe"), bitis: K(1, "This video") - 0.1, metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(1, "education only"), bitis: K(2, "See you") - 0.1, metin: "EDUCATION ONLY", renk: RENK.altin },
    { bas: K(2, "See you"), bitis: 1e9, metin: "SEE YOU IN THE NEXT ONE", renk: RENK.yesil },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 800, display: "flex", justifyContent: "center" }}>
        {hapler.map((h, i) => {
          const [sc, al] = pop(t, h.bas, 0.5);
          const a = al * sol(t, h.bitis);
          if (a <= 0) return null;
          return (
            <div key={i} style={{ position: "absolute", transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center", gap: 14,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${h.renk}`, borderRadius: 999,
              padding: "12px 32px 12px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: h.renk, flex: "none" }} />
              {h.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S55;
