// Sahne 11 — laboratuvar tezgâhı: "doğrudan test edilebilir".
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [120, 60, 1700], [200, 110, 1560])}>
        <Etiket t={t} bas={K(0, "can")} capa={[620, 560]} konum={[560, 230]} metin="COFFEE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "directly")} capa={[960, 600]} konum={[960, 200]} metin="WATER" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "tested")} bitis={K(1, "trial") - 0.1} metin="TESTED DIRECTLY" x={1840} y={190} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "trial")} metin="THE TRIAL →" x={1840} y={190} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S11;
