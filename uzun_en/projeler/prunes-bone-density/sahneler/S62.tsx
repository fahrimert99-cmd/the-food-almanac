// Sahne 62 — kapanış kartı: üç görsel, altında tek senkron "abone ol" hapı
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar (58 kase, 60 kase, 61 kase + pencere)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [280, 130, 1280, 880] },
  { gorsel: "tam/61", kirp: [250, 230, 1250, 980] },
  { gorsel: "tam/60", kirp: [150, 170, 1150, 920] },
];

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 30px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, flex: "none" }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S62;
