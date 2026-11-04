// Sahne 41 — AREDS2 çalışması: büyüteç, ıspanak, kapsüller
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, Not, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "AREDS2")} />
      <VurguRozet t={t} bas={K(1, "4,203")} vurgu="4,203" not="ADULTS" x={1560} y={190} genislik={340} boyut={96} />
      <Not t={t} bas={K(1, "aged")} metin="AGES 50 TO 85" x={1560} y={410} hiza="orta" boyut={34} agirlik={800} />
      <Etiket t={t} bas={K(1, "degeneration,")} capa={[1020, 330]} konum={[1450, 600]} metin="MACULAR DEGENERATION RISK" renk={RENK.lacivert} boyut={26} />
      <Etiket t={t} bas={K(1, "lutein")} capa={[1211, 851]} konum={[1500, 760]} metin="LUTEIN + ZEAXANTHIN" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={K(1, "placebo,")} capa={[647, 829]} konum={[330, 700]} metin="PLACEBO" renk={RENK.mercan} boyut={26} />
    </>
  );
};
export default S41;
