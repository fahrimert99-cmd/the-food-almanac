// Sahne 21 — Dunedin denemesi: üç tabak pirinç, sırayla etiketlenir.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(1, "Regular")} capa={[490, 590]} konum={[420, 890]} metin="REGULAR WHITE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "Parboiled")} capa={[960, 600]} konum={[960, 890]} metin="PARBOILED" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "parboiled")} capa={[1440, 590]} konum={[1500, 890]} metin="CHILLED + REHEATED" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(0, "28")} bitis={K(1, "Regular")} vurgu="28" not="healthy adults" x={330} y={150} genislik={340} boyut={110} />
      <Not t={t} bas={K(2, "partly")} bitis={K(3, "And") - 0.2} metin="Partly cooked before it is milled" x={1830} y={150} hiza="sag" boyut={32} agirlik={700} genislik={520} />
    </>
  );
};

export default S21;
