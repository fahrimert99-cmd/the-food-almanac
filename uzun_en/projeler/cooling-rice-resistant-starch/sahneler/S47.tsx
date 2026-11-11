// Sahne 47 — bölüm kartı: "Cool it fast, keep it cold" (PART 7).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 49 (tepsi, kavanozlar) ve 48 (kap + el); kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/49", kirp: [150, 180, 1350, 1080] },
  { gorsel: "tam/48", kirp: [230, 250, 1230, 1000] },
  { gorsel: "tam/49", kirp: [1200, 250, 1800, 700] },
];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "here is how"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="TRY IT SAFELY" renk={RENK.yesil} boyut={28} />
      </div>
    </>
  );
};

export default S47;
