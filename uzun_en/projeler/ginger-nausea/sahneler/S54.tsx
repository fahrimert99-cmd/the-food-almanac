// Sahne 54 — adım 1: etiketi kontrol et; denemelerde yaklaşık 1 g/gün.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTit = K(0, "ginger"), tProd = K(0, "product"), tLab = K(0, "amount"), tGram = K(1, "one gram");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 40, 1750], [60, 90, 1600])}>
        <Etiket t={t} bas={tProd} bitis={6.3} capa={[470, 150]} konum={[900, 190]} metin="CAPSULE BOTTLE" renk={RENK.altin} />
        <Etiket t={t} bas={tLab} capa={[470, 560]} konum={[1000, 480]} metin="AMOUNT LISTED" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tTit} satirlar={s.meta.baslik!.satirlar} x={1860} y={290} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={tGram} vurgu="≈ 1 GRAM" not="about a day, typical in the trials" x={1590} y={560} genislik={520} boyut={92} />
    </>
  );
};

export default S54;
