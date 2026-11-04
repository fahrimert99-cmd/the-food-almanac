// Sahne 2 — karışık sonuçlar: iki somun yan yana, sağ üstte uyarı başlığı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [100, 70, 1700])}>
        {/* alttaki imza kalıntısını kâğıt yama örter */}
        <div style={{ position: "absolute", left: 840, top: 950, width: 260, height: 130,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "sourdough")} bitis={6.4} capa={[640, 560]} konum={[820, 380]} metin="SOURDOUGH" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "second trial")} metin="MIXED" x={70} y={150} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "second trial") + 0.18} metin="RESULTS" x={70} y={265} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "no average")} bitis={K(0, "the word")} vurgu="NO" not="AVERAGE DIFFERENCE" x={1450} y={130} genislik={440} renk={RENK.mercan} />
      <Ikon t={t} bas={K(0, "guarantees")} ad="uyari" x={1180} y={190} zemin={RENK.altin} />
      <Not t={t} bas={K(0, "guarantees")} metin="LITTLE GUARANTEED" x={1850} y={140} hiza="sag" boyut={50} agirlik={800} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "a US label")} metin="ON A US LABEL" x={1850} y={205} hiza="sag" boyut={44} agirlik={800} />
    </>
  );
};

export default S02;
