// Sahne 55 — kapanış kartı: abone ol + yasal not.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [0, 380, 800, 980] },
  { gorsel: "tam/53", kirp: [560, 80, 1360, 680] },
];

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.lacivert, borderRadius: 999, padding: "12px 34px 12px 22px", color: "#fff",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3 }}>
        <span style={{ width: 0, height: 0, borderTop: "11px solid transparent", borderBottom: "11px solid transparent", borderLeft: `18px solid ${RENK.altin}` }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S55;
