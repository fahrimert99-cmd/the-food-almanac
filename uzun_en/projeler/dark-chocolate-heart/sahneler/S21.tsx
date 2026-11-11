// Sahne 21 — kapsül ≠ çikolata
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [50, 30, 1700]);
  const tDet = K(0, "detail"), tCap = K(1, "capsules"), tMeas = K(1, "measured"), tBar = K(2, "chocolate bar"), tNot = K(2, "not that"), tBack = K(3, "come back");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={w}>
        <Etiket t={t} bas={tCap} capa={[440, 400]} konum={[440, 190]} metin="CAPSULE" renk={RENK.altin} />
        <Etiket t={t} bas={tBar} capa={[1440, 520]} konum={[1440, 190]} metin="CHOCOLATE BAR" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tDet} bitis={tBack} metin="ONE MORE DETAIL" x={960} y={120} boyut={34} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      <Baslik t={t} bas={tBack} metin="MORE ON WHY LATER" x={960} y={120} boyut={34} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      <Not t={t} bas={tMeas} metin="MEASURED FLAVANOL DOSE" x={960} y={680} boyut={32} agirlik={800} renk={RENK.lacivert} hiza="orta" genislik={440} />
      <Baslik t={t} bas={tNot} metin="A CAPSULE IS NOT A BAR" x={1000} y={900} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S21;
