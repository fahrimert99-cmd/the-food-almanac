import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 3 — kale, şişeler, büyüteç; üstte başlık
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "newer")} capa={[1040, 450]} konum={[1580, 700]} metin="NEWER BLOOD THINNERS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "real rule")} metin="THE REAL RULE" x={960} y={95} boyut={96} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "differently.")} metin="WORK DIFFERENTLY" x={110} y={880} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S03;
