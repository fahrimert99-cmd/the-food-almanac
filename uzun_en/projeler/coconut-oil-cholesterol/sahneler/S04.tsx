import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sahne 4 — kanal adı + kavanoz callout
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "jar")} capa={[880, 720]} konum={[250, 400]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "The")} metin="THE FOOD ALMANAC" x={70} y={120} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Let's")} metin="WHAT'S IN THE JAR?" x={70} y={190} boyut={30} agirlik={800} renk={RENK.altin} />
    </>
  );
};
export default S04;
