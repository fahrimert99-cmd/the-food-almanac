// Sahne 50 — bölüm kartı: "How to use it" (PART 6).
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm sahnelerinden kusursuz 4:3 kırpımlar (51: imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/51", kirp: [500, 130, 1500, 880] },
  { gorsel: "tam/52", kirp: [380, 150, 1380, 900] },
  { gorsel: "tam/53", kirp: [240, 0, 1680, 1080] },
];

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altındaki boşlukta beş adım noktası */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 20 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, b + (n - 1) * 0.16, 0.45);
          return (
            <div key={n} style={{ width: 66, height: 66, borderRadius: "50%", background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 38,
              transform: `scale(${sc})`, opacity: al, border: `3px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S50;
