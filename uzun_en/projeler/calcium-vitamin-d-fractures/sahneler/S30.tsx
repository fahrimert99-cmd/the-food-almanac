// Sahne 30 — 6 deneyden 5'i yüksek yanlılık riskli; tek başına D vitamini: 11 deney, ~34.000 kişi, kırık azalmadı.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(0, "five"), tBias = K(0, "bias"), tAuth = K(0, "authors");
  const tVit = K(1, "Vitamin"), t11 = K(1, "11"), tNot = K(1, "not");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [90, 70, 1740])} />
      {/* 1. cümle */}
      <Baslik t={t} bas={tFive} bitis={7.9} metin="5 OF 6" x={100} y={150} boyut={120} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "rated")} bitis={7.9} metin="trials rated at high risk of bias" x={106} y={235} boyut={32} genislik={420} />
      <BaslikBlok t={t} bas={tAuth} bitis={7.9} satirlar={["MORE LARGE", "TRIALS"]} x={1860} y={150} boyut={84} hiza="sag" />
      <Not t={t} bas={K(0, "before")} bitis={7.9} metin="the authors asked for these before recommending it" x={1860} y={330} hiza="sag" boyut={30} genislik={440} />
      {/* 2. cümle */}
      <Etiket t={t} bas={tVit} capa={[620, 520]} konum={[250, 480]} metin="VITAMIN D ALONE" renk={RENK.altin} boyut={28} />
      <VurguRozet t={t} bas={t11 - 0.1} vurgu="11 TRIALS" not="about 34,000 people" x={1640} y={140} renk={RENK.lacivert} genislik={440} boyut={80} />
      <BaslikBlok t={t} bas={tNot} satirlar={["NO DROP IN", "FRACTURES"]} x={100} y={150} boyut={84} />
    </>
  );
};

export default S30;
