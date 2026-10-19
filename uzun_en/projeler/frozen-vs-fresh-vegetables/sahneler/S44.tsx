// Sahne 44 — bölüm kartı: "How to use it" (PART 6). Altında 5 numaralı ipucu noktası.
import React from "react";
import { ANTON, BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (45 çekmece, 46 sepet, 49 kase)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [240, 200, 1240, 950] },
  { gorsel: "tam/46", kirp: [0, 150, 1200, 1050] },
  { gorsel: "tam/49", kirp: [640, 300, 1640, 1050] },
];

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + 0.12 * n, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 64, height: 64, borderRadius: "50%", background: RENK.lacivert,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 36,
              border: `3px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
        <span style={{ opacity: pop(t, tFive + 0.7, 0.45)[1], fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.altin, marginLeft: 8 }}>
          PRACTICAL TIPS
        </span>
      </div>
    </>
  );
};

export default S44;
