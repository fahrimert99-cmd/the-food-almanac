// Sahne 47 — etiket miktarı 1,5 ons: bir bardağın üçte biri ile yarısı arası, yaklaşık 280 kalori; küçük başla.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = K(1, "Even") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [150, 120, 1640])}>
        <Etiket t={t} bas={K(1, "ounce")} capa={[780, 450]} konum={[780, 215]} metin="ONE OUNCE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "start")} capa={[460, 725]} konum={[330, 880]} metin="START SMALL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "third")} bitis={g} capa={[1120, 500]} konum={[1540, 440]} metin="⅓ TO ½ CUP" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "one") } bitis={g} metin="1½ OUNCES" x={70} y={140} boyut={104} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "label")} bitis={g} metin="the label amount" x={74} y={215} boyut={36} />
      <VurguRozet t={t} bas={K(0, "about")} bitis={g} vurgu="≈ 280" not="calories" x={1560} y={130} genislik={360} boyut={104} />
      <Baslik t={t} bas={K(1, "real")} metin="A REAL SNACK" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S47;
