// Sahne 38 — bölüm kartı: PART 4, ağır metaller.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 39: yalnızca çikolata sırası ve terazi; 40: terazi + çikolata (sol/üst kusursuz)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/39", kirp: [0, 260, 960, 980] },
  { gorsel: "tam/40", kirp: [80, 200, 1160, 1010] },
];

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "many people"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="LEAD · CADMIUM" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S38;
