// Sahne 3 — sağda başlık, solda gerçek nesne etiketleri, sonda "yüksek doz" notu.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "supplements")} capa={[780, 770]} konum={[1130, 860]} metin="TABLETS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "orange")} capa={[440, 330]} konum={[1000, 180]} metin="ORANGE JUICE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={b.satirlar} x={1860} y={400} boyut={104} hiza="sag" />
      <Ikon t={t} bas={K(0, "high")} ad="uyari" x={1330} y={690} boyut={80} zemin={RENK.altin} />
      <Not t={t} bas={K(0, "high")} metin="HIGH DOSES" x={1860} y={662} boyut={52} hiza="sag" agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S03;
