// Sahne 28 — yayın yanlılığı: dergiler, bal kavanozu, büyüteç
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSigns = K(1, "signs");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [120, 120, 1700])} />
      <Etiket t={t} bas={K(0, "publication")} capa={[760, 660]} konum={[1010, 180]} metin="PUBLICATION BIAS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "positive")} bitis={tSigns - 0.1} satirlar={["POSITIVE STUDIES", "GET PUBLISHED", "MORE OFTEN"]} x={1010} y={340} boyut={72}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={tSigns} metin="SIGNS OF BIAS" x={1010} y={380} boyut={104} renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "fasting")} capa={[1280, 900]} konum={[1450, 700]} metin="FASTING GLUCOSE" renk={RENK.yesil} />
    </>
  );
};

export default S28;
