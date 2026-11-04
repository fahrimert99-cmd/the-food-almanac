// Sahne 20 — tam buğday ekşi mayalı: en düşük yanıt
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLow = K(0, "lowest"), tFlour = K(1, "flour"), tFerm = K(1, "fermentation");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tFlour} capa={[1290, 700]} konum={[1580, 450]} metin="WHOLEMEAL FLOUR" renk={RENK.altin} />
        <Etiket t={t} bas={tFerm} capa={[420, 480]} konum={[240, 110]} metin="FERMENTATION" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={s.meta.baslik!.satirlar} x={1860} y={190} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={tLow} bitis={tFlour - 0.3} vurgu="LOWEST" not="glucose + insulin, of the four" x={1560} y={400} genislik={440} boyut={80} />
    </>
  );
};
export default S20;
