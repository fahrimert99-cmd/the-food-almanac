// Sahne 2 — 14.806 olay; iki çalışma, iki cevap.
import React from "react";
import { BaslikBlok, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCikis = K(1, "And yet") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [30, 70, 1750])} />
      <VurguRozet t={t} bas={K(0, "14,806")} bitis={tCikis} vurgu="14,806" not="heart attacks, deaths, strokes" x={1330} y={300} genislik={520} />
      <Not t={t} bas={K(0, "counted")} bitis={tCikis} metin="COUNTED ALONG THE WAY" x={1330} y={540} hiza="orta" boyut={32} agirlik={800} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "different")} satirlar={["TWO STUDIES,"]} x={1860} y={290} boyut={100} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "other way")} satirlar={["TWO ANSWERS"]} x={1860} y={400} boyut={100} hiza="sag" renkler={[RENK.koyuYesil]} />
    </>
  );
};

export default S02;
