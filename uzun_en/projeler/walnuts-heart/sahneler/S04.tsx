// Sahne 4 — kanal tanıtımı + ceviz dalı
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 100, 1700])}>
        <Etiket t={t} bas={K(1, "inside")} capa={[795, 625]} konum={[300, 330]} metin="INSIDE A WALNUT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "walnut.")} capa={[1130, 330]} konum={[1540, 330]} metin="WALNUT HUSK" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin={MARKA.ad.toUpperCase()} x={60} y={140} boyut={62} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
