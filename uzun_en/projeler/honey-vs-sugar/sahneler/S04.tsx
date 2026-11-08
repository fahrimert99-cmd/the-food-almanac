// Sahne 4 — kanal tanıtımı + bir kaşık balın içi
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "spoonful")} capa={[1230, 300]} konum={[860, 190]} metin="HONEY DIPPER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "honey.")} capa={[1230, 740]} konum={[870, 520]} metin="HONEY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin={MARKA.ad.toUpperCase()} x={70} y={130} boyut={76} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "inside")} metin="WHAT'S INSIDE?" x={70} y={880} boyut={78} renk={RENK.lacivert} />
    </>
  );
};

export default S04;
