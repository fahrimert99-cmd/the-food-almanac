// Sahne 60 — kapanış kartı: abone ol + eğitim amaçlıdır uyarısı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { bas: K(0, "subscribe"), metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(1, "isn't medical"), metin: "NOT MEDICAL ADVICE", renk: RENK.altin },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 830, display: "flex", justifyContent: "center", gap: 24 }}>
        {ogeler.map((o) => {
          const [sc, al] = pop(t, o.bas, 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S60;
