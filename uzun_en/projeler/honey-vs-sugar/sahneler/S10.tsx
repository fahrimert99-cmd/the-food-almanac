// Sahne 10 — glisemik indeks kaşıktaki miktarı söylemez: 1 yemek kaşığı bal.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tCatch = K(0, "catch"), tHow = K(1, "how much sugar"), tTbsp = K(2, "tablespoon");
  const tHoney = K(2, "honey weighs"), t21 = K(2, "21 grams"), t64 = K(2, "64"), t17 = K(2, "17 grams");
  const kam = kameraYolu(t, s.sure, [0, 60, 1920], [120, 100, 1760]);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kam}>
        <Etiket t={t} bas={tHoney} capa={[880, 650]} konum={[1180, 720]} metin="HONEY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tCatch} bitis={c[1].bas - 0.1} metin="THE CATCH" x={1450} y={220} boyut={130} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tHow - 0.1} bitis={c[2].bas - 0.1} metin="HOW MUCH SUGAR?" x={1450} y={220} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tTbsp - 0.1} metin="1 TABLESPOON" x={1450} y={200} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={t21} metin="ABOUT 21 GRAMS OF HONEY" x={1450} y={285} hiza="orta" boyut={36} agirlik={800} />
      <VurguRozet t={t} bas={t64 - 0.1} vurgu="64" not="calories" x={1280} y={390} genislik={280} boyut={100} />
      <VurguRozet t={t} bas={t17 - 0.1} vurgu="17 G" not="of sugar" x={1620} y={390} genislik={280} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S10;
