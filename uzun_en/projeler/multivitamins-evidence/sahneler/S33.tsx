// Sahne 33 — "yanlış olan": çoklu vitamin güvenlik ağı değildir.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFalse = K(0, "false?"), tSafe = K(1, "safety"), tMv = K(1, "multivitamin"), tPoor = K(1, "poor");
  const tHeart = K(1, "heart."), tBig = K(2, "big");
  const bit1 = tBig - 0.15;
  const w = kameraYolu(t, s.sure, [60, 20, 1800], [110, 60, 1700]);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={w} />
      <Baslik t={t} bas={0.05} bitis={tSafe - 0.1} metin="WHAT'S FALSE?" x={100} y={160} boyut={96} renk={RENK.altin} />
      <Baslik t={t} bas={tSafe} bitis={bit1} metin="A SAFETY NET?" x={100} y={160} boyut={96} renk={RENK.lacivert} />
      <Etiket t={t} bas={tMv} bitis={bit1} capa={[1420, 470]} konum={[1690, 760]} metin="MULTIVITAMIN" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tPoor} bitis={bit1} capa={[540, 700]} konum={[230, 870]} metin="POOR DIET" renk={RENK.mercan} boyut={26} />
      <Ikon t={t} bas={tHeart} bitis={bit1} ad="carpi" x={1000} y={260} boyut={90} zemin={RENK.mercan} />
      <Baslik t={t} bas={tBig} metin="THE BIG TRIALS" x={100} y={150} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "haven't")} metin="HAVEN'T SHOWN THAT" x={100} y={250} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S33;
