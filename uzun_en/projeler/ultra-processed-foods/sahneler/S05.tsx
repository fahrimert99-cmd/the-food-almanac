// Sahne 5 — bölüm kartı: NOVA grupları, altta dört numaralı nokta.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (06: raf solu, 07: masa, 08: teneke ve peynir)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [0, 260, 1000, 1010] },
  { gorsel: "tam/07", kirp: [60, 200, 1060, 950] },
  { gorsel: "tam/08", kirp: [300, 100, 1300, 850] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tD = K(0, "definition");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 770, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n, i) => {
          const [sc, al] = pop(t, tD + i * 0.14, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 84, height: 84, borderRadius: "50%",
              background: i === 3 ? RENK.mercan : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 48, border: `4px solid ${RENK.kagitAcik}`,
              boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S05;
