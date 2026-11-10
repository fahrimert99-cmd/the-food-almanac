// Sahne 5 — idrar yolu: UTI tanımı, sonra tekrar eden enfeksiyonlar
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = s.cumleler[1].bas - 0.2;
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "urinary")} bitis={bit} capa={[747, 470]} konum={[1000, 330]} metin="KIDNEYS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "bacterial")} bitis={bit} capa={[640, 760]} konum={[1010, 720]} metin="BLADDER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cranberry")} capa={[1240, 880]} konum={[1520, 760]} metin="CRANBERRY JUICE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "UTI")} bitis={bit} metin="UTI" x={1440} y={230} boyut={150} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={K(0, "bacterial")} bitis={bit} metin="Bacterial infection of the urinary system" x={1440} y={330} hiza="orta" genislik={560} boyut={34} />
      <BaslikBlok t={t} bas={K(1, "infections")} satirlar={b.satirlar} x={1860} y={260} boyut={100} hiza="sag" />
      <Baslik t={t} bas={K(1, "prevent")} metin="PREVENT?" x={1860} y={540} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S05;
