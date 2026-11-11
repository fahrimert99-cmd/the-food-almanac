// Sahne 30 — kanıt yetersiz: iki boş sandalye, ortada şişe.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [60, 120, 1780])}>
        <Etiket t={t} bas={K(0, "multivitamins")} bitis={K(1, "statement") - 0.2} capa={[585, 400]} konum={[600, 190]} metin="MULTIVITAMINS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "recommends")} capa={[160, 500]} konum={[260, 230]} metin="RECOMMENDS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "advises")} capa={[1000, 520]} konum={[900, 230]} metin="ADVISES AGAINST" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "insufficient") - 0.3} satirlar={["EVIDENCE", "INSUFFICIENT"]} x={1860} y={290} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "I statement")} vurgu="I" not="I STATEMENT" x={1560} y={600} genislik={340} boyut={110} />
    </>
  );
};

export default S30;
