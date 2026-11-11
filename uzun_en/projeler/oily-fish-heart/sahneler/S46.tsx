// Sahne 46 — bölüm kartı: Nasıl kullanılır (PART 6).
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 47: tahta üzerinde balıklar, 48: kiler rafı, 49: fırın tepsisi (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/47", kirp: [0, 180, 1100, 1005] },
  { gorsel: "tam/48", kirp: [0, 100, 1000, 850] },
  { gorsel: "tam/49", kirp: [60, 330, 1160, 1155 - 150] },
];

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 16 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [c, a] = pop(t, tFive + 0.12 * n, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${c})`, opacity: a, width: 62, height: 62, borderRadius: "50%", background: RENK.yesil,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 36,
              border: `3px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S46;
