// Sahne 11 — kapsül tepsisi: iki kol, dozlar, kördüğüm, 4 hafta.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1820])}>
        <Etiket t={t} bas={K(0, "turmeric")} bitis={5.0} capa={[533, 473]} konum={[560, 95]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ibuprofen")} bitis={9.8} capa={[933, 553]} konum={[1450, 700]} metin="IBUPROFEN" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["TWO", "CAPSULES"]} x={1860} y={190} boyut={90} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "1,500")} bitis={4.9} vurgu="1,500 MG" not="TURMERIC EXTRACT, PER DAY" x={1550} y={400} genislik={470} boyut={84} />
      <VurguRozet t={t} bas={K(1, "1,200")} bitis={9.8} vurgu="1,200 MG" not="IBUPROFEN, PER DAY" x={1550} y={400} genislik={470} boyut={84} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(2, "not")} ad="soru" x={1550} y={430} zemin={RENK.altin} />
      <Not t={t} bas={K(2, "not") + 0.15} metin="PATIENTS DIDN'T KNOW WHICH" x={1550} y={500} hiza="orta" genislik={560} boyut={30} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "four")} vurgu="4 WEEKS" not="STUDY LENGTH" x={1550} y={620} genislik={420} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S11;
