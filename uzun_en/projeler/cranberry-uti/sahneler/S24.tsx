// Sahne 24 — Juthani-Mehta denemesi: 185 kadın, 1 yıl; kapsül ve plasebo şişeleri.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(1, "a year");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1820])}>
        {/* saat: "bir yıl" */}
        <Etiket t={t} bas={tYil} capa={[1010, 210]} konum={[1280, 190]} metin="EVERY DAY, 1 YEAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "capsules")} capa={[560, 600]} konum={[930, 450]} metin="CRANBERRY CAPSULES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "placebo")} capa={[790, 660]} konum={[1090, 700]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Manisha")} />
      <Baslik t={t} bas={K(1, "185")} metin="185 WOMEN," x={1860} y={400} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "nursing")} metin="NURSING HOMES" x={1860} y={530} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "average")} metin="average age 86" x={1860} y={600} hiza="sag" boyut={38} agirlik={800} />
    </>
  );
};

export default S24;
