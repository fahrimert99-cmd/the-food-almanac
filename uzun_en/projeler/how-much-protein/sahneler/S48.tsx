// Sahne 48 — bölüm kartı: "Five practical steps" (PART 6).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden 4:3 kırpımlar (kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [80, 300, 1080, 1050] },
  { gorsel: "tam/51", kirp: [60, 320, 1060, 1070] },
  { gorsel: "tam/52", kirp: [300, 150, 1400, 975] },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazının altında: 1–5 numaralı daireler beşi söylerken sırayla gelir */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n, i) => {
          const [sc, al] = pop(t, bas + i * 0.14, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 84, height: 84, borderRadius: "50%",
              background: i % 2 ? RENK.koyuYesil : RENK.yesil, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 48, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S48;
