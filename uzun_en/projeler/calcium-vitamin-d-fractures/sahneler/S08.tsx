// Sahne 8 — D vitamini hedefi; yemek ve takviye birlikte sayılır.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(1, "Notice");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 30, 1860], [90, 80, 1700])}>
        <Etiket t={t} bas={K(0, "vitamin")} bitis={t2 - 0.1} capa={[1160, 640]} konum={[1560, 440]} metin="VITAMIN D" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "food")} capa={[900, 470]} konum={[900, 190]} metin="FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "supplements")} capa={[1160, 520]} konum={[1500, 420]} metin="SUPPLEMENTS" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "800")} bitis={t2 - 0.1} vurgu="800–1,000" not="international units a day" x={1560} y={130} genislik={500} boyut={96} />
      <Baslik t={t} bas={K(1, "together")} metin="COUNTED TOGETHER" x={1860} y={170} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S08;
