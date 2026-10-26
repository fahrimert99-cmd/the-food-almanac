// Sahne 54 — Zenginleştirilmiş gıdalar ve takviyeler daha kolay emilir; NIH 50+.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "fortified")} capa={[1000, 610]} konum={[1000, 230]} metin="FORTIFIED FOODS" renk={RENK.yesil} />
      </Kamera>
      <Not t={t} bas={K(0, "supplements")} metin="+ SUPPLEMENTS" x={1000} y={290} hiza="orta" boyut={34} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "easier")} satirlar={["EASIER TO", "ABSORB"]} x={1860} y={170} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "over")} vurgu="OVER 50" not="NIH: MOST B12 THIS WAY" x={1660} y={440} genislik={380} boyut={80} />
    </>
  );
};

export default S54;
