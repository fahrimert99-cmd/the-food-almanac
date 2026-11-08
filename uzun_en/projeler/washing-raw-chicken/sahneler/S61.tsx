// Sahne 61 — özet: durulama güvenli yapmaz, sıçrama
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kes = K(1, "whether") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Parcaciklar t={t} bas={K(1, "splashes")} kaynak={[620, 830]} hedef={[1150, 800]} adet={16} aralik={0.12} omur={1.3} kavis={-160} renk="#8DB9D6" tohum="s61" />
        <Etiket t={t} bas={K(1, "sinks")} bitis={kes} capa={[1000, 760]} konum={[1000, 900]} metin="SINKS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "salads")} bitis={kes} capa={[1560, 560]} konum={[1480, 130]} metin="SALADS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "not")} bitis={K(1, "sinks")} metin="NOT SAFER" x={1860} y={150} boyut={104} hiza="sag" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "whether")} vurgu="EITHER WAY" not="germs on sinks and salads" x={1330} y={50} genislik={520} boyut={80} renk={RENK.mercan} />
    </>
  );
};
export default S61;
