// Sahne 13 — tek boşluk: sertlikte kanıtlanamadı; deneme herkes için kanıt değil.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [40, 80, 1840], [100, 110, 1720])}>
        <Etiket t={t} bas={K(1, "stiffness")} bitis={5.9} capa={[620, 600]} konum={[420, 880]} metin="STIFFNESS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "turmeric")} capa={[1050, 420]} konum={[1120, 260]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={0.0} bitis={5.9} metin="ONE GAP" x={110} y={130} boyut={110} renk={RENK.lacivert} />
      {/* 2. cümle */}
      <BaslikBlok t={t} bas={K(1, "formally")} bitis={5.9} satirlar={["NOT FORMALLY", "SHOWN"]} x={1860} y={170} boyut={84} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Ikon t={t} bas={K(1, "could")} bitis={5.9} ad="carpi" x={1290} y={140} boyut={72} zemin={RENK.mercan} />
      {/* 3. cümle */}
      <Baslik t={t} bas={K(2, "no trial")} metin="NO TRIAL PROVES" x={1860} y={150} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "same")} metin="THE SAME IN EVERY PERSON" x={1860} y={235} boyut={52} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S13;
