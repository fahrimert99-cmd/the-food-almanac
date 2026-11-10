// Sahne 1 — özet: çay fincanı, 31 çalışma, –4.5 mg/dL.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(0, "real,");
  const t31 = K(1, "31 trials");
  const tLdl = K(1, "four");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={K(0, "green tea")} bitis={tKucuk - 0.2} capa={[640, 570]} konum={[1080, 420]} metin="GREEN TEA" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={tKucuk} bitis={t31 - 0.3} metin="REAL," x={1860} y={290} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "small")} bitis={t31 - 0.3} metin="BUT SMALL" x={1860} y={410} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={t31} metin="31 TRIALS" x={1860} y={290} boyut={120} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={tLdl} vurgu="–4.5" not="mg/dL LDL cholesterol" x={1560} y={400} genislik={460} />
    </>
  );
};

export default S01;
