// Sahne 31 — BÖLÜM 3 kartı: "Why it may work" (iki fikir: yağ takası, bitkisel fenoller).
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "two ideas"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/32", kirp: [100, 200, 900, 800] },
        { gorsel: "tam/34", kirp: [100, 100, 900, 700] },
        { gorsel: "tam/36", kirp: [60, 100, 860, 700] },
      ]} />
      {/* altyazının altında tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 830, opacity: al * eout(ilerle(t, 0, 0.1)), transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="TWO IDEAS" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S31;
