// Sahne 5 — bölüm kartı: What bones need (PART 1).
import React from "react";
import { AdimAkisi, BolumKarti, RENK, SP, kelimeZamani } from "../kutuphane";

// Kart görselleri: 6, 7 ve 8. sahnelerden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [100, 130, 1100, 880] },
  { gorsel: "tam/07", kirp: [0, 110, 1160, 980] },
  { gorsel: "tam/08", kirp: [600, 300, 1600, 1050] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <AdimAkisi t={t} x={460} y={830} boyut={26} numarali={false} adimlar={[
        { bas: K(0, "quick"), metin: "CALCIUM", renk: RENK.altin },
        { bas: K(0, "look"), metin: "VITAMIN D", renk: RENK.yesil },
        { bas: K(0, "basics"), metin: "FOOD", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S05;
