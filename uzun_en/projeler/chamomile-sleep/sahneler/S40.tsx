// S40 — bölüm kartı: dikkat edilecekler
import React from "react";
import { BolumKarti, Ikon, RENK, SP, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/41", kirp: [0, 280, 1000, 1030] },
        { gorsel: "tam/43", kirp: [200, 0, 1600, 1050] },
        { gorsel: "tam/45", kirp: [0, 40, 1000, 790] },
      ]} />
      <Ikon t={t} bas={K(1, "think twice")} ad="soru" x={190} y={820} zemin={RENK.altin} boyut={88} />
    </>
  );
};
export default S40;
