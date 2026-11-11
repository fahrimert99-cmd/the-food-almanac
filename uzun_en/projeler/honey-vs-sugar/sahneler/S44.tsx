// Sahne 44 — bölüm kartı: "How to use honey" (PART 5).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 45 (çay + kavanoz), 46 (kavanoz + tabak), 48 (tahta üstünde kaşıklar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [600, 100, 1600, 850] },
  { gorsel: "tam/46", kirp: [700, 255, 1800, 1080] },
  { gorsel: "tam/48", kirp: [480, 60, 1840, 1080] },
];

// Altyazı altında tek senkron öğe: beş numaralı daire
const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas + 0.2 * (n - 1), 0.5);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 78, height: 78, borderRadius: "50%",
              background: n === 5 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 44, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S44;
