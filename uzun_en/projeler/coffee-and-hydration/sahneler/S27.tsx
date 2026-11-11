// Sahne 27 — bölüm kartı: Tolerance (PART 5).
import React from "react";
import { BolumKarti, Hap, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
// (28: takvim başlığı ve sağ kenar dışarıda; 29 ve 30 temiz)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/28", kirp: [590, 350, 1190, 800] },
  { gorsel: "tam/29", kirp: [300, 100, 1180, 760] },
  { gorsel: "tam/30", kirp: [60, 170, 980, 860] },
];

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "regular"), 0.5);
  const [sv, av] = pop(t, K(1, "from"), 0.45);
  const [s2, a2] = pop(t, K(1, "rarely"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
          <Hap metin="REGULAR DRINKERS" renk={RENK.yesil} boyut={24} />
        </div>
        <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2,
          color: RENK.gri }}>VS</span>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
          <Hap metin="RARELY HAVE CAFFEINE" renk={RENK.altin} boyut={24} />
        </div>
      </div>
    </>
  );
};

export default S27;
