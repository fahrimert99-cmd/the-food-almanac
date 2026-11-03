// Sahne 58 — toplam su (2.7 / 3.7 L), yiyecekten ~%20, kahve ve çay; sonra iki öğeli özet örtüsü.
import React from "react";
import { Etiket, Ikon, Kamera, Ortu, RENK, SP, VurguRozet, Baslik, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "Drink");
  const aOrtu = 0.92 * eout(ilerle(t, tSon - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(0, "20")} bitis={tSon} capa={[1150, 430]} konum={[1150, 85]} metin="ABOUT 20% FROM FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "coffee")} bitis={tSon} capa={[810, 650]} konum={[830, 900]} metin="COFFEE + TEA COUNT" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "2.7")} bitis={tSon} vurgu="2.7 L" not="WOMEN · TOTAL WATER" x={300} y={60} genislik={400} />
      <VurguRozet t={t} bas={K(0, "3.7")} bitis={tSon} vurgu="3.7 L" not="MEN · TOTAL WATER" x={740} y={60} genislik={400} renk={RENK.koyuYesil} />
      <Ortu a={aOrtu} />
      <Baslik t={t} bas={tSon} metin="DRINK EARLIER" x={560} y={400} boyut={100} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(1, "earlier")} ad="saat" x={440} y={400} boyut={100} zemin={RENK.altin} />
      <Baslik t={t} bas={K(1, "follow")} metin="KNOW YOUR LIMIT" x={560} y={600} boyut={100} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(1, "follow")} ad="onay" x={440} y={600} boyut={100} zemin={RENK.yesil} />
    </>
  );
};

export default S58;
