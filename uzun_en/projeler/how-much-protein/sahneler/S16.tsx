// Sahne 16 — bölüm kartı: PART 2, uzman önerileri
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(0, "international group");
  const a = eout(ilerle(t, tGrup, 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/17", kirp: [160, 150, 1240, 960] },
        { gorsel: "tam/18", kirp: [60, 80, 1160, 905] },
        { gorsel: "tam/20", kirp: [880, 380, 1760, 1040] },
      ]} />
      {/* eşzamanlı küçük öğe: 2013 uzman grubu */}
      <div style={{ position: "absolute", left: 140, top: 790, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
        <Hap metin="2013 · EXPERT GROUP" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S16;
