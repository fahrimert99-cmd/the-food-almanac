// Sahne 4 — mutfak masası; kanal adı ve sebze etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "start")} capa={[690, 600]} konum={[300, 330]} metin="CARROTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "heat")} capa={[850, 400]} konum={[820, 250]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "actually")} capa={[1070, 600]} konum={[1000, 880]} metin="TOMATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "vegetable")} capa={[1060, 440]} konum={[1230, 240]} metin="SPINACH" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin={MARKA.filigran} x={70} y={130} boyut={84} renk={RENK.koyuYesil} bitis={K(1, "start") + 0.5} />
    </>
  );
};

export default S04;
