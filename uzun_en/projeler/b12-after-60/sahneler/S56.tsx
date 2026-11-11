// Sahne 56 — kapanış kartı: "Evidence over hype".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (02: bardak, gözlük, tablet tepsisi; 54: şişe ve kase; 50: dolap)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/02", kirp: [200, 130, 1500, 1105] },
  { gorsel: "tam/54", kirp: [340, 140, 1460, 980] },
  { gorsel: "tam/50", kirp: [60, 100, 1000, 805] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* "subscribe" denince tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S56;
