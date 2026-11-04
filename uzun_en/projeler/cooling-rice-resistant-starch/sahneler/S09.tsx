// Sahne 9 — fikir: pişir, buzdolabında soğut, nişasta zor sindirilir; sorular: ne kadar, kan şekerini değiştirir mi?
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFikir = K(0, "idea"), tPisir = K(1, "Cook"), tSoguk = K(1, "chill"), tZor = K(1, "harder");
  const tNe = K(2, "how much"), tKan = K(2, "blood sugar");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      {/* açılış başlığı: üstteki boş kâğıt */}
      <Baslik t={t} bas={tFikir} bitis={tPisir + 0.4} metin="THE IDEA" x={960} y={96} boyut={86} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={tPisir} capa={[580, 650]} konum={[560, 900]} metin="COOK" renk={RENK.mercan} />
      <Etiket t={t} bas={tSoguk} capa={[1410, 500]} konum={[1330, 860]} metin="CHILL" renk={RENK.lacivert} />
      <Etiket t={t} bas={tZor} capa={[1440, 430]} konum={[960, 790]} metin="HARDER TO DIGEST" renk={RENK.koyuYesil} />
      {/* sorular: üstteki boş kâğıt */}
      <Baslik t={t} bas={tNe} bitis={tKan - 0.1} metin="HOW MUCH?" x={960} y={96} boyut={86} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={tKan} metin="BLOOD SUGAR?" x={960} y={96} boyut={86} renk={RENK.mercan} hiza="orta" />
      <Ikon t={t} bas={tKan + 0.15} ad="soru" x={960} y={255} boyut={84} zemin={RENK.altin} />
    </>
  );
};

export default S09;
