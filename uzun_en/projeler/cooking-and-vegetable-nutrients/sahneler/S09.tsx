// Sahne 9 — bölüm kartı: "Four ways to cook" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden 4:3 kırpımlar (14: buharlı sepet, 16: tencere, 10: araçlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/14", kirp: [500, 260, 1380, 920] },
  { gorsel: "tam/16", kirp: [480, 250, 1440, 970] },
  { gorsel: "tam/10", kirp: [640, 200, 1480, 830] },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Bureau"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altında tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="BUREAU · 2015" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S09;
