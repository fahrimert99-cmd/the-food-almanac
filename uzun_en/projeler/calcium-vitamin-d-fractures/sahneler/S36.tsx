// Sahne 36 — takviyeli besinler: bitki sütü, portakal suyu, lahana.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b1 = c[1].bas - 0.2, b2 = K(2, "Eight") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Baslik t={t} bas={K(0, "Fortified")} bitis={b1} metin="FORTIFIED" x={1250} y={130} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
        <Baslik t={t} bas={K(0, "foods")} bitis={b1} metin="FOODS COUNT" x={1250} y={235} boyut={100} renk={RENK.lacivert} hiza="orta" />
        <Etiket t={t} bas={K(1, "soy,")} bitis={b2} capa={[640, 330]} konum={[800, 130]} metin="PLANT MILK" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "orange")} bitis={b2} capa={[960, 440]} konum={[1120, 150]} metin="ORANGE JUICE" renk={RENK.altin} />
        <VurguRozet t={t} bas={K(1, "300")} bitis={b2} vurgu="≈ 300 MG" not="eight ounces" x={1560} y={110} boyut={80} genislik={420} />
        <Etiket t={t} bas={K(2, "collard")} capa={[1500, 610]} konum={[1590, 400]} metin="FROZEN COLLARDS" renk={RENK.yesil} />
        <VurguRozet t={t} bas={K(2, "360")} vurgu="≈ 360 MG" not="eight ounces" x={1560} y={110} boyut={80} genislik={420} renk={RENK.koyuYesil} />
      </Kamera>
    </>
  );
};

export default S36;
