// Sahne 56 — kısa rutin: eller, tahta, lavabo
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "Hands,")} capa={[300, 500]} konum={[330, 210]} metin="HANDS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "board,")} capa={[330, 690]} konum={[330, 910]} metin="BOARD" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "sink.")} capa={[960, 740]} konum={[1000, 910]} metin="SINK" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "short")} bitis={K(2, "It") - 0.1} metin="THE SHORT" x={1860} y={110} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "routine")} bitis={K(2, "It") - 0.1} metin="ROUTINE" x={1860} y={210} boyut={90} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "splash,")} metin="HANDLES THE SPLASH" x={1860} y={120} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "hands.")} metin="HANDLES THE HANDS" x={1860} y={205} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S56;
