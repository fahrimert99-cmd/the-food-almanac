// Sahne 12 — yaşla azalan mide asidi; atrofik gastrit mide astarını inceltir.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Görseldeki sahte alt yazıları (y≈957) kâğıt rengi yamayla örter
const Yama: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <div style={{ position: "absolute", left: x - 340, top: y - 80, width: 680, height: 160,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
);

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAz = K(0, "less"), tGastrit = K(1, "atrophic"), tUzun = K(1, "long-term"), tIncelir = K(1, "thins");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1820])}>
        <Yama x={540} y={965} />
        <Yama x={1380} y={965} />
        <Etiket t={t} bas={tGastrit} bitis={tUzun - 0.1} capa={[1380, 760]} konum={[1380, 900]} metin="ATROPHIC GASTRITIS" renk={RENK.mercan} />
        <Etiket t={t} bas={tUzun} capa={[1380, 760]} konum={[1380, 900]} metin="LONG-TERM INFLAMMATION" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tAz} bitis={tGastrit - 0.1} metin="LESS ACID" x={70} y={110} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "With age")} bitis={tGastrit - 0.1} metin="WITH AGE" x={74} y={185} boyut={36} renk={RENK.altin} font="inter" aralik={4} />
      <BaslikBlok t={t} bas={tIncelir} satirlar={s.meta.baslik?.satirlar ?? []} x={960} y={70} boyut={78} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} satirArasi={1.0} />
    </>
  );
};

export default S12;
