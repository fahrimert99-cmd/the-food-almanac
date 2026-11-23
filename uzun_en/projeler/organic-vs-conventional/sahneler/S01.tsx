// Sahne 1 — iki çalışma: Fransız kohort ve Stanford incelemesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "68,946");
  const tOrg = K(0, "organic");
  const t25 = K(0, "25");
  const tSt = K(1, "Stanford");
  const t237 = K(1, "237");
  const tFark = K(1, "no nutrition");
  const gec = K(1, "Yet") - 0.15; // ilk blok çıkışı
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={tOrg} bitis={gec} capa={[640, 470]} konum={[1250, 170]} metin="BIGGEST ORGANIC EATERS" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={120} bitis={gec} />
      {/* 1. cümle: örneklem ve sonuç */}
      <Baslik t={t} bas={tSayi} bitis={gec} metin="68,946" x={1860} y={370} boyut={150} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={tSayi + 0.2} bitis={gec} metin="FRENCH ADULTS" x={1860} y={455} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={t25 - 0.1} bitis={gec} satirlar={["–25%", "CANCER RISK?"]} x={1860} y={640} boyut={112} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.lacivert]} />
      {/* 2. cümle: Stanford incelemesi */}
      <Not t={t} bas={tSt} metin="STANFORD REVIEW" x={1860} y={290} hiza="sag" boyut={36} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={t237} metin="237" x={1860} y={430} boyut={170} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={t237 + 0.25} metin="STUDIES" x={1860} y={560} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tFark} metin="ALMOST NO NUTRITION DIFFERENCE" x={1860} y={660} hiza="sag" boyut={34} agirlik={800} genislik={640}
        renk={RENK.lacivert} />
    </>
  );
};

export default S01;
