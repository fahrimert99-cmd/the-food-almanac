// Sahne 4 — kanal tanıtımı + "sodyum nedir"
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "sodium")} capa={[700, 610]} konum={[210, 640]} metin="SODIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} bitis={c[1].bas + 1.5} metin={MARKA.ad.toUpperCase()} x={1860} y={230} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(1, "why")} metin="WHY IT MATTERS" x={1860} y={260} boyut={78} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S04;
