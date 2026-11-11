// Sahne 35 — AICR: bütün soya yiyecekleri / protein tozu
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBen = K(0, "beneficial"), tNot = K(0, "notes");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])} />
      <KaynakEtiketi t={t} metin="AICR" bas={K(0, "Institute")} />
      {/* üst orta: sırayla üç başlık */}
      <Baslik t={t} bas={K(0, "whole")} bitis={tBen} metin="WHOLE SOY FOODS" x={960} y={130} boyut={88} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBen} bitis={tNot} metin="BENEFICIAL" x={960} y={130} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(0, "lack")} metin="LACKS SOME NUTRIENTS" x={960} y={130} boyut={80} renk={RENK.mercan} hiza="orta" />
      <Etiket t={t} bas={K(0, "tofu")} capa={[1180, 650]} konum={[1710, 760]} metin="TOFU" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "edamame")} capa={[740, 380]} konum={[200, 440]} metin="EDAMAME" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "powders")} capa={[1360, 400]} konum={[1690, 250]} metin="PROTEIN POWDER" renk={RENK.altin} />
    </>
  );
};

export default S35;
