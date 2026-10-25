// Sahne 5 — açılış kartı: kanal + video başlığı, üç bölüm görseli.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "spike"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/01", kirp: [100, 200, 1060, 920] },
        { gorsel: "tam/06", kirp: [80, 330, 1040, 1050] },
        { gorsel: "tam/03", kirp: [60, 180, 1020, 900] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 810, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="BLOOD SUGAR SPIKE" renk={RENK.altin} boyut={34} />
      </div>
    </>
  );
};

export default S05;
