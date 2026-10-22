// Sahne 44 — bölüm kartı: "Coffee and your day" (PART 8).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/46", kirp: [380, 100, 1580, 1000] },
  { gorsel: "tam/47", kirp: [350, 100, 1550, 1000] },
  { gorsel: "tam/49", kirp: [480, 120, 1480, 870] },
];

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  const tNote = K(1, "safety note");
  const [sn, an] = pop(t, tNote, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazının altında tek senkron öğe: beş numara, sonra güvenlik notu */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + 0.1 * n, 0.4);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 58, height: 58, borderRadius: "50%", background: RENK.lacivert,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28 }}>{n}</div>
          );
        })}
        <div style={{ transform: `scale(${sn})`, transformOrigin: "0% 50%", opacity: an, display: "flex", alignItems: "center", gap: 12, marginLeft: 14,
          background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 24px 8px 12px", whiteSpace: "nowrap",
          fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
          + SAFETY NOTE
        </div>
      </div>
    </>
  );
};

export default S44;
