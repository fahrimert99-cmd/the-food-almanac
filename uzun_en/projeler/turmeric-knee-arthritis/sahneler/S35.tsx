// Sahne 35 — özel formülasyonlar: şişeler üzerinde etiketler, üstte "her sonuç tek bir özüte aittir" başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, kameraYolu, RENK, SP, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  const tSon = K(1, "each trial");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pen}>
        <Etiket t={t} bas={K(0, "special formulations")} bitis={tSon - 0.2} capa={[960, 400]} konum={[560, 190]} metin="SPECIAL FORMULATIONS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "different products")} capa={[1300, 520]} konum={[1580, 340]} metin="DIFFERENT PRODUCTS" renk={RENK.lacivert} boyut={26} />
        <Etiket t={t} bas={K(1, "behave")} capa={[480, 620]} konum={[330, 400]} metin="BEHAVE DIFFERENTLY" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tSon} metin="EACH RESULT BELONGS TO ONE EXTRACT" x={960} y={140} boyut={62} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S35;
