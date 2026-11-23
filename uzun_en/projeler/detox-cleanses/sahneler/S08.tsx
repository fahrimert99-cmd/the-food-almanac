// Sahne 8 — bölüm kartı: Your built-in cleaners
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "Two organs"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/09", kirp: [60, 180, 1060, 930] },
        { gorsel: "tam/10", kirp: [100, 160, 800, 685] },
        { gorsel: "tam/12", kirp: [150, 60, 1250, 885] },
      ]} />
      {/* iki organ: karaciğer ve böbrek */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 16, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="LIVER" renk={RENK.mercan} boyut={30} />
        <Hap metin="KIDNEYS" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S08;
