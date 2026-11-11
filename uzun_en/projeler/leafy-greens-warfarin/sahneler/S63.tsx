// Sahne 63 — kapanış kartı
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/62", kirp: [330, 100, 1230, 775] },
  { gorsel: "tam/61", kirp: [140, 100, 1140, 850] },
  { gorsel: "tam/60", kirp: [480, 160, 1480, 910] },
];

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S63;
