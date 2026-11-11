// Sahne 22 — genler doğal deney gibi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [60, 90, 1720])}>
        <Etiket t={t} bas={K(1, "gene variants")} bitis={K(2, "Because") - 0.1} capa={[470, 330]} konum={[800, 270]} metin="GENE VARIANTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "drink less")} bitis={K(2, "Because") - 0.1} capa={[790, 830]} konum={[1020, 760]} metin="LESS DRINKING" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "different")} satirlar={b.satirlar} x={1860} y={230} boyut={110} hiza="sag" />
      <Not t={t} bas={K(2, "fixed")} metin="GENES ARE FIXED AT CONCEPTION" x={1860} y={470} hiza="sag" boyut={34} agirlik={800} genislik={800} />
      <VurguRozet t={t} bas={K(2, "randomized")} vurgu="≈ TRIAL" not="like a randomized trial" x={1560} y={560} genislik={460} />
    </>
  );
};
export default S22;
