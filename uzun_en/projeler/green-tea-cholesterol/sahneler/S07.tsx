// Sahne 7 — bir fincanda ne kadar EGCG: USDA verisi, 70 mg/100 g, ≈165 mg.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUsda = K(1, "Department");
  const t70 = K(1, "70");
  const tSon = K(2, "That");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 90, 1760])}>
        <Etiket t={t} bas={K(0, "cup?")} bitis={tUsda - 0.2} capa={[560, 520]} konum={[1100, 280]} metin="ONE CUP?" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "100")} bitis={tSon - 0.2} capa={[1050, 810]} konum={[1450, 810]} metin="100 G OF TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "8-ounce")} capa={[560, 520]} konum={[1080, 560]} metin="8 OZ CUP" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={tUsda} bitis={tSon - 0.2} metin="USDA DATA" x={1860} y={230} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={t70} bitis={tSon - 0.2} vurgu="70 mg" not="EGCG per 100 g, average brew" x={1560} y={340} genislik={500} />
      <Baslik t={t} bas={tSon} metin="ONE 8-OUNCE CUP" x={1860} y={230} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={K(2, "165")} vurgu="≈165 mg" not="EGCG in an average brew" x={1560} y={340} genislik={500} />
    </>
  );
};

export default S07;
