// Sahne 1 — Cochrane özeti: sağ boş kâğıtta başlık ve rozet
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "cranberry")} capa={[820, 690]} konum={[1130, 560]} metin="CRANBERRIES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(0, "fifty")} satirlar={b.satirlar} x={1860} y={270} boyut={110} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "quarter")} vurgu={b.vurgu!} not={b.not} x={1560} y={400} genislik={440} />
    </>
  );
};

export default S01;
