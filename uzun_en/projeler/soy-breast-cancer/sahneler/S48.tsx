// Sahne 48 — veri Asya'dan; ABD sonucu aynı yönde.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik;
  const tUS = K(1, "US");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "Asia.")} bitis={K(1, "Whether") + 0.3} capa={[1067, 400]} konum={[1130, 110]} metin="MUCH OF THE DATA: ASIA" renk={RENK.altin} />
        <Etiket t={t} bas={tUS} bitis={K(1, "though")} capa={[420, 450]} konum={[420, 110]} metin="US: LITTLE SOY" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "results")} satirlar={m?.satirlar ?? ["US RESULT:", "SAME WAY"]} x={1860} y={110} boyut={88} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "pointed")} vurgu={m?.vurgu ?? "–24%"} not={m?.not} x={1640} y={300} genislik={420} renk={RENK.yesil} />
    </>
  );
};

export default S48;
