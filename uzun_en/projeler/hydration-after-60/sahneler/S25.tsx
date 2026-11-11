// Sahne 25 — bölüm kartı: "How much water you need" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/27", kirp: [560, 330, 1560, 1080] },
  { gorsel: "tam/28", kirp: [480, 330, 1480, 1080] },
  { gorsel: "tam/30", kirp: [100, 200, 1100, 950] },
];

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // altyazı altında tek senkron öğe: ana başvuru kaynağı
  const [sc, al] = pop(t, K(1, "main reference"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        MAIN REFERENCE
      </div>
    </>
  );
};

export default S25;
