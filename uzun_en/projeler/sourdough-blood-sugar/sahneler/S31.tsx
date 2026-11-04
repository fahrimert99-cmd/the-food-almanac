// Sahne 31 — Ribet incelemesi: 25 deneme, 542 yetişkin; un, fermantasyon, mikroplar farklı → net uzlaşı yok.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const son = K(1, "It") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={pen}>
        <Etiket t={t} bas={K(1, "flour,")} capa={[1240, 735]} konum={[1050, 300]} metin="FLOUR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "fermentation")} capa={[300, 545]} konum={[250, 415]} metin="FERMENTATION" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "microbes")} capa={[800, 630]} konum={[700, 300]} metin="MICROBES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Ribet")} />
      <VurguRozet t={t} bas={K(0, "twenty-five")} bitis={son} vurgu="25" not="RANDOMIZED TRIALS" x={430} y={150} genislik={400} />
      <VurguRozet t={t} bas={K(0, "forty-two")} bitis={son} vurgu="542" not="ADULTS" x={900} y={150} genislik={340} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "no clear")} satirlar={["NO CLEAR", "CONSENSUS"]} x={80} y={185} boyut={84} />
    </>
  );
};

export default S31;
