// Sahne 12 — Üç grup: zeytinyağlı Akdeniz diyeti, fındık/kuruyemişli Akdeniz diyeti, düşük yağ karşılaştırma grubu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tUc = K(0, "three"), tYag = K(1, "olive"), tFindik = K(1, "nuts,"), tKar = K(1, "comparison");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [60, 110, 1740])} />
      <BaslikBlok t={t} bas={tUc} satirlar={m.baslik!.satirlar} x={1860} y={150} boyut={110} hiza="sag" />
      <Liste t={t} x={1290} y={440} aralik={110} boyut={32} genislik={600} ogeler={[
        { bas: K(1, "Mediterranean"), metin: "MED DIET + OLIVE OIL", renk: RENK.koyuYesil },
        { bas: K(1, "mixed"), metin: "MED DIET + NUTS", renk: RENK.altin },
        { bas: tKar, metin: "COMPARISON: LESS FAT", renk: RENK.lacivert },
      ]} />
      <Etiket t={t} bas={tYag} capa={[330, 470]} konum={[420, 170]} metin="OLIVE OIL" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tFindik} capa={[760, 573]} konum={[1000, 250]} metin="MIXED NUTS" renk={RENK.altin} />
    </>
  );
};

export default S12;
