// Sahne 13 — ölçek: bir iki gram dirençli nişasta, kaselerin çoğu sıradan nişasta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGercek = K(0, "real"), tOlcek = K(0, "notice"), tGram = K(1, "gram");
  const tYuz = K(1, "100"), tCogu = K(2, "Most"), tSade = K(2, "ordinary");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1780])}>
        <Etiket t={t} bas={tGram} bitis={tCogu - 0.2} capa={[960, 520]} konum={[420, 640]} metin="RESISTANT STARCH" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSade} capa={[1240, 330]} konum={[1640, 470]} metin="ORDINARY STARCH" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tGercek} satirlar={["A REAL", "INCREASE"]} x={70} y={190} boyut={92} bitis={tCogu - 0.2}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tOlcek} metin="but notice the scale" x={74} y={405} boyut={36} bitis={tCogu - 0.2} agirlik={700} />
      <VurguRozet t={t} bas={tYuz} bitis={tCogu - 0.2} vurgu="1–2 G" not="per 100 g of rice" x={1650} y={170} genislik={360} boyut={96} />
    </>
  );
};

export default S13;
