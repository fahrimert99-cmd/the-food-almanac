// Sahne 53 — özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [300, 130, 1400, 955] },
  { gorsel: "tam/55", kirp: [600, 180, 1600, 930] },
  { gorsel: "tam/48", kirp: [100, 170, 1300, 1070] },
];

const S53: React.FC<SP> = ({ t, s }) => {
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
    </>
  );
};

export default S53;
