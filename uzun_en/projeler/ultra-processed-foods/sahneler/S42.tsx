// Sahne 42 — bölüm kartı: Why they might matter (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 43 (saat, ekmek, tabak), 44 (beyin ve mide), 45 (havan, tüpler, kitap)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/43", kirp: [40, 330, 1040, 1080] },
  { gorsel: "tam/44", kirp: [400, 150, 1400, 900] },
  { gorsel: "tam/45", kirp: [0, 330, 1000, 1080] },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "clues,"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <div style={{ background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px",
          fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep, whiteSpace: "nowrap",
          boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>CLUES, NO FINAL ANSWER</div>
      </div>
    </>
  );
};
export default S42;
