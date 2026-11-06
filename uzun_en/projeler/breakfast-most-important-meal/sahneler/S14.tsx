// Sahne 14 — kilo iddiası sloganın söylediğinden zayıf; tek neden kilo kontrolüyse deneyler desteklemiyor.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(0, "weight"), tWeaker = K(0, "weaker"), tSlogan = K(0, "slogan");
  const tOnly = K(1, "only reason"), tCtrl = K(1, "weight control"), tNot = K(1, "trials");
  const tSon = tOnly - 0.15;
  const z = ilerle(t, 0, s.sure);
  const pP = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/14" pencere={[60 * z, 100 + 40 * z, 1800 - 90 * z]}>
        <Etiket t={t} bas={K(1, "eat breakfast")} capa={[800, 770]} konum={[330, 870]} metin="BREAKFAST" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={760} />
      <Baslik t={t} bas={tW} bitis={tSon} metin="WEIGHT CLAIM" x={1230} y={260} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tWeaker} bitis={tSon} metin="WEAKER THAN" x={1230} y={370} boyut={88} renk={RENK.mercan} />
      <Baslik t={t} bas={tSlogan - 0.15} bitis={tSon} metin="THE SLOGAN" x={1230} y={480} boyut={88} renk={RENK.lacivert} />
      <Not t={t} bas={tOnly} metin="ONLY REASON TO EAT BREAKFAST?" x={1230} y={180} boyut={32} genislik={620} agirlik={800} renk={RENK.gri} />
      <Baslik t={t} bas={tCtrl} metin="WEIGHT" x={1230} y={310} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCtrl + 0.12} metin="CONTROL" x={1230} y={430} boyut={110} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1275} y={620} boyut={64} renk="#fff" zemin={RENK.mercan} />
      <Baslik t={t} bas={tNot + 0.1} metin="TRIALS DON'T BACK IT" x={1330} y={620} boyut={50} renk={RENK.mercan} />
    </>
  );
};

export default S14;
