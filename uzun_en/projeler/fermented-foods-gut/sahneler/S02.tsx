// Sahne 2 — fermente vs lif: iki kase, sağda başlık ve "düşmedi" işareti.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1830])}>
        <Etiket t={t} bas={K(0, "same trial")} capa={[330, 700]} konum={[330, 880]} metin="FERMENTED FOODS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "high fiber")} capa={[870, 720]} konum={[870, 880]} metin="HIGH FIBER" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "same trial")} metin="FERMENTED" x={1860} y={300} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "high fiber")} metin="VS FIBER" x={1860} y={420} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(0, "did not")} ad="carpi" x={1430} y={640} boyut={96} zemin={RENK.mercan} />
      <Baslik t={t} bas={K(0, "did not")} metin="NOT LOWERED" x={1500} y={640} boyut={64} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "inflammatory")} metin="INFLAMMATORY PROTEINS" x={1480} y={715} boyut={26} font="inter" agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S02;
