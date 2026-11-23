// Sahne 43 — kanama yok, INR normale döndü, tek vaka kanıt değil
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "bleeding"), tWar = K(1, "warfarin"), tGin = K(1, "stopped"), tInr = K(1, "2.6"), tOne = K(2, "One");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tWar} bitis={tInr - 0.2} capa={[740, 640]} konum={[1000, 260]} metin="WARFARIN HELD" renk={RENK.altin} />
        <Etiket t={t} bas={tGin} bitis={tInr - 0.2} capa={[1500, 650]} konum={[1500, 330]} metin="GINGER STOPPED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "unlisted")} capa={[470, 400]} konum={[900, 300]} metin="UNLISTED INGREDIENTS?" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "no")} bitis={2.6} metin="NO REPORTED BLEEDING" x={150} y={95} boyut={80} renk={RENK.lacivert} />
      <Ikon t={t} bas={tNo} bitis={2.6} ad="onay" x={1000} y={95} boyut={72} />
      <VurguRozet t={t} bas={tInr} bitis={tOne - 0.3} vurgu="INR 2.6" not="BACK TO NORMAL RANGE?" x={960} y={50} genislik={440} boyut={90} renk={RENK.yesil} />
      <Baslik t={t} bas={tOne} metin="ONE CASE CAN'T PROVE CAUSE" x={150} y={95} boyut={72} renk={RENK.lacivert} />
    </>
  );
};
export default S43;
