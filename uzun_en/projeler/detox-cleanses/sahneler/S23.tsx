// Sahne 23 — kilo kaybı gerçek ama sebep: daha az kalori. Etiketler + sağ üstte başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [40, 40, 1840], [150, 110, 1660]);
  const tK = K(1, "fewer calories"), tGeri = K(1, "the reviews");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={cam}>
        <Etiket t={t} bas={K(0, "weight loss")} bitis={2.4} capa={[1270, 820]} konum={[1560, 560]} metin="BATHROOM SCALE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "juice,")} bitis={tK + 1.5} capa={[780, 330]} konum={[330, 230]} metin="MOSTLY JUICE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tK} bitis={tGeri - 0.3} satirlar={["FEWER", "CALORIES"]} x={1860} y={200} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "simplest")} bitis={tGeri - 0.3} metin="THE SIMPLEST EXPLANATION" x={1860} y={440} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tGeri} satirlar={["WEIGHT TENDS", "TO COME BACK"]} x={1860} y={200} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tGeri + 0.4} metin="WHAT THE REVIEWS SAY" x={1860} y={420} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S23;
