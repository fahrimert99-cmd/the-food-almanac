// Sahne 44 — kanıtın sınırları
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      <Baslik t={t} bas={K(0, "other")} bitis={8.5} metin="OTHER LIMITS" x={620} y={150} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Etiket t={t} bas={K(1, "lab")} capa={[1173, 707]} konum={[1000, 900]} metin="LAB MEASUREMENTS" renk={RENK.lacivert} boyut={26} />
      <Etiket t={t} bas={K(1, "small")} capa={[640, 540]} konum={[480, 300]} metin="SMALL STUDIES" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={K(1, "older")} bitis={8.6} capa={[1300, 560]} konum={[1640, 340]} metin="OLDER ADULTS?" renk={RENK.mercan} boyut={26} />
      <Baslik t={t} bas={K(2, "absorbing")} metin="ABSORBING MORE" x={620} y={130} boyut={76} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "prove")} metin="NOT PROOF OF BENEFIT" x={620} y={215} boyut={76} renk={RENK.mercan} hiza="orta" />
      <Etiket t={t} bas={K(2, "pigment")} capa={[1480, 627]} konum={[1640, 830]} metin="PIGMENT" renk={RENK.mercan} boyut={26} />
    </>
  );
};
export default S44;
