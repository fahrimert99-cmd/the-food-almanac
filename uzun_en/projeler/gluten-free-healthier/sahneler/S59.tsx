// Sahne 59 — önce test, sonra tabak (sağ üst boşlukta yazı, tabakta etiketler)
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <BaslikBlok t={t} bas={K(0, "get tested")} satirlar={["GET TESTED", "FOR CELIAC DISEASE"]} x={1860} y={175} boyut={78} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} bitis={4.6} />
      <Not t={t} bas={K(0, "while you still eat it")} bitis={4.6} metin="WHILE YOU STILL EAT GLUTEN" x={1860} y={335} hiza="sag" boyut={34} agirlik={800} />
      <Etiket t={t} bas={K(1, "whole,")} bitis={8.6} capa={[420, 640]} konum={[330, 440]} metin="WHOLE FOODS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "naturally gluten-free")} bitis={10.2} capa={[990, 600]} konum={[1130, 330]} metin="NATURALLY GLUTEN-FREE" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "whole grains")} capa={[1507, 560]} konum={[1500, 330]} metin="KEEP WHOLE GRAINS" renk={RENK.altin} />
    </>
  );
};

export default S59;
