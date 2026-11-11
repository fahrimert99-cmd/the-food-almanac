// Sahne 57 — özet: kapsüller vs. kalp
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(0, "plain");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 26, 1840])}>
        <Etiket t={t} bas={K(0, "plain")} capa={[660, 640]} konum={[560, 430]} metin="FISH OIL CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heart")} capa={[850, 190]} konum={[480, 150]} metin="HEART ATTACKS, STROKES" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "older")} bitis={bit + 0.5} metin="OLDER ADULTS" x={100} y={130} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "diabetes,")} bitis={bit + 0.5} metin="WITH DIABETES" x={100} y={215} boyut={76} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(0, "did")} ad="carpi" x={1090} y={215} boyut={84} zemin={RENK.mercan} />
      <Baslik t={t} bas={K(0, "more")} metin="MORE ATRIAL" x={1860} y={150} boyut={70} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(0, "atrial")} metin="FIBRILLATION" x={1860} y={236} boyut={70} renk={RENK.mercan} hiza="sag" />
    </>
  );
};
export default S57;
