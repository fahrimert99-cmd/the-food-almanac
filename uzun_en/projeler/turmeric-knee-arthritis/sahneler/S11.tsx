// Sahne 11 — iki kapsül: kurkuma özütü ve ibuprofen, doz, kör deney, süre.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "turmeric")} capa={[500, 440]} konum={[1500, 360]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ibuprofen,")} capa={[650, 650]} konum={[1500, 600]} metin="IBUPROFEN" renk={RENK.lacivert} />
        {/* tepsinin sağ altındaki sahte harf izleri kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1000, top: 700, width: 140, height: 90,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F8F5EC 0%, #F8F5EC 60%, rgba(248,245,236,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "half")} bitis={13.7} metin="TWO" x={1860} y={140} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "half") + 0.18} bitis={13.7} metin="CAPSULES" x={1860} y={230} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "1,500")} vurgu="1,500 MG" not="a day" x={1560} y={410} genislik={440} boyut={80} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "1,200")} vurgu="1,200 MG" not="a day" x={1560} y={650} genislik={440} boyut={80} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(2, "did not know")} ad="soru" x={1370} y={850} boyut={80} zemin={RENK.mercan} />
      <Not t={t} bas={K(2, "did not know") + 0.1} metin="PATIENTS DID NOT KNOW WHICH" x={1430} y={815} boyut={30} genislik={420} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "four weeks")} vurgu="4 WEEKS" x={1560} y={110} genislik={440} boyut={90} renk={RENK.koyuYesil} />
    </>
  );
};

export default S11;
