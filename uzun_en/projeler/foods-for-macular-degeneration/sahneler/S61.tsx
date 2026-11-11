// Sahne 61 — kapanış kartı: Evidence over hype.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 55 (ıspanak, havuç, yumurta), 48 (tabak), 58 (kase; büyüteç dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [100, 140, 1300, 1040] },
  { gorsel: "tam/48", kirp: [130, 250, 1130, 1000] },
  { gorsel: "tam/58", kirp: [220, 110, 1120, 785] },
];

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAbone = K(0, "subscribe");
  const tEgitim = K(1, "education");
  const [s1, a1] = pop(t, tAbone, 0.45);
  const [s2, a2] = pop(t, tEgitim, 0.45);
  const hap = (sc: number, al: number, metin: string, renk: string) => (
    <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {t < tEgitim - 0.1 ? hap(s1, a1, "SUBSCRIBE", RENK.mercan) : hap(s2, a2, "FOR EDUCATION ONLY", RENK.altin)}
    </>
  );
};
export default S61;
