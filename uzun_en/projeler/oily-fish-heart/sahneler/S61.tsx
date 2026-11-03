// Sahne 61 — kapanış kartı: abone ol, yalnızca eğitim amaçlı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 58 (şişe+kase), 59 (tabak), 60 (konserve) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [250, 250, 1250, 1000] },
  { gorsel: "tam/59", kirp: [220, 270, 1220, 1020] },
  { gorsel: "tam/60", kirp: [0, 230, 1000, 980] },
];

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "subscribe"), tEdu = K(1, "education");
  const edu = t >= tEdu - 0.1;
  const [sc, al] = pop(t, edu ? tEdu : tSub, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin={edu ? "EDUCATION ONLY" : "SUBSCRIBE"} renk={edu ? RENK.altin : RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S61;
