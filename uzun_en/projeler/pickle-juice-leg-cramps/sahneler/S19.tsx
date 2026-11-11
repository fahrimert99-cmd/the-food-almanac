// Sahne 19 — bulmaca: 5 dk sonra kan testlerinde az değişim, yani yenilenme değil
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRef = K(2, "refill");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1800])}>
        <Etiket t={t} bas={K(1, "minutes")} bitis={tRef} capa={[440, 250]} konum={[880, 250]} metin="5 MINUTES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "blood")} capa={[400, 650]} konum={[1130, 560]} metin="BLOOD TESTS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "juice")} capa={[760, 740]} konum={[1130, 800]} metin="PICKLE JUICE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "puzzle.")} bitis={tRef} metin="THE PUZZLE" x={1860} y={250} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "little")} bitis={tRef} metin="LITTLE CHANGE" x={1860} y={380} boyut={90} hiza="sag" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tRef} satirlar={["NOT A", "REFILL"]} x={1860} y={250} boyut={130} hiza="sag" />
      <Not t={t} bas={tRef + 0.5} metin="LITTLE CHANGE IN BLOOD TESTS AFTER 5 MINUTES" x={1860} y={660} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} genislik={560} />
    </>
  );
};

export default S19;
