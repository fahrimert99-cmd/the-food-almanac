// Sahne 51 — bölüm kartı: "Cinnamon, sensibly" (PART 5).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (52 kase, 53 kavanoz, 56 kahvaltı masası)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/52", kirp: [420, 220, 1420, 970] },
  { gorsel: "tam/53", kirp: [260, 100, 1060, 700] },
  { gorsel: "tam/56", kirp: [800, 260, 1800, 1010] },
];

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altında: "five ideas" ile 1–5 noktaları */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.14, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 64, height: 64, borderRadius: "50%",
              background: n === 5 ? RENK.altin : RENK.koyuYesil, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 40, border: `4px solid ${RENK.kagitAcik}`,
              boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S51;
