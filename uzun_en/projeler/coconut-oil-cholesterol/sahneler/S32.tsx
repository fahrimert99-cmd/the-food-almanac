import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S32: MCT yağı ve hindistancevizi yağı yan yana
const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tM = K(1, "MCTs,"), tC = K(1, "coconut"), tK = K(2, "caprylic");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [90, 50, 1740])}>
        <Etiket t={t} bas={tM} bitis={tK - 0.2} capa={[640, 560]} konum={[930, 330]} metin="MCT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={tC} capa={[1240, 830]} konum={[1560, 600]} metin="COCONUT OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tK} capa={[630, 520]} konum={[1020, 330]} metin="CAPRYLIC ACID" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "capric")} capa={[630, 620]} konum={[1020, 440]} metin="CAPRIC ACID" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "catch")} satirlar={["NOT THE", "SAME THING"]} x={1860} y={190} boyut={100} hiza="sag" bitis={K(2, "MCT") - 0.1} />
      <Not t={t} bas={K(2, "shortest")} metin="THE TWO SHORTEST MEDIUM-CHAIN FATS" x={900} y={150} boyut={38} agirlik={800} />
    </>
  );
};
export default S32;
