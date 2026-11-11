// Sahne 41 — eritritol nedir: kâse, kaşık, paket. Üstte başlık, sağda ürün etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "Erythritol")} capa={[950, 320]} konum={[740, 120]} metin="ERYTHRITOL" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "sugar-free")} capa={[1330, 560]} konum={[1500, 420]} metin="SUGAR-FREE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "low-carb")} capa={[1500, 680]} konum={[1700, 820]} metin="LOW-CARB" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ingredient")} capa={[1280, 770]} konum={[1250, 900]} metin="ON INGREDIENT LISTS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "sugar alcohol")} bitis={bit0} metin="A SUGAR ALCOHOL" x={1100} y={170} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S41;
