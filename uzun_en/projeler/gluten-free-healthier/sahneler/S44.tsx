// Sahne 44 — bölüm kartı: "Get tested before you cut" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [100, 200, 1100, 950] },
  { gorsel: "tam/46", kirp: [300, 200, 1300, 950] },
  { gorsel: "tam/47", kirp: [40, 200, 1160, 1040] },
];

// Altyazı altında tek senkron öğe: önce düşünce, sonra "test first"
const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "going gluten-free"), 0.5);
  const [s2, a2] = pop(t, K(1, "first"), 0.5);
  const hap = (sc: number, al: number, renk: string, metin: string) => (
    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {hap(s1, a1, RENK.altin, "GOING GLUTEN-FREE?")}
        <span style={{ opacity: a2, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.gri }}>→</span>
        {hap(s2, a2, RENK.yesil, "TEST FIRST")}
      </div>
    </>
  );
};

export default S44;
