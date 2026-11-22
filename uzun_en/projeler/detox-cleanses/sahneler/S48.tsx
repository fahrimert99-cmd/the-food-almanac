// Sahne 48 — bölüm kartı: PART 5, beş pratik ipucu.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/49", kirp: [280, 220, 1280, 970] },
  { gorsel: "tam/51", kirp: [340, 300, 1340, 1050] },
  { gorsel: "tam/50", kirp: [780, 60, 1780, 810] },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* "five" söylenince beş numaralı nokta sırayla belirir */}
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tBes + 0.12 * (n - 1), 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 64, height: 64, borderRadius: "50%",
              background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: INTER, fontWeight: 800, fontSize: 32, boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S48;
