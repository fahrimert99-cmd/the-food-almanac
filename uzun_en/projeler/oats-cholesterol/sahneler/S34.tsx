// Sahne 34 — 2014 denemesi: iki yulaf da aynı 1.6 g beta-glukan; hazır yulaf başta en kalın.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(0, "old-fashioned"), tIns = K(0, "instant"), tSame = K(0, "same 1.6");
  const tThick = K(1, "thickest");
  const bR = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [50, 90, 1740])}>
        <Etiket t={t} bas={tOld} capa={[530, 740]} konum={[530, 870]} metin="OLD-FASHIONED" renk={RENK.altin} />
        <Etiket t={t} bas={tIns} bitis={tThick - 0.1} capa={[1370, 740]} konum={[1370, 870]} metin="INSTANT" renk={RENK.yesil} />
        <Etiket t={t} bas={tThick} capa={[1370, 740]} konum={[1370, 870]} metin="THICKEST AT START" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin="Rebello et al. · Nutr J · 2014" />
      <VurguRozet t={t} bas={tSame} bitis={bR} vurgu="SAME 1.6 G" not="beta-glucan in each" x={960} y={80} genislik={420} boyut={72} />
    </>
  );
};

export default S34;
