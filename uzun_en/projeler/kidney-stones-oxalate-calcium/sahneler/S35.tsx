// Sahne 35 — terazi: ıspanak vs süt. Yazar sonucu: oksalat büyük risk faktörü değil.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  const t1 = K(1, "authors") - 0.1, t2 = K(2, "They") - 0.1, t3 = K(3, "In") - 0.1;
  const [sp3, ap3] = pop(t, K(3, "statistically"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pen}>
        <Etiket t={t} bas={K(0, "spinach?")} capa={[440, 440]} konum={[190, 330]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "calcium")} capa={[1290, 400]} konum={[1700, 330]} metin="CALCIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "banning")} bitis={t1} metin="BAN SPINACH?" x={960} y={95} boyut={86} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={t1} bitis={t2} metin="THE AUTHORS DIDN'T THINK SO" x={960} y={95} boyut={72} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={t2} bitis={t3} metin="OXALATE: NOT A MAJOR RISK FACTOR" x={960} y={95} boyut={68} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={t3} metin="STRONGER LINK AT LOWER CALCIUM" x={960} y={95} boyut={68} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 960, top: 892, transform: `translate(-50%,0) scale(${sp3})`, opacity: ap3 }}>
        <Hap metin="NOT STATISTICALLY FIRM" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S35;
