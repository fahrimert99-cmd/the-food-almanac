// Sahne 33 — AREDS2 formülü: sağda içerik listesi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { bas: K(0, "500"), metin: "VITAMIN C · 500 MG", renk: RENK.yesil },
    { bas: K(0, "400"), metin: "VITAMIN E · 400 IU", renk: RENK.yesil },
    { bas: K(0, "80"), metin: "ZINC · 80 MG", renk: RENK.altin },
    { bas: K(0, "2 milligrams of copper"), metin: "COPPER · 2 MG", renk: RENK.altin },
    { bas: K(0, "10 milligrams"), metin: "LUTEIN · 10 MG", renk: RENK.koyuYesil },
    { bas: K(0, "2 milligrams of zeaxanthin"), metin: "ZEAXANTHIN · 2 MG", renk: RENK.koyuYesil },
  ];
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1800])}>
        <Etiket t={t} bas={K(0, "softgels")} capa={[387, 773]} konum={[240, 560]} metin="SOFTGELS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["THE AREDS2", "FORMULA"]} x={1240} y={190} boyut={84} adim={0.18} />
      <Liste t={t} ogeler={ogeler} x={1240} y={390} aralik={76} boyut={34} isaret="nokta" genislik={620} />
      <Not t={t} bas={K(0, "usually")} metin="usually two softgels a day" x={1240} y={868} boyut={32} genislik={620} />
    </>
  );
};

export default S33;
