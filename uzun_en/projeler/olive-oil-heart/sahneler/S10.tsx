// Sahne 10 — BÖLÜM 1 kartı: PREDIMED. Bölüm kartı + "en iyi kanıt" vuruşu.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "best evidence"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/11", kirp: [560, 430, 1360, 1030] },
        { gorsel: "tam/12", kirp: [60, 170, 1260, 1070] },
        { gorsel: "tam/15", kirp: [0, 0, 1200, 900] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="BEST EVIDENCE WE HAVE" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S10;
