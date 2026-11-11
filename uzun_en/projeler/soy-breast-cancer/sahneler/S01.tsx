// Sahne 1 — Shanghai çalışması: sağ boş kâğıtta başlık + –32% rozeti
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "most soy")} capa={[600, 520]} konum={[330, 175]} metin="SOY FOODS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "5,000")} metin="5,000 WOMEN" x={1860} y={190} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Shanghai")} metin="SHANGHAI" x={1860} y={306} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "32")} vurgu={s.meta.baslik?.vurgu ?? "–32%"} not={s.meta.baslik?.not} x={1610} y={450} genislik={440} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "Shanghai") + 0.3} />}
    </>
  );
};
export default S01;
