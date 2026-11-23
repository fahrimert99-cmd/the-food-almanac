// Sahne 24 — "kanıtlamaz": buğday, kase, ekmek; nişasta ve tahıl lifi etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDeg = K(0, "doesn't prove"), tKor = K(0, "protects");
  const tNis = K(1, "starch"), tLif = K(1, "cereal fiber"), tAz = K(1, "eating less gluten");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 60, 1720])}>
        <Etiket t={t} bas={tNis} bitis={tAz - 0.2} capa={[1390, 690]} konum={[1640, 610]} metin="STARCH" renk={RENK.altin} />
        <Etiket t={t} bas={tLif} bitis={tAz - 0.2} capa={[860, 560]} konum={[1000, 410]} metin="CEREAL FIBER" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tDeg} bitis={tNis - 0.3} metin="DOESN'T PROVE" x={720} y={150} boyut={96} renk={RENK.mercan} />
      <Not t={t} bas={tKor} bitis={tNis - 0.3} metin="that gluten protects anyone" x={724} y={215} boyut={36} />
      <Baslik t={t} bas={tAz} metin="LESS GLUTEN" x={670} y={150} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAz + 0.18} metin="= LESS CEREAL FIBER" x={670} y={238} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S24;
