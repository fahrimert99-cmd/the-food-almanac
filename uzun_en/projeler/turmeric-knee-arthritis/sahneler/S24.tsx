// Sahne 24 — bölüm kartı: "Fifteen trials together" (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 25 (kitap yığını), 26 (kâse + şişe), 28 (büyüteç ve boş kâğıt) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/25", kirp: [120, 130, 1160, 910] },
  { gorsel: "tam/26", kirp: [380, 150, 1580, 1050] },
  { gorsel: "tam/28", kirp: [560, 220, 1360, 820] },
];

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "pool"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        META-ANALYSIS
      </div>
    </>
  );
};

export default S24;
