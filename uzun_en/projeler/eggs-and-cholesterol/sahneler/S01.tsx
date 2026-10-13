// Sahne 1 — Harvard kohortu: günde bir yumurta, 32 yıl.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGec = K(2, "Those who") - 0.2;
  const tYumurta = K(2, "one egg a day");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 36, 1780])}>
        <Etiket t={t} bas={K(0, "eggs")} bitis={K(1, "Harvard") + 0.3} capa={[640, 320]} konum={[1090, 200]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={tYumurta} capa={[1530, 780]} konum={[1560, 560]} metin="ONE EGG A DAY" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(1, "Harvard")} bitis={tGec} satirlar={["EGGS,", "32 YEARS"]} x={1860} y={170} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "215,000")} bitis={tGec} vurgu="215,000" not="people followed" x={1640} y={400} genislik={400} />
      <Baslik t={t} bas={K(2, "no clear")} metin="NO CLEAR" x={1860} y={190} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "no clear") + 0.18} metin="EXTRA RISK" x={1860} y={300} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "heart disease")} metin="HEART DISEASE" x={1860} y={390} hiza="sag" boyut={38} agirlik={800} />
      <Not t={t} bas={K(2, "stroke")} metin="OR STROKE" x={1860} y={440} hiza="sag" boyut={38} agirlik={800} />
    </>
  );
};

export default S01;
