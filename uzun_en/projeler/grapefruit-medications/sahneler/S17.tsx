// Sahne 17 — bölüm kartı: "Who it affects" (ilaç listesi).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 18 (statin şişesi), 23 (kalp), 24 (şişe sırası); kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [400, 140, 1360, 860] },
  { gorsel: "tam/23", kirp: [100, 40, 1100, 790] },
  { gorsel: "tam/24", kirp: [260, 120, 1500, 1050] },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "longer than"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        THE LIST IS LONGER
      </div>
    </>
  );
};

export default S17;
