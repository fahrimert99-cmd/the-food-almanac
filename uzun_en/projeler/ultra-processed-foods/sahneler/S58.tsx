// Sahne 58 — kapanış kartı: abone ol + yasal not.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [300, 150, 1500, 1050] },
  { gorsel: "tam/55", kirp: [1180, 400, 1780, 850] },
  { gorsel: "tam/53", kirp: [100, 480, 900, 1080] },
];

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "subscribe"), tSee = K(2, "See");
  const [s1, a1] = pop(t, tSub, 0.5);
  const [s2, a2] = pop(t, tSee, 0.5);
  const pill = (metin: string, renk: string, sc: number, al: number) => (
    <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {t < tSee - 0.1 ? pill(`SUBSCRIBE · ${MARKA.filigran}`, RENK.mercan, s1, a1) : pill("SEE YOU IN THE NEXT ONE", RENK.yesil, s2, a2)}
    </>
  );
};

export default S58;
