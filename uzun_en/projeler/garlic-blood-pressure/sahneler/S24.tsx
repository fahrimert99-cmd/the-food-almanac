// Sahne 24 — bölüm kartı: sarımsağın içi
import React from "react";
import { AdimAkisi, BolumKarti, RENK, SP, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/25", kirp: [50, 200, 850, 800] },
        { gorsel: "tam/26", kirp: [60, 230, 860, 830] },
        { gorsel: "tam/27", kirp: [340, 200, 1340, 950] },
      ]} />
      <AdimAkisi t={t} x={560} y={830} boyut={30} numarali={false} adimlar={[
        { bas: K(1, "crushed"), metin: "CRUSHED", renk: RENK.altin },
        { bas: K(1, "heated"), metin: "HEATED", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S24;
