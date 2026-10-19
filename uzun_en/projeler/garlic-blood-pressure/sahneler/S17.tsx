// Sahne 17 — BÖLÜM 3 kartı: iki deneme. Kart görselleri sonraki sahnelerden.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: kapsül tepsisi, şişeler (alt kenardaki harf dışarıda), kâseler
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [80, 180, 1280, 1080] },
  { gorsel: "tam/19", kirp: [380, 100, 1500, 940] },
  { gorsel: "tam/21", kirp: [330, 90, 1530, 990] },
];

// Altyazı altındaki tek senkron öğe: iki deneme yılı
const YILLAR = [
  { ifade: "two", metin: "2010 TRIAL", renk: RENK.altin },
  { ifade: "behind", metin: "2013 TRIAL", renk: RENK.koyuYesil },
];

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 18 }}>
        {YILLAR.map((y) => {
          const [sc, al] = pop(t, K(0, y.ifade), 0.5);
          return (
            <div key={y.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
              <Hap metin={y.metin} renk={y.renk} boyut={28} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S17;
