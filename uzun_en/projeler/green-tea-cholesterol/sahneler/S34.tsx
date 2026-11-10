// Sahne 34 — bölüm kartı: Extracts and the liver
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "safety"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/35", kirp: [100, 330, 1100, 1080] },
        { gorsel: "tam/36", kirp: [200, 150, 1200, 900] },
        { gorsel: "tam/39", kirp: [60, 100, 1260, 1000] },
      ]} />
      {/* kartın altına tek senkron hap */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="THE SAFETY FINDING" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S34;
