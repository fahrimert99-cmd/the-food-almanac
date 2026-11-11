// Sahne 51 — "Five": balık yemiyorsanız doktorunuza sorun
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 60, 1840])}>
        <Etiket t={t} bas={K(1, "eat fish")} capa={[620, 450]} konum={[640, 270]} metin="EAT FISH" renk={RENK.yesil} bitis={K(1, "over-the-counter")} />
        <Etiket t={t} bas={K(1, "capsule")} capa={[370, 720]} konum={[470, 915]} metin="OVER-THE-COUNTER CAPSULE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "five")} metin="FIVE" x={1860} y={170} boyut={64} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(1, "fish,")} metin="NO FISH?" x={1860} y={280} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "ask")} metin="ASK YOUR DOCTOR" x={1860} y={400} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={K(2, "doctor")} ad="soru" x={1230} y={398} zemin={RENK.altin} />
    </>
  );
};
export default S51;
