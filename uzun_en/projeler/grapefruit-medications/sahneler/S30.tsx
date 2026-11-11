import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDont = K(0, "doesn't"), tFur = K(1, "furanocoumarins"), tEnz = K(1, "enzyme's"), tInact = K(2, "inactivate");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])} />
      <AltSis a={0.4} yukseklik={120} />
      <Baslik t={t} bas={tDont} bitis={tFur - 0.2} metin="DOESN'T WORK" x={1860} y={300} boyut={90} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={tDont + 0.15} bitis={tFur - 0.2} metin="THAT WAY" x={1860} y={405} boyut={90} renk={RENK.lacivert} hiza="sag" />
      <Etiket t={t} bas={tFur} bitis={tInact - 0.3} capa={[700, 250]} konum={[1130, 250]} metin="FURANOCOUMARINS" renk={RENK.altin} boyut={26} />
      <Parcaciklar t={t} bas={tFur + 1.0} kaynak={[570, 440]} hedef={[570, 740]} adet={26} aralik={0.12} omur={1.3} yayilma={40}
        kavis={0} hedefYayilma={50} tohum="s30" />
      <Etiket t={t} bas={tEnz} bitis={tInact - 0.3} capa={[640, 760]} konum={[1130, 760]} metin="CYP3A4 ENZYME" renk={RENK.lacivert} boyut={26} />
      <BaslikBlok t={t} bas={tInact} satirlar={b.satirlar} x={1860} y={300} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S30;
