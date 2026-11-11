// Sahne 12 — bölüm kartı: "What the splash does" (PART 1).
import React from "react";
import { AdimAkisi, BolumKarti, RENK, SP, kelimeZamani } from "../kutuphane";

// 4:3 kırpımlar, kusursuz bölgeler
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/13", kirp: [260, 60, 1620, 1080] },
  { gorsel: "tam/14", kirp: [0, 100, 1200, 1000] },
  { gorsel: "tam/16", kirp: [0, 120, 1200, 1020] },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <AdimAkisi t={t} x={570} y={800} boyut={28} numarali={false} adimlar={[
        { bas: K(0, "sink"), metin: "SINK", renk: RENK.lacivert },
        { bas: K(0, "rest"), metin: "REST OF YOUR KITCHEN", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S12;
