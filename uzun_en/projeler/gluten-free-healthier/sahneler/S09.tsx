// Sahne 9 — 2018 meta-analiz: antikor %1.4, biyopsi %0.7.
import React from "react";
import { BaslikBlok, Baslik, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMeta = K(0, "meta-analysis"), t96 = K(0, "96");
  const tAb = K(1, "1.4"), tBiyo = K(1, "biopsy-confirmed");
  const tAnti = K(1, "antibodies");
  const cikis = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1740])}>
        <Etiket t={t} bas={t96} bitis={cikis} capa={[700, 800]} konum={[1000, 900]} metin="96 STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={tAnti} capa={[480, 560]} konum={[930, 130]} metin="ANTIBODIES" renk={RENK.mercan} />
        <Etiket t={t} bas={tBiyo} capa={[830, 330]} konum={[1000, 420]} metin="BIOPSY" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* 1. cümle: meta-analiz */}
      <Baslik t={t} bas={tMeta} bitis={cikis} metin="META-ANALYSIS" x={1130} y={250} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMeta + 0.2} bitis={cikis} metin="2018" x={1134} y={370} boyut={64} renk={RENK.altin} />
      <VurguRozet t={t} bas={t96} bitis={cikis} vurgu="96" not="studies pooled" x={1500} y={470} genislik={340} />
      {/* 2. cümle: iki çubuk */}
      <BaslikBlok t={t} bas={tAb} satirlar={["1.4%", "ANTIBODIES"]} x={1130} y={170} boyut={84} renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={tAb + 0.5} metin="worldwide, from 96 studies" x={1134} y={330} boyut={30} />
      <CubukGrafik t={t} bas={tAb + 0.2} x={1170} y={470} w={620} h={330} maks={1.6} cubuklar={[
        { etiket: "ANTIBODIES", deger: 1.4, metin: "1.4%", renk: RENK.mercan, bas: tAb + 0.2 },
        { etiket: "BIOPSY-CONFIRMED", deger: 0.7, metin: "0.7%", renk: RENK.koyuYesil, bas: K(1, "0.7") },
      ]} />
    </>
  );
};

export default S09;
