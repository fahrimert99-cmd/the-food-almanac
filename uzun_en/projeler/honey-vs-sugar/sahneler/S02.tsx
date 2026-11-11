// Sahne 2 — küçük, zayıf, balın türüne bağlı
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "honey.")} capa={[400, 640]} konum={[420, 150]} metin="THE HONEY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "small,")} metin="SMALL." x={1860} y={330} boyut={130} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "weak,")} metin="WEAK." x={1860} y={480} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "depended")} metin="and it depended on the honey" x={1860} y={590} hiza="sag" boyut={34} genislik={520} />
    </>
  );
};

export default S02;
