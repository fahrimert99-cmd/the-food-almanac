// Sahne 40 — tavada patates kızartması: ısı fenolikleri tüketir (10 dk, 356°F).
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEvoo = K(0, "extra virgin"), tFen = K(0, "phenolics"), tFri = K(1, "french fries");
  const tBas = K(1, "ten minutes"), tYari = K(1, "half");
  const pPanel = eout(ilerle(t, tBas - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1760])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={tEvoo} bitis={tFri - 0.2} capa={[1200, 790]} konum={[1580, 760]} metin="EXTRA VIRGIN OIL" renk={RENK.altin} />
      <Etiket t={t} bas={tFen} bitis={tFri - 0.2} capa={[430, 560]} konum={[900, 120]} metin="PHENOLICS USED UP" renk={RENK.mercan} />
      <Etiket t={t} bas={tFri} bitis={tBas + 4} capa={[640, 440]} konum={[900, 120]} metin="FRENCH FRIES" renk={RENK.mercan} />
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={tBas} satirlar={s.meta.baslik!.satirlar} x={1860} y={230} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={tYari} vurgu="≈ HALF" not="of one phenolic group" x={1640} y={510} genislik={440} renk={RENK.mercan} />
    </>
  );
};

export default S40;
