// Sahne 40 — bölüm kartı: "The erythritol question" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 41: kâse + kaşık + paket, 44: terazi, 45: tüp + kâse (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/41", kirp: [660, 200, 1760, 1025] },
  { gorsel: "tam/44", kirp: [60, 60, 1260, 960] },
  { gorsel: "tam/45", kirp: [130, 110, 1230, 935] },
];

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "left out"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 840, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, flex: "none" }} />
        LEFT OUT OF WHO&apos;S ADVICE
      </div>
    </>
  );
};

export default S40;
