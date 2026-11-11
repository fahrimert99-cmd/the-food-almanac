// Sahne 32 — bölüm kartı: sindirim (PART 3)
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: 34 (kâse + kavanoz), 35 (iki kupa + kum saati), 33 (defter, kuş tüyü)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/34", kirp: [130, 150, 1330, 1050] },
  { gorsel: "tam/35", kirp: [260, 0, 1700, 1080] },
  { gorsel: "tam/33", kirp: [250, 0, 1690, 1080] },
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "reputation"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        AN OLD REPUTATION
      </div>
    </>
  );
};

export default S32;
