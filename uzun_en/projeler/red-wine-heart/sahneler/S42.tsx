// Sahne 42 — aile yemeği: masa üstündeki boşlukta iki başlık dizisi ve etiketler.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKadeh = K(0, "glass"), tAile = K(0, "family"), tFelaket = K(0, "disaster."), tSayma = K(1, "count"), tKanit = K(1, "evidence");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tKadeh} capa={[1757, 540]} konum={[1700, 390]} metin="ONE GLASS" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tAile} capa={[900, 650]} konum={[900, 410]} metin="FAMILY DINNER" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tFelaket - 0.3} bitis={tSayma - 0.3} metin="NOT A DISASTER" x={960} y={140} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tSayma} metin="COUNT ON IT" x={960} y={100} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tSayma + 0.18} metin="FOR YOUR HEART?" x={960} y={190} boyut={80} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tKanit} metin="the evidence doesn't back that up" x={960} y={270} boyut={38} hiza="orta" />
      <Ikon t={t} bas={tKanit + 0.2} ad="carpi" x={560} y={290} boyut={64} zemin={RENK.mercan} />
    </>
  );
};

export default S42;
