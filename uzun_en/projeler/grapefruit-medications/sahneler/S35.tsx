// Sahne 35 — miktar: yaklaşık bir bardak, meyve de sayılır.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "The");
  const tS2 = K(2, "And");
  const tKapat = K(1, "little") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(1, "one cup")} bitis={tS2 - 0.1} capa={[1000, 600]} konum={[1700, 520]} metin="ONE CUP" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "whole fruit")} capa={[1330, 720]} konum={[1700, 820]} metin="WHOLE FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "juice")} capa={[800, 520]} konum={[230, 480]} metin="JUICE" renk={RENK.altin} />
      </Kamera>
      {/* 1. vuruş: miktar */}
      <Baslik t={t} bas={K(0, "Amount")} bitis={tKapat} metin="AMOUNT" x={60} y={150} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "less")} bitis={tKapat} metin="MATTERS LESS" x={60} y={255} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "than")} bitis={tKapat} metin="THAN YOU'D HOPE" x={64} y={330} boyut={36} agirlik={800} />
      {/* 2. vuruş: 250 ml */}
      <VurguRozet t={t} bas={K(1, "250")} bitis={tS2 - 0.1} vurgu="250 ML" not="about one cup" x={1690} y={160} genislik={380} boyut={96} />
      <Not t={t} bas={K(1, "can change")} bitis={tS2 - 0.1} metin="CAN CHANGE HOW SOME DRUGS ARE HANDLED" x={64} y={130} boyut={36}
        agirlik={800} genislik={340} />
    </>
  );
};

export default S35;
