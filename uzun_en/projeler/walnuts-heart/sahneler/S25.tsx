// Sahne 25 — erkek / kadın karşılaştırması: iki kase, ortada büyüteç. Yeni bulgu, doğrulama gerekir.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tErkek = K(0, "men,"), tE = K(0, "7.9"), tKadin = K(0, "women,"), tK = K(0, "2.6");
  const tYeni = K(1, "new finding"), tOnay = K(1, "needs confirmation"), tDikkat = K(1, "don't");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [90, 90, 1740])} />
      <Etiket t={t} bas={tErkek} capa={[600, 640]} konum={[520, 870]} metin="MEN" renk={RENK.lacivert} />
      <Etiket t={t} bas={tKadin} capa={[1330, 640]} konum={[1600, 860]} metin="WOMEN" renk={RENK.altin} />
      <VurguRozet t={t} bas={tE} vurgu="7.9%" x={560} y={60} genislik={300} boyut={90} renk={RENK.koyuYesil} bitis={tDikkat - 0.2} />
      <VurguRozet t={t} bas={tK} vurgu="2.6%" x={1360} y={60} genislik={300} boyut={90} renk={RENK.altin} bitis={tDikkat - 0.2} />
      <Etiket t={t} bas={tYeni} bitis={tDikkat + 3} capa={[940, 520]} konum={[880, 760]} metin="NEW FINDING" renk={RENK.mercan} />
      <Etiket t={t} bas={tOnay} capa={[1050, 660]} konum={[1150, 900]} metin="NEEDS CONFIRMATION" renk={RENK.mercan} />
      <Baslik t={t} bas={tDikkat} metin="DON'T OVER-READ IT" x={960} y={140} boyut={84} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S25;
