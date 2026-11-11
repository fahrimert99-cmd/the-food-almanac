// Sahne 4 — marka + kakao tohumu
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "cacao")} capa={[933, 520]} konum={[1580, 330]} metin="CACAO BEANS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.05} bitis={c[1].bas - 0.1} metin={MARKA.ad.toUpperCase()} x={56} y={190} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "what's actually")} metin="WHAT'S INSIDE?" x={56} y={190} boyut={92} renk={RENK.lacivert} />
    </>
  );
};

export default S04;
