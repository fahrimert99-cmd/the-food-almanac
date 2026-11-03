// Sahne 42 — Ceylon düşük kumarinli seçim; ama hangi türün test edildiği belirsiz.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "But");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Baslik t={t} bas={K(0, "Ceylon")} bitis={tB - 0.2} metin="CEYLON" x={140} y={130} boyut={112} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "low-coumarin")} bitis={tB - 0.2} capa={[800, 440]} konum={[600, 310]} metin="LOW COUMARIN" renk={RENK.yesil} />
      <Not t={t} bas={K(0, "German")} bitis={tB - 0.2} metin="German regulators: heavy users pick it" x={1860} y={130} boyut={36} hiza="sag" genislik={900} />
      <Ikon t={t} bas={K(0, "pick")} bitis={tB - 0.2} ad="onay" x={1780} y={215} boyut={84} />
      <Etiket t={t} bas={K(1, "type")} capa={[1450, 640]} konum={[1500, 330]} metin="WHICH TYPE?" renk={RENK.altin} />
      <Ikon t={t} bas={K(1, "tested,")} ad="soru" x={1740} y={440} boyut={84} zemin={RENK.lacivert} />
      <Not t={t} bas={K(1, "we")} metin="We can't say Ceylon works better for blood sugar" x={140} y={140} boyut={42} genislik={700} />
    </>
  );
};
export default S42;
