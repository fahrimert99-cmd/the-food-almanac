// Sahne 23 — çay dozu belirsiz: üç fincan + zamanlayıcı; "ölçülü doz" → "kaç fincan?"
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOlcu = K(1, "measured"), tBrand = K(2, "brand"), tSteep = K(2, "steeping"), tNone = K(2, "none"), tCups = K(2, "how many");
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1800]);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={pen}>
        <Etiket t={t} bas={tBrand} bitis={tNone - 0.1} capa={[413, 470]} konum={[413, 300]} metin="BRAND" renk={RENK.altin} />
        <Etiket t={t} bas={tSteep} bitis={tNone - 0.1} capa={[1507, 420]} konum={[1200, 250]} metin="STEEPING" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "tea")} bitis={tNone - 0.1} capa={[947, 470]} konum={[780, 300]} metin="CUP OF TEA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tOlcu} bitis={tBrand - 0.2} metin="MEASURED DOSES" x={960} y={140} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tNone} metin="HOW MANY CUPS?" x={860} y={140} boyut={90} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={tCups + 0.3} metin="no trial says" x={860} y={205} boyut={34} hiza="orta" renk={RENK.gri} />
      <Ikon t={t} bas={tCups} ad="soru" x={1240} y={140} boyut={84} zemin={RENK.altin} />
    </>
  );
};
export default S23;
