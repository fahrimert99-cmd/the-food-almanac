// Sahne 12 — klinik masası: kâğıtlar (anket) ve çay; yıllarca takip. Kâğıt üstündeki sahte işaretler yamalı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, Not } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; r: number }> = ({ x, y, r }) => (
  <div style={{ position: "absolute", left: x - r, top: y - r, width: 2 * r, height: 2 * r,
    background: `radial-gradient(circle, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
);

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "Older") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [60, 40, 1780])}>
        <Yama x={738} y={518} r={60} />
        <Yama x={500} y={620} r={60} />
        <Etiket t={t} bas={K(0, "Rush")} bitis={cik} capa={[1260, 600]} konum={[1580, 760]} metin="RUSH PROJECT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "food questionnaires")} capa={[360, 420]} konum={[420, 150]} metin="FOOD QUESTIONNAIRES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "memory tests")} capa={[1010, 610]} konum={[1000, 120]} metin="MEMORY TESTS" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Aging")} satirlar={["YEARS OF", "FOLLOW-UP"]} x={1860} y={220} boyut={84} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} bitis={K(1, "year after")} />
      <Not t={t} bas={K(1, "year after")} x={1860} y={220} hiza="sag" boyut={64} agirlik={800} metin="YEAR AFTER YEAR" />
    </>
  );
};

export default S12;
