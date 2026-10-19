// Sahne 30 — beta-karoten: dondurulmuş havuç
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1790])} />
      <BaslikBlok t={t} bas={K(0, "Beta-carotene")} satirlar={b.satirlar} x={1860} y={170} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "worse")} metin={b.not!} x={1860} y={370} hiza="sag" boyut={36} />
      <Etiket t={t} bas={K(0, "frozen")} bitis={K(1, "In") + 0.3} capa={[600, 380]} konum={[1010, 560]} metin="FROZEN CARROTS" renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "2015")} />
      <Etiket t={t} bas={K(1, "fell")} capa={[760, 520]} konum={[1010, 560]} metin="FELL DRASTICALLY" renk={RENK.mercan} bitis={K(1, "depended")} />
      <Etiket t={t} bas={K(1, "depended")} capa={[1150, 830]} konum={[1040, 640]} metin="VARIES BY VEGETABLE" renk={RENK.altin} />
    </>
  );
};

export default S30;
