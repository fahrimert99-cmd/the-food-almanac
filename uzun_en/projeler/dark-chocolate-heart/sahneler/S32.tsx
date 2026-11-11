// Sahne 32 — Miller 2008: doğal kakao 35 mg/g. Görsel solda, sağdaki kâğıt boşlukta başlık + rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 20, 1920], [0, 70, 1780]);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={pen} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* 1. cümle: kâse ve terazi */}
      <Etiket t={t} bas={K(0, "commercial cocoa powders")} bitis={5.1} capa={[253, 600]} konum={[300, 400]} metin="COCOA POWDERS" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "tested")} bitis={5.1} capa={[1010, 575]} konum={[1400, 640]} metin="LAB BALANCE" renk={RENK.lacivert} />
      {/* 2. cümle: başlık ve sayı */}
      <Baslik t={t} bas={K(1, "Natural")} metin="NATURAL COCOA" x={1220} y={190} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "35")} vurgu="35" not="milligrams of flavanols per gram" x={1500} y={290} genislik={520} />
    </>
  );
};

export default S32;
