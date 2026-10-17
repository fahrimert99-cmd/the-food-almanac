// Sahne 45 — bölüm kartı: "Five practical points".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (46 ibre+sarımsak, 48 şişe+tepsi, 49 tahta+sarımsak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/46", kirp: [300, 100, 1500, 1000] },
  { gorsel: "tam/48", kirp: [200, 100, 1100, 775] },
  { gorsel: "tam/49", kirp: [100, 330, 1100, 1080] },
];

// Altyazı altında tek senkron öğe: beş numaralı nokta
const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, b + (n - 1) * 0.16, 0.45);
          return (
            <div key={n} style={{ width: 78, height: 78, borderRadius: "50%", background: n % 2 ? RENK.koyuYesil : RENK.altin, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 38,
              transform: `scale(${sc})`, opacity: al, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S45;
