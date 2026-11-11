// Sahne 36 — "Helps, not perfect": %30 rozeti, sonra iki maddelik sonuç listesi. Görselde kavanoz solda, yazı sağda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCik = K(2, "So") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [60, 90, 1780])}>
        <Etiket t={t} bas={K(1, "fortified-food")} bitis={tCik} capa={[300, 700]} konum={[800, 430]} metin="FORTIFIED FOODS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.25} bitis={tCik} satirlar={["HELPS,"]} x={1860} y={190} boyut={110} hiza="sag" />
      <BaslikBlok t={t} bas={K(0, "perfect")} bitis={tCik} satirlar={["NOT PERFECT"]} x={1860} y={310} boyut={110} hiza="sag"
        renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "30")} bitis={tCik} vurgu="30%" not="low, even with regular fortified foods and atrophic gastritis"
        x={1590} y={450} genislik={500} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" x={1020} y={250} aralik={150} boyut={38} genislik={840}
        ogeler={[
          { bas: K(2, "food"), metin: "FOOD ALONE MAY NOT SOLVE IT", renk: RENK.altin },
          { bas: K(2, "blood"), metin: "A BLOOD TEST SHOWS WHERE YOU STAND", renk: RENK.yesil },
        ]} />
    </>
  );
};

export default S36;
