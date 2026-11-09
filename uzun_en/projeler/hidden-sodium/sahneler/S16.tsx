// Sahne 16 — tuzluk büyük resmin küçük parçası: kamera yavaşça geri çekilir, sol boş kâğıtta iki satır başlık.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [120, 50, 1680], [0, 0, 1920])}>
        <Etiket t={t} bas={K(0, "shaker")} capa={[1000, 700]} konum={[1520, 850]} metin="TABLE SHAKER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "small part")} metin="A SMALL PART" x={70} y={790} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "bigger")} metin="OF A BIGGER PICTURE" x={70} y={880} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};

export default S16;
