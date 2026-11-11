// Sahne 47 — bölüm kartı: "How to use it" (PART 5).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri (kusursuz 4:3 kırpımlar; 49'da sol alttaki sahte yazı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/48", kirp: [440, 150, 1640, 1050] },
  { gorsel: "tam/49", kirp: [460, 100, 1460, 850] },
  { gorsel: "tam/50", kirp: [420, 100, 1620, 1000] },
];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altı: beş numaralı daire, "five practical ideas" ile sırayla gelir */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.2, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 74, height: 74, borderRadius: "50%",
              background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 42, border: `4px solid ${RENK.kagitAcik}` }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S47;
