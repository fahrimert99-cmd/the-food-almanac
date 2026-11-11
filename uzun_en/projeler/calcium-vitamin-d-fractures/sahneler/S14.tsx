// Sahne 14 — alt grup analizleri, VITAL yalnız D idi, sıra Women's Health Initiative'de. Şişeler + mikroskop.
import React from "react";
import { Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVital = K(1, "VITAL"), tAlone = K(1, "alone"), tCa = K(2, "calcium"), tWhi = K(2, "Women's");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740])}>
        <Etiket t={t} bas={tVital} bitis={tCa - 0.1} capa={[380, 680]} konum={[640, 400]} metin="VITAL: VITAMIN D ALONE" renk={RENK.altin} />
        <Etiket t={t} bas={tCa} capa={[1060, 660]} konum={[1010, 430]} metin="CALCIUM + VITAMIN D" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tWhi} capa={[1340, 410]} konum={[900, 220]} metin="WOMEN'S HEALTH INITIATIVE" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={96} y={110} aralik={78} boyut={38}
        ogeler={[{ bas: K(0, "Age"), metin: "AGE", renk: RENK.lacivert, bitis: tVital - 0.1 },
                 { bas: K(0, "sex"), metin: "SEX", renk: RENK.lacivert, bitis: tVital - 0.1 },
                 { bas: K(0, "weight"), metin: "WEIGHT", renk: RENK.lacivert, bitis: tVital - 0.1 },
                 { bas: K(0, "starting"), metin: "STARTING VITAMIN D LEVEL", renk: RENK.lacivert, bitis: tVital - 0.1 }]} />
      <Not t={t} bas={K(0, "didn't")} bitis={tVital - 0.1} metin="DIDN'T CHANGE THE PICTURE" x={100} y={450} boyut={34} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S14;
