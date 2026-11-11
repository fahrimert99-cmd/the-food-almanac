// Sahne 22 — bölüm kartı: "When heat helps" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: 23 (tencere + domates), 24 (terazi), 21 (tahta; hücre kutusu dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/23", kirp: [250, 180, 1450, 1080] },
  { gorsel: "tam/24", kirp: [0, 60, 1200, 960] },
  { gorsel: "tam/21", kirp: [100, 180, 1300, 1080] },
];

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(2, "spinach"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        LATER: SPINACH &amp; YOUR EYES
      </div>
    </>
  );
};

export default S22;
