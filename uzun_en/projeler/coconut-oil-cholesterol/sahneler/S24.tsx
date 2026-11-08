// Sahne 24 — hindistancevizi yağı ile zeytinyağı arasındaki fark şanstan ayırt edilemedi; HDL daha yüksek.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon1 = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "coconut")} bitis={tSon1} capa={[680, 780]} konum={[680, 500]} metin="COCONUT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "olive")} bitis={tSon1} capa={[1216, 780]} konum={[1216, 500]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "Coconut")} capa={[680, 780]} konum={[680, 500]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "too small")} bitis={tSon1} metin="COCONUT VS" x={960} y={150} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "too small") + 0.18} bitis={tSon1} metin="OLIVE: A TIE" x={960} y={280} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "HDL")} vurgu="HIGHER HDL" not="vs. the other two fats" x={1100} y={130} genislik={640} boyut={96} renk={RENK.yesil} />
    </>
  );
};

export default S24;
