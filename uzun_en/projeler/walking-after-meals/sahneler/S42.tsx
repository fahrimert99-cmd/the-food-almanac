// Sahne 42 — kapanış cümlesi: ücretsiz, düşük çabalı bir alışkanlık; numara değil.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFree = K(0, "free,"), tHabit = K(0, "habit"), tGood = K(0, "good"), tNot = K(1, "Not");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={tHabit} capa={[1640, 790]} konum={[1700, 640]} metin="THE HABIT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tFree} metin="FREE, LOW-EFFORT HABIT" x={960} y={150} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tGood} metin="helps a good day work a little better" x={960} y={218} hiza="orta" boyut={40} agirlik={700} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1740} y={330} zemin={RENK.mercan} />
      <Baslik t={t} bas={tNot + 0.15} metin="NOT A" x={1740} y={430} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tNot + 0.3} metin="TRICK" x={1740} y={495} boyut={64} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S42;
