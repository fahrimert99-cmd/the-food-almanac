// Sahne 2 — iki şişe ve kalp; sağda başlıklar.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "Why") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [20, 60, 1650], [90, 80, 1500])}>
        <Etiket t={t} bas={K(0, "nothing")} capa={[770, 800]} konum={[1130, 820]} metin="NO HEART EFFECT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "big")} bitis={gec} metin="BIG TRIAL" x={1860} y={250} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "male")} bitis={gec} metin="MALE DOCTORS" x={1860} y={370} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      {(s.meta.baslik?.satirlar ?? ["MIXED", "RESULTS"]).map((m, k) => (
        <Baslik key={m} t={t} bas={K(1, k === 0 ? "mixed" : "picture")} metin={m} x={1860} y={250 + k * 130} boyut={120} hiza="sag"
          renk={k === 0 ? RENK.lacivert : RENK.koyuYesil} />
      ))}
      <Ikon t={t} bas={K(1, "picture")} ad="soru" x={1700} y={560} zemin={RENK.altin} />
    </>
  );
};

export default S02;
