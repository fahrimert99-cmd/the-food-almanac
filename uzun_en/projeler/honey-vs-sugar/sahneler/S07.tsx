// Sahne 7 — bitki bileşikleri, sıçan çalışmaları, kavanoz = çoğunlukla şeker
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // alt köşelerdeki sahte yazı/imza kadraj dışında kalır (y < 1012, x 60–1860)
  const pencere = kameraYolu(t, s.sure, [60, 0, 1800], [100, 30, 1700]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pencere}>
        <Etiket t={t} bas={K(0, "plant")} bitis={6.7} capa={[400, 640]} konum={[640, 170]} metin="PLANT COMPOUNDS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "jar")} capa={[760, 760]} konum={[1150, 420]} metin="JAR OF HONEY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "suggest")} bitis={6.6} metin="MAY MATTER" x={1860} y={200} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "rats,")} bitis={9.1} metin="MUCH IN RATS" x={1860} y={200} boyut={110} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "By")} metin="BY WEIGHT:" x={1860} y={200} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "mainly")} metin="MAINLY SUGAR" x={1860} y={310} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S07;
