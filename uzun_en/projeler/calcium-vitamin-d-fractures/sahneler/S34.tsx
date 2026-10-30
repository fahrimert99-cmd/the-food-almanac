// Sahne 34 — yoğurt 310 mg, süt 300 mg.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 25, 1800])}>
        <Etiket t={t} bas={K(0, "six-ounce")} bitis={c[1].bas + 0.3} capa={[400, 440]} konum={[360, 190]} metin="6 OZ YOGURT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Eight")} capa={[1000, 640]} konum={[1440, 760]} metin="8 OZ MILK" renk={RENK.yesil} />
        {/* yoğurt bloğu */}
        <Baslik t={t} bas={K(0, "yogurt")} bitis={bit} metin="YOGURT" x={1250} y={260} boyut={120} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "310")} bitis={bit} metin="310 MG" x={1250} y={400} boyut={150} renk={RENK.altin} />
        <Not t={t} bas={K(0, "310") + 0.1} bitis={bit} metin="six ounces, plain low-fat" x={1250} y={490} boyut={32} />
        {/* süt bloğu */}
        <Baslik t={t} bas={K(1, "milk")} metin="MILK" x={1250} y={260} boyut={120} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "300")} metin="300 MG" x={1250} y={400} boyut={150} renk={RENK.koyuYesil} />
        <Not t={t} bas={K(1, "300") + 0.1} metin="eight ounces" x={1250} y={490} boyut={32} />
      </Kamera>
    </>
  );
};

export default S34;
