// Sahne 4 — kanal tanıtımı + "sourdough nedir?" sorusu; başlıklar sağ üst boşlukta.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(1, "what sourdough");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(1, "sourdough actually")} capa={[1400, 700]} konum={[1400, 440]} metin="SOURDOUGH" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "The Food")} bitis={tSoru - 0.3} metin={MARKA.filigran} x={1850} y={190} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "This is")} bitis={tSoru - 0.3} metin="THIS IS" x={1850} y={110} boyut={30} hiza="sag" font="inter" aralik={8} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tSoru} satirlar={["WHAT IS", "SOURDOUGH?"]} x={1850} y={170} boyut={96} hiza="sag" />
    </>
  );
};

export default S04;
