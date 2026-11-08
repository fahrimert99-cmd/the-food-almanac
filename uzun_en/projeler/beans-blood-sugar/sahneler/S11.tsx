// Sahne 11 — Jenkins ekibi, 121 yetişkin, iki diyet, üç ay, sıradan yiyecek.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDavid = K(0, "David"), t121 = K(0, "121"), tOne = K(0, "one of"), tTwo = K(0, "two diets");
  const tMonths = K(1, "three months"), tFood = K(2, "ordinary"), tSupp = K(2, "supplements");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 70, 1700])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} bitis={t121 - 0.2} />
      <Baslik t={t} bas={tDavid} bitis={t121 - 0.2} metin="DAVID JENKINS" x={900} y={190} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t121} bitis={tOne + 1.4} vurgu="121" not="ADULTS WITH TYPE 2 DIABETES" x={1150} y={110} genislik={470} renk={RENK.altin} />
      <Etiket t={t} bas={tOne} bitis={tMonths - 0.1} capa={[700, 660]} konum={[640, 800]} metin="DIET 1" renk={RENK.yesil} />
      <Etiket t={t} bas={tTwo} bitis={tMonths - 0.1} capa={[1000, 660]} konum={[1060, 800]} metin="DIET 2" renk={RENK.altin} />
      <VurguRozet t={t} bas={tMonths} bitis={tFood - 0.1} vurgu="3 MONTHS" not="FOLLOW-UP" x={1150} y={110} genislik={470} renk={RENK.lacivert} />
      <Etiket t={t} bas={tFood} capa={[700, 640]} konum={[600, 820]} metin="ORDINARY FOOD" renk={RENK.yesil} />
      <Etiket t={t} bas={tSupp} capa={[1000, 650]} konum={[1120, 850]} metin="NOT SUPPLEMENTS" renk={RENK.mercan} />
    </>
  );
};

export default S11;
