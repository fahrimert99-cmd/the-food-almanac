// Sahne 44 — Şeker: en yüksek sakaroz alan kadınlarda %52 daha yüksek risk; kılavuz gazlı içecekleri sınırlamayı önerebilir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "Sugar")} capa={[780, 735]} konum={[1050, 700]} metin="SUGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "soft drinks")} capa={[500, 520]} konum={[930, 360]} metin="SOFT DRINKS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Sugar")} satirlar={b.satirlar} x={1160} y={190} boyut={130} renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(1, "52 percent")} vurgu={b.vurgu!} not="WOMEN, HIGHEST SUCROSE INTAKE" x={1500} y={500} genislik={460} renk={RENK.mercan} />
    </>
  );
};

export default S44;
