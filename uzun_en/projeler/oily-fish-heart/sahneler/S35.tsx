// Sahne 35 — Zhang 2020 meta-analizi: balık tezgâhı + iki büyük rozet (–9%, –15%).
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [70, 30, 1780]);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pencere} />
      <KaynakEtiketi t={t} metin={m.etiket ?? ""} bas={K(0, "Zhang")} />
      <Baslik t={t} bas={K(0, "40 studies")} metin="40 STUDIES" x={100} y={210} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "followed")} metin="followed people for years" x={104} y={282} boyut={32} />
      <VurguRozet t={t} bas={K(1, "9 percent") - 0.1} vurgu="–9%" not="coronary heart disease risk" x={1200} y={770}
        boyut={84} genislik={400} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "15 percent") - 0.1} vurgu={m.baslik?.vurgu ?? "–15%"} not="dying from it" x={1640} y={770}
        boyut={84} genislik={380} renk={RENK.koyuYesil} />
    </>
  );
};

export default S35;
