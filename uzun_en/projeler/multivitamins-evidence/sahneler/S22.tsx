// Sahne 22 — standart sapma: cetvel ve küçük basamak
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSd = K(0, "standard deviation"), tYard = K(0, "yardstick"), tSpread = K(0, "spread"), tGain = K(1, "0.07"), tTiny = K(1, "tiny step");
  const bit = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 35, 1800])} />
      {/* 1. cümle: üst boş şeritte başlık, cetvel etiketi */}
      <Baslik t={t} bas={tSd} bitis={bit} metin="STANDARD DEVIATION" x={960} y={100} boyut={76} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tSpread} bitis={bit} metin="HOW SPREAD OUT SCORES ARE" x={960} y={170} hiza="orta" boyut={32} agirlik={800} />
      <Etiket t={t} bas={tYard} bitis={bit} capa={[590, 900]} konum={[1000, 930]} metin="YARDSTICK" renk={RENK.altin} boyut={26} />
      {/* 2. cümle: 0.07 rozeti ve küçük basamak */}
      <VurguRozet t={t} bas={tGain} vurgu="0.07" not="TINY STEP UP" x={960} y={45} genislik={360} boyut={80} />
      <Etiket t={t} bas={tTiny} capa={[830, 650]} konum={[1010, 560]} metin="TINY STEP" renk={RENK.yesil} boyut={26} />
    </>
  );
};

export default S22;
