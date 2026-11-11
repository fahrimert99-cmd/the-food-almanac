// Sahne 54 — İpucu 3: sade kuru erik, meyve suyu farklı bir ürün.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tNot = K(1, "not what");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1700])}>
        <Etiket t={t} bas={K(0, "label") - 0.1} bitis={K(1, "Prune") - 0.1} capa={[400, 250]} konum={[900, 130]} metin="READ THE LABEL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "juice")} capa={[810, 520]} konum={[1190, 470]} metin="PRUNE JUICE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "plain") - 0.1} satirlar={["TIP 3", "PLAIN PRUNES"]} x={1860} y={250} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "6.1")} vurgu="6.1 G" not="sorbitol per 100 grams of juice" x={1600} y={540} genislik={460} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1280} y={830} boyut={64} zemin={RENK.mercan} />
      <Not t={t} bas={tNot + 0.1} metin="Not what the bone trials used" x={1860} y={800} hiza="sag" genislik={600} boyut={36} agirlik={700} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(1, "about")} />}
    </>
  );
};

export default S54;
