// Sahne 7 — ambalaj yazısı flavanol miktarını söylemez
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tIki = c[1].bas;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "flavanols")} bitis={tIki - 0.2} capa={[1133, 667]} konum={[1660, 780]} metin="HOW MANY FLAVANOLS?" renk={RENK.mercan} boyut={22} />
        <Etiket t={t} bas={K(1, "alike")} capa={[720, 693]} konum={[230, 780]} metin="LOOK ALIKE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "different.")} capa={[1133, 667]} konum={[1660, 780]} metin="VERY DIFFERENT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "dark chocolate")} bitis={tIki - 0.2} metin="“DARK CHOCOLATE”" x={1860} y={190} boyut={86} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "wrapper")} bitis={tIki - 0.2} metin="ON A WRAPPER" x={1860} y={270} boyut={36} hiza="sag" renk={RENK.altin} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "Two bars")} satirlar={["TWO BARS"]} x={1860} y={190} boyut={86} hiza="sag" renkler={[RENK.koyuYesil]} />
    </>
  );
};

export default S07;
