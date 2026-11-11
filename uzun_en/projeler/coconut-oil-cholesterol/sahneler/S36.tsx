import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S36: kolesterol sayıları, kalp krizi değil
const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [20, 30, 1830], [80, 60, 1760])}>
        <Etiket t={t} bas={K(0, "cholesterol")} capa={[1330, 720]} konum={[1330, 480]} metin="CHOLESTEROL NUMBERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "next")} capa={[420, 730]} konum={[560, 520]} metin="NEXT: HEART DISEASE" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["NUMBERS,", "NOT EVENTS"]} x={70} y={150} boyut={96} />
      <Ikon t={t} bas={K(0, "not")} ad="carpi" x={1130} y={290} zemin={RENK.mercan} boyut={80} />
      <Not t={t} bas={K(0, "heart")} metin="HEART ATTACKS" x={1190} y={262} boyut={46} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S36;
