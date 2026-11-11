// Sahne 13 — dört gün, aynı öğün: su, sıvı sirke, iki kez tablet.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyni = K(0, "same");
  const tOgun = K(0, "test meal");
  const t64 = K(0, "64");
  const tOnce = K(1, "Once");
  const tSu = K(1, "plain water");
  const tSivi = K(1, "liquid vinegar");
  const tIki = K(1, "twice");
  const tTablet = K(1, "tablets");
  const bit = tOnce - 0.1;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 70, 1740])}>
        <Etiket t={t} bas={tOgun} bitis={bit} capa={[1000, 735]} konum={[960, 440]} metin="TEST MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={tSu} capa={[420, 700]} konum={[420, 430]} metin="PLAIN WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSivi} capa={[800, 700]} konum={[800, 430]} metin="LIQUID VINEGAR" renk={RENK.yesil} />
        <Etiket t={t} bas={tIki} capa={[1180, 700]} konum={[1180, 430]} metin="VINEGAR TABLETS" renk={RENK.mercan} />
        <Etiket t={t} bas={tTablet} capa={[1560, 700]} konum={[1560, 340]} metin="VINEGAR TABLETS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tAyni - 0.2} bitis={bit} satirlar={["FOUR DAYS,", "ONE MEAL"]} x={120} y={150} boyut={120} />
      <VurguRozet t={t} bas={t64} bitis={tIki - 0.1} vurgu="64 g" not="of carbohydrate in the test meal" x={1480} y={140} genislik={440} renk={RENK.altin} />
    </>
  );
};

export default S13;
