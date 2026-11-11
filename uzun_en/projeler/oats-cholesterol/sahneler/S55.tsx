// Sahne 55 — kapanış kartı: abone ol hapı "subscribe" kelimesinde gelir.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe") - 0.1, 0.55);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/54", kirp: [280, 60, 1640, 1080] },
        { gorsel: "tam/51", kirp: [470, 150, 1330, 795] },
        { gorsel: "tam/53", kirp: [620, 100, 1460, 730] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "14px 34px 14px 22px", display: "flex", alignItems: "center",
        gap: 16, fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, whiteSpace: "nowrap",
        boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />
        SUBSCRIBE · {MARKA.filigran}
      </div>
    </>
  );
};

export default S55;
