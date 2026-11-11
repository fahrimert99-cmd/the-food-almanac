// Sahne 29 — bölüm kartı: "The honest part" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kalp kartı, Japon çay tepsisi, iki masa (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/30", kirp: [100, 130, 1100, 880] },
  { gorsel: "tam/31", kirp: [50, 230, 1100, 1017] },
  { gorsel: "tam/32", kirp: [40, 110, 1240, 1010] },
];

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "heart"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, flex: "none" }} />
        FEWER HEART ATTACKS?
      </div>
    </>
  );
};

export default S29;
