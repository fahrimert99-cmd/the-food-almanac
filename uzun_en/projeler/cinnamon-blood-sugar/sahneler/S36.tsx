// Sahne 36 — BfR tahmini: ~2 g cassia; bir çay kaşığından az.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "Risk")} bitis={K(0, "about")} metin="RISK ASSESSMENT" x={140} y={190} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "estimates")} bitis={K(0, "about")} metin="German Federal Institute estimate" x={144} y={250} boyut={32} />
      <VurguRozet t={t} bas={K(0, "2")} vurgu="≈ 2 G" not="of cassia, average coumarin" x={330} y={200} genislik={400} />
      <Etiket t={t} bas={K(0, "cassia")} capa={[1330, 760]} konum={[1560, 900]} metin="CASSIA" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "teaspoon")} capa={[1100, 450]} konum={[1180, 190]} metin="LESS THAN A TEASPOON" renk={RENK.altin} />
    </>
  );
};
export default S36;
