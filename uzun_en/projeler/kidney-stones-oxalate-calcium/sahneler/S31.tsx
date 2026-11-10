// Sahne 31 — tablet tek başına mı, öğünle mi?
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMeal = K(2, "meal");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1740])} />
      <BaslikBlok t={t} bas={K(0, "supplement")} satirlar={s.meta.baslik!.satirlar} x={100} y={95} boyut={72} />
      <Etiket t={t} bas={K(1, "pill")} capa={[500, 520]} konum={[560, 905]} metin="CALCIUM PILL" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "no")} capa={[640, 660]} konum={[190, 905]} metin="NO OXALATE" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={K(2, "same")} capa={[1620, 360]} konum={[1530, 120]} metin="MEAL CALCIUM" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "does")} capa={[1300, 560]} konum={[1250, 880]} metin="BINDS OXALATE" renk={RENK.yesil} />
    </>
  );
};
export default S31;
