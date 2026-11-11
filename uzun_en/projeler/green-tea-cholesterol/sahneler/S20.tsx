// Sahne 20 — kapsül dozu ≈ 5 fincan demlenmiş yeşil çay EGCG'si.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 80, 1640])}>
        <Etiket t={t} bas={K(1, "brewed")} bitis={9.2} capa={[560, 400]} konum={[1000, 160]} metin="BREWED GREEN TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "capsules")} capa={[440, 870]} konum={[860, 720]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={K(0, "large")} bitis={5.3} metin="A LARGE DOSE" x={1860} y={300} hiza="sag" boyut={64} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "about")} satirlar={[b.satirlar[0]]} x={1860} y={360} boyut={110} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "packed")} satirlar={[b.satirlar[1]]} x={1860} y={480} boyut={110} hiza="sag" renkler={[RENK.koyuYesil]} />
    </>
  );
};
export default S20;
