// Sahne 5 — tabak, kapsüller ve şişe; etiket zinciri ve "ekle, yerine koyma" başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])}>
        <Etiket t={t} bas={K(0, "one pill")} bitis={K(0, "vitamins")} capa={[830, 755]} konum={[250, 800]} metin="ONE PILL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "vitamins")} bitis={K(0, "single")} capa={[1260, 600]} konum={[1640, 830]} metin="VITAMINS + MINERALS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "single")} bitis={K(1, "It's")} capa={[950, 740]} konum={[250, 800]} metin="SINGLE DAILY DOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "meal")} capa={[1450, 360]} konum={[1620, 170]} metin="MEAL PATTERN" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "add")} metin="ADD TO" x={50} y={135} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT REPLACE" x={50} y={228} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S05;
