// Sahne 23 — bölüm kartı: bakım evi görselleri + tek küçük senkron hap.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "trial"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/24", kirp: [60, 60, 1160, 885] },
        { gorsel: "tam/25", kirp: [300, 10, 1700, 1060] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="THE TRIAL WHERE IT HELPED" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S23;
