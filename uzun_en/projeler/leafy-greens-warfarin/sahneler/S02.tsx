import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 2 — brokoli tabağı; üstte boş kâğıtta başlık
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={K(0, "greens")} capa={[700, 600]} konum={[330, 300]} metin="GREENS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "skipping")} metin="SKIPPING GREENS" x={1840} y={120} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "may")} metin="MAY NOT BE SAFE" x={1840} y={215} boyut={84} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S02;
