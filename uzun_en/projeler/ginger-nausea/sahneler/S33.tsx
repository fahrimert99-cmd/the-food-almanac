// Sahne 33 — çay ve taze zencefil: gram belirsiz.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHayir = K(1, "nobody");
  const tGram = K(1, "grams");
  const tDeger = K(2, "depends");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* 1. cümle: gerçek zencefil */}
        <Etiket t={t} bas={K(0, "tea")} bitis={tHayir} capa={[700, 330]} konum={[1160, 150]} metin="GINGER TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fresh")} bitis={tHayir} capa={[1230, 640]} konum={[1620, 330]} metin="FRESH GINGER" renk={RENK.yesil} />
        {/* 3. cümle: neye bağlı */}
        <Etiket t={t} bas={K(2, "much root")} capa={[1200, 560]} konum={[1600, 250]} metin="HOW MUCH ROOT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "long")} capa={[760, 340]} konum={[1130, 130]} metin="HOW LONG IT STEEPS" renk={RENK.altin} />
      </Kamera>
      {/* 2. cümle: kaç gram? */}
      <Baslik t={t} bas={tGram - 0.2} bitis={tDeger} metin="HOW MANY GRAMS?" x={1240} y={170} boyut={96} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S33;
