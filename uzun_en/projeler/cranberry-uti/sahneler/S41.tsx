// Sahne 41 — antibiyotik karşılaştırması: sağda başlık, rozet, not; şişeye etiket.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1700])} />
      <BaslikBlok t={t} bas={K(0, "antibiotics")} satirlar={["VS", "ANTIBIOTICS?"]} x={1860} y={170} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "385")} vurgu="385" not="PEOPLE · TWO TRIALS" x={1540} y={420} genislik={420} renk={RENK.altin} bitis={K(2, "But")} />
      <Not t={t} bas={K(1, "little")} metin="LITTLE OR NO DIFFERENCE" x={1860} y={680} hiza="sag" genislik={640} boyut={36} agirlik={800} renk={RENK.koyuYesil} bitis={K(2, "But")} />
      <Not t={t} bas={K(2, "couldn't")} metin="CAN'T SAY WHICH IS BETTER" x={1860} y={440} hiza="sag" genislik={560} boyut={44} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(2, "prescription")} capa={[870, 520]} konum={[1330, 760]} metin="PRESCRIPTION" renk={RENK.mercan} boyut={30} />
    </>
  );
};

export default S41;
