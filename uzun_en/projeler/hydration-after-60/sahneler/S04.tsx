// Sahne 4 — Kanal tanıtımı + "ne zaman içeriz?" sorusu; musluk ortada, yazılar iki yanda.
import React from "react";
import { Baslik, BaslikBlok, Kamera, MARKA, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const [m1, m2] = ["THE FOOD", "ALMANAC"];
  return (
    <>
      <Kamera gorsel="tam/04" pencere={pen} />
      <Parcaciklar t={t} bas={K(1, "decides")} kaynak={[966, 380]} hedef={[966, 560]} adet={12} aralik={0.14} omur={0.9}
        yayilma={6} kavis={0} hedefYayilma={20} renk="#8FB4C9" boyut={5} tohum="musluk" />
      <Baslik t={t} bas={K(0, "food")- 0.3} bitis={c[1].bas} metin={m1} x={60} y={200} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "almanac")} bitis={c[1].bas} metin={m2} x={60} y={310} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "almanac") + 0.3} bitis={c[1].bas} metin={MARKA.slogan} x={64} y={390} boyut={28} genislik={380} />
      <Baslik t={t} bas={K(1, "how your body")} metin="HOW YOUR BODY DECIDES" x={1860} y={210} boyut={32} hiza="sag" renk={RENK.altin} font="inter" aralik={4} />
      <BaslikBlok t={t} bas={K(1, "time to drink")} satirlar={["TIME TO", "DRINK?"]} x={1860} y={320} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S04;
