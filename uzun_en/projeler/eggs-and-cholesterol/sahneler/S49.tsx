// Sahne 49 — bölüm kartı: "Eggs on the plate" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [100, 100, 1100, 850] },
  { gorsel: "tam/52", kirp: [240, 0, 1680, 1080] },
  { gorsel: "tam/53", kirp: [100, 0, 1540, 1080] },
];

// Altyazının altındaki boşlukta tek senkron öğe: beş numaralı nokta
const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "practical");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas - 0.15 + n * 0.1, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 58, height: 58, borderRadius: "50%",
              background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28 }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S49;
