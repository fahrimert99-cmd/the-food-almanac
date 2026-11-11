// Sahne 52 — özet bölüm kartı (RECAP).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: bardak + elma, kitap yığını + şişe, mide
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [200, 250, 1000, 850] },
  { gorsel: "tam/54", kirp: [700, 150, 1700, 900] },
  { gorsel: "tam/55", kirp: [270, 150, 1070, 750] },
];

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap") - 0.1, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.murekkep,
        whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        RECAP
      </div>
    </>
  );
};

export default S52;
