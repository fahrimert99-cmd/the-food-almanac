// Sahne 30 — tabletler: sirke tabletleri sudan iyi değildi; ürünlerde elma sirkesi olup olmadığı belirsiz.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUrun = K(2, "eight tablet products");
  const bit = tUrun - 0.2;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1760])}>
        <Etiket t={t} bas={K(1, "tablet")} bitis={bit} capa={[520, 650]} konum={[340, 400]} metin="VINEGAR TABLETS" renk={RENK.altin} />
        <Etiket t={t} bas={tUrun} capa={[520, 700]} konum={[340, 250]} metin="8 TABLET PRODUCTS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "unsure")} capa={[1130, 420]} konum={[1520, 160]} metin="ACV PRESENT? UNSURE" renk={RENK.mercan} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <VurguRozet t={t} bas={K(1, "no better")} bitis={bit} vurgu="NO BETTER" not="whole vinegar tablets vs. water" x={1640} y={130}
        genislik={460} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S30;
