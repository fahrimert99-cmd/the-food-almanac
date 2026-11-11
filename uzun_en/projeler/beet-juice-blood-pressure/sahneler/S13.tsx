// Sahne 13 — bölüm kartı: çalışmaları birleştirmek (PART 2).
import React from "react";
import { BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (16: takvim dışarıda; 12: yalnızca kase ve pancar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/14", kirp: [0, 100, 1160, 970] },
  { gorsel: "tam/16", kirp: [1000, 520, 1700, 1045] },
  { gorsel: "tam/12", kirp: [830, 405, 1730, 1080] },
];

// Altyazı altındaki tek senkron öğe: 22 deney noktası
const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "pool");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 830, display: "flex", gap: 12, alignItems: "center" }}>
        {Array.from({ length: 22 }, (_, i) => {
          const [sc, al] = pop(t, bas + i * 0.06, 0.4);
          return <span key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: i % 2 ? RENK.altin : RENK.mercan,
            transform: `scale(${sc})`, opacity: al }} />;
        })}
      </div>
    </>
  );
};

export default S13;
