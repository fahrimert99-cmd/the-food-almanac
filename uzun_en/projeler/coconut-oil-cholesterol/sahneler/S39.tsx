import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S39: Sacks: düzenli pişirme yağı olarak kullanılmamalı
const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [30, 0, 1860], [90, 0, 1740])}>
        <Etiket t={t} bas={K(0, "coconut")} capa={[1360, 640]} konum={[1360, 440]} metin="COCONUT OIL" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="FRANK SACKS · EDITORIAL" bas={K(0, "Frank")} />
      <BaslikBlok t={t} bas={K(0, "should")} satirlar={["NOT A REGULAR", "COOKING OIL"]} x={960} y={190} boyut={96} hiza="orta" />
      <Ikon t={t} bas={K(0, "not")} ad="carpi" x={1100} y={440} zemin={RENK.mercan} boyut={76} />
    </>
  );
};
export default S39;
