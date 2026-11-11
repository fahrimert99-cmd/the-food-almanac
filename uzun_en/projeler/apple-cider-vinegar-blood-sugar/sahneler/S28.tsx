// Sahne 28 — ultrason sonucu: mide boşalması medyan %27'den %17'ye düştü (pirinç muhallebisi sonrası).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1800])}>
        <Etiket t={t} bas={K(0, "ultrasound")} bitis={K(0, "stomach emptying") - 0.2} capa={[255, 190]} konum={[1000, 62]} metin="ULTRASOUND" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "rice pudding")} bitis={K(0, "stomach emptying") - 0.2} capa={[790, 585]} konum={[1180, 590]} metin="RICE PUDDING MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "vinegar")} capa={[890, 340]} konum={[1160, 340]} metin="VINEGAR" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "stomach emptying")} satirlar={b.satirlar} x={1860} y={170} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "27")} vurgu={b.vurgu!} not={b.not} x={1560} y={470} genislik={560} boyut={104} />
      <Not t={t} bas={K(1, "did slow")} metin="VINEGAR DID SLOW THE STOMACH" x={1860} y={760} hiza="sag" boyut={40} agirlik={800} />
    </>
  );
};

export default S28;
