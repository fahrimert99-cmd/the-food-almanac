import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S34: iki kaşık, farklı karışım
const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(2, "claim");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [80, 60, 1760])}>
        <Etiket t={t} bas={K(0, "MCT")} capa={[600, 720]} konum={[600, 560]} metin="MCT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "coconut")} capa={[1330, 700]} konum={[1590, 380]} metin="COCONUT OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "lauric")} capa={[1210, 790]} konum={[1090, 915]} metin="LAURIC ACID" renk={RENK.koyuYesil} boyut={26} />
        <Etiket t={t} bas={K(1, "longer")} capa={[1420, 790]} konum={[1560, 915]} metin="LONGER SATURATED FATS" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["DIFFERENT", "MIX"]} x={70} y={130} boyut={96} bitis={tA - 0.2} />
      <Baslik t={t} bas={tA} metin="DOESN'T CARRY OVER" x={960} y={150} boyut={88} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};
export default S34;
