// Sahne 13 — insan çalışmaları: mikroskop + hücre mercek görüntüsü + tofu tabağı; sağ üstte sonuç başlığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1850])}>
        <Etiket t={t} bas={K(1, "breast")} capa={[1200, 280]} konum={[1180, 85]} metin="BREAST TISSUE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "isoflavone")} capa={[1120, 690]} konum={[1500, 590]} metin="ISOFLAVONES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "human")} satirlar={["HUMAN", "STUDIES"]} x={60} y={200} boyut={80} adim={0.2} />
      <Not t={t} bas={K(0, "reassuring.")} metin="MORE REASSURING" x={64} y={380} boyut={28} renk={RENK.altin} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "cell-multiplying")} satirlar={["NO CELL-", "MULTIPLYING"]} x={1860} y={230} boyut={66} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "combined")} metin="UNLIKE COMBINED HORMONE THERAPY" x={1860} y={400} boyut={26} hiza="sag" renk={RENK.lacivert} agirlik={800} genislik={480} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};
export default S13;
