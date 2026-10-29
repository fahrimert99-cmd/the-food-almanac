// Sahne 59 — kapanış kartı: abone ol + eğitim amaçlı uyarı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

// Kartın altında ortada tek senkron hap, sırayla değişir
const HAPLAR = [
  { cum: 0, ifade: "subscribe", metin: "SUBSCRIBE", zemin: RENK.mercan, yazi: "#fff", bitis: 6.9 },
  { cum: 1, ifade: "education only", metin: "FOR EDUCATION ONLY", zemin: RENK.kagitAcik, yazi: RENK.lacivert, bitis: 11.6 },
  { cum: 2, ifade: "See you", metin: "SEE YOU IN THE NEXT ONE", zemin: RENK.lacivert, yazi: "#fff", bitis: 1e9 },
];

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} />
      {HAPLAR.map((h) => {
        const [sc, al] = pop(t, K(h.cum, h.ifade), 0.5);
        const a = al * sol(t, h.bitis);
        if (a <= 0) return null;
        return (
          <div key={h.metin} style={{ position: "absolute", left: 960, top: 840, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
            background: h.zemin, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "14px 44px", whiteSpace: "nowrap",
            fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 3, color: h.yazi, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            {h.metin}
          </div>
        );
      })}
    </>
  );
};

export default S59;
