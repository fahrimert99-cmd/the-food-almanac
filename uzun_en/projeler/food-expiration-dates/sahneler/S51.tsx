// Sahne 51 — TWO: 40°F veya altı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} />
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={250} boyut={92} hiza="sag" />
      {/* buzdolabı rafı */}
      <Etiket t={t} bas={K(1, "refrigerator")} bitis={K(1, "freezer")} capa={[800, 850]} konum={[900, 915]} metin="REFRIGERATOR" renk={RENK.yesil} />
      {/* iki sıcaklık rozeti */}
      <VurguRozet t={t} bas={K(1, "40")} vurgu="≤ 40°F" not="REFRIGERATOR" x={1370} y={520} genislik={340} boyut={92} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "zero")} vurgu="0°F" not="FREEZER" x={1720} y={520} genislik={290} boyut={92} renk={RENK.lacivert} />
      {/* termometre */}
      <Etiket t={t} bas={K(2, "thermometer")} capa={[430, 280]} konum={[760, 140]} metin="THERMOMETER" renk={RENK.altin} />
    </>
  );
};

export default S51;
