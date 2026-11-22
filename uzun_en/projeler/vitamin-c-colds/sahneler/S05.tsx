// Sahne 5 — C vitamini kaynakları: üst solda boş kâğıtta başlıklar, gerçek gıdalara etiketler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "Citrus") - 0.2;
  const bitE = K(1, "orange") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(1, "Citrus")} bitis={bitE} capa={[453, 587]} konum={[230, 330]} metin="CITRUS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "peppers")} bitis={bitE} capa={[960, 560]} konum={[620, 330]} metin="PEPPERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "strawberries")} bitis={bitE} capa={[467, 840]} konum={[215, 470]} metin="STRAWBERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "broccoli")} bitis={bitE} capa={[1300, 200]} konum={[1000, 60]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "orange")} capa={[740, 790]} konum={[300, 200]} metin="ORANGE JUICE" renk={RENK.altin} boyut={34} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "nutrient")} bitis={bit} satirlar={["NEEDED", "EVERY DAY"]} x={80} y={150} boyut={100} />
      <Not t={t} bas={K(0, "doesn't")} bitis={bit} metin="YOUR BODY DOESN'T MAKE ITS OWN" x={80} y={370} boyut={36} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S05;
