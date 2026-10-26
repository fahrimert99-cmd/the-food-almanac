// Sahne 45 — iki: asit azaltıcılar. Rafta PPI ve H2 etiketleri, sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOtc = K(1, "over");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        <Etiket t={t} bas={K(1, "ppi")} capa={[350, 270]} konum={[690, 210]} metin="PPI" renk={RENK.koyuYesil} boyut={34} />
        <Etiket t={t} bas={K(1, "h2")} capa={[240, 880]} konum={[780, 880]} metin="H2 BLOCKER" renk={RENK.altin} boyut={34} />
        <Etiket t={t} bas={tOtc} capa={[400, 830]} konum={[960, 640]} metin="OVER THE COUNTER" renk={RENK.mercan} boyut={34} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik!.satirlar} x={1000} y={200} boyut={120} />
      <Not t={t} bas={K(1, "years")} metin="FOR YEARS" x={1000} y={450} boyut={56} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(1, "without")} metin="MANY BUY WITHOUT A PRESCRIPTION" x={1000} y={740} boyut={42} genislik={900} agirlik={800} />
    </>
  );
};

export default S45;
