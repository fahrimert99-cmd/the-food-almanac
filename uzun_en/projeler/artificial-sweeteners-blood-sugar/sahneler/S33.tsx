// Sahne 33 — bölüm kartı: "What health bodies say" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (34: masa + bardak + küre, 38: sürahi, 39: terazi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/34", kirp: [200, 130, 1200, 880] },
  { gorsel: "tam/38", kirp: [0, 60, 1200, 960] },
  { gorsel: "tam/39", kirp: [350, 50, 1650, 1025] },
];

const KURULUS = ["WHO", "ADA"];

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "health organizations");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altı boşlukta tek senkron öğe: iki kurum */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {KURULUS.map((m, i) => {
          const [sc, al] = pop(t, bas + i * 0.45, 0.5);
          return (
            <div key={m} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, background: RENK.lacivert, color: "#fff",
              borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 4,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{m}</div>
          );
        })}
      </div>
    </>
  );
};

export default S33;
