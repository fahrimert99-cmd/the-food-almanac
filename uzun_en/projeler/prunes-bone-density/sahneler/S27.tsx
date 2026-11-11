// Sahne 27 — polifenoller; laboratuvar kabı ve hayvan kanıtı insan değildir
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const tLab = K(1, "lab");
  const b = s.meta.baslik?.satirlar ?? ["LAB DISHES,", "NOT PEOPLE"];
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kam}>
        <Etiket t={t} bas={K(0, "polyphenols")} bitis={tLab - 0.2} capa={[775, 440]} konum={[1450, 300]} metin="PLANT POLYPHENOLS" renk={RENK.koyuYesil} boyut={30} />
        <Etiket t={t} bas={K(1, "dishes")} capa={[330, 600]} konum={[330, 170]} metin="LAB DISH" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "animals")} capa={[870, 790]} konum={[1300, 790]} metin="ANIMALS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tLab} satirlar={b} x={1130} y={250} boyut={118} renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(1, "person")} ad="soru" x={1190} y={600} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={K(1, "tell")} metin="Cannot tell us what happens in a person" x={1260} y={565} genislik={480} boyut={34} />
    </>
  );
};

export default S27;
