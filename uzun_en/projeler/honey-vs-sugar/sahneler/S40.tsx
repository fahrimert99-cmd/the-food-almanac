// Sahne 40 — iki yemek kaşığı bal: %80 şeker, 64 kalori, 34 g şeker.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tIki = K(1, "Two tablespoons");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [90, 90, 1740])}>
        <Etiket t={t} bas={K(0, "a tablespoon")} capa={[367, 777]} konum={[262, 520]} metin="TABLESPOON 1" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tIki + 0.2} capa={[1133, 880]} konum={[1180, 725]} metin="TABLESPOON 2" renk={RENK.altin} boyut={26} />
      </Kamera>
      {/* 1. cümle: yüzde 80 şeker, 64 kalori */}
      <BaslikBlok t={t} bas={K(0, "80 percent") - 0.3} bitis={c[1].bas - 0.2} satirlar={["HONEY IS", "≈80% SUGAR"]} x={1860} y={190} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "64")} bitis={c[1].bas - 0.2} vurgu="64" not="calories · 1 tablespoon" x={1560} y={410} genislik={400} />
      {/* 2. cümle: iki yemek kaşığı */}
      <BaslikBlok t={t} bas={tIki} satirlar={["2 TABLESPOONS"]} x={1860} y={190} boyut={92} hiza="sag" renkler={[RENK.lacivert]} />
      <Not t={t} bas={K(1, "close to the amount")} metin="CLOSE TO THE TYPICAL TRIAL DOSE" x={1860} y={290} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "34")} vurgu="34 g" not="sugar · about 130 calories" x={1560} y={410} genislik={420} />
    </>
  );
};

export default S40;
