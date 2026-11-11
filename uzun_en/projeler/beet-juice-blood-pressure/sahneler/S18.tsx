// Sahne 18 — pancarda başka bir şey olabilir mi? Düşük nitratlı ürün, hipotez.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(1, "something");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={K(0, "less")} bitis={K(0, "bigger") + 1.6} capa={[930, 700]} konum={[1130, 430]} metin="LESS NITRATE" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "bigger")} bitis={tBaslik - 0.3} vurgu="BIGGER DROPS" not="SOMETIMES" x={1500} y={200} genislik={560}
        boyut={64} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["SOMETHING", "ELSE IN BEETS?"]} x={1860} y={170} boyut={88} hiza="sag" />
      <Etiket t={t} bas={K(1, "only")} capa={[1230, 700]} konum={[1560, 620]} metin="HYPOTHESIS ONLY" renk={RENK.lacivert} />
    </>
  );
};

export default S18;
