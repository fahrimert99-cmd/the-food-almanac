// Sahne 2 — iki özdeş tabak: sakin üst başlık ve soru simgesi.
import React from "react";
import { Baslik, Ikon, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "randomized trial");
  const tFark = K(0, "different story");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 0, 1800])} />
      {/* üst şeritte kâğıt zemin: başlık okunaklı kalsın */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 215,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.9)} 65%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.1} bitis={tTrial - 0.1} metin="BUT A LATER..." x={960} y={110} boyut={76} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={tTrial} bitis={tFark - 0.1} metin="RANDOMIZED TRIAL" x={960} y={110} boyut={76} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={tFark} metin="A DIFFERENT STORY" x={960} y={110} boyut={76} hiza="orta" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tFark} ad="soru" x={960} y={770} boyut={100} zemin={RENK.altin} />
    </>
  );
};

export default S02;
