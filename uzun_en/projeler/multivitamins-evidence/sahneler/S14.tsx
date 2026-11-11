// Sahne 14 — küçük ve belirsiz: klasörler, büyüteç ve çizim üzerinde etiketler; sağda başlık + not.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOz = K(0, "modest"), tInc = K(1, "review"), tAdj = K(1, "adjusted"), tAile = K(1, "parental"), tYazar = K(2, "lead");
  const cam = kameraYolu(t, s.sure, [0, 20, 1800], [30, 40, 1740]);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={cam} />
      <Panel a={eout(ilerle(t, 0.1, 0.8))} genislik={760} />
      <BaslikBlok t={t} bas={tOz - 0.1} satirlar={s.meta.baslik!.satirlar} x={1290} y={200} boyut={84} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={tInc} bitis={tAdj} capa={[500, 260]} konum={[900, 130]} metin="ONE REVIEW" renk={RENK.lacivert} />
      <Etiket t={t} bas={tAdj} bitis={tAile} capa={[800, 440]} konum={[1000, 130]} metin="ADJUSTED ANALYSES" renk={RENK.yesil} />
      <Etiket t={t} bas={tAile} capa={[780, 700]} konum={[980, 880]} metin="NO PARENTAL HISTORY" renk={RENK.altin} />
      <Not t={t} bas={tYazar} metin="EVEN THE LEAD AUTHOR CALLED IT MODEST" x={1290} y={560} boyut={32} agirlik={800} renk={RENK.altin} genislik={520} />
    </>
  );
};

export default S14;
