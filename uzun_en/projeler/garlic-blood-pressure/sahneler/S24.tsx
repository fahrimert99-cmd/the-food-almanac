// Sahne 24 — bölüm kartı: "Where allicin comes from" (PART 4).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (26: sarımsak kesiti, 27: raf)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/26", kirp: [330, 230, 1250, 920] },
  { gorsel: "tam/27", kirp: [320, 130, 1160, 760] },
];

// Altyazı altı tek senkron öğe: üç adım
const ADIMLAR = [
  { c: 1, ifade: "crushed", metin: "CRUSHED", renk: RENK.altin },
  { c: 1, ifade: "heated", metin: "HEATED", renk: RENK.mercan },
  { c: 2, ifade: "kitchen tip", metin: "KITCHEN TIP", renk: RENK.yesil },
];

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {ADIMLAR.map((o) => {
          const [sc, al] = pop(t, K(o.c, o.ifade), 0.5);
          return <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}><Hap metin={o.metin} renk={o.renk} boyut={26} /></div>;
        })}
      </div>
    </>
  );
};

export default S24;
