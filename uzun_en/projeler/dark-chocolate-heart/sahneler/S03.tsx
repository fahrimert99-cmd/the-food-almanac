// Sahne 3 — etikette ne aranmalı
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "label.")} capa={[1400, 640]} konum={[1640, 400]} metin="THE LABEL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="BY THE END" x={56} y={130} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "know")} metin="WHAT TO" x={56} y={210} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "look for")} metin="LOOK FOR" x={56} y={300} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
