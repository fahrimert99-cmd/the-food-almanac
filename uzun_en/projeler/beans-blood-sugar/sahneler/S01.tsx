// Sahne 1 — bir fincan baklagil / A1C –0.5
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const son = K(0, "a daily") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "beans")} capa={[560, 430]} konum={[420, 180]} metin="BEANS" renk={RENK.yesil} />
      </Kamera>
      {/* ön bilgiler: sağ sütun */}
      <Baslik t={t} bas={K(0, "three-month")} bitis={son} metin="3-MONTH TRIAL" x={1860} y={310} boyut={66} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "121")} bitis={son} metin="121 ADULTS" x={1860} y={400} boyut={66} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "type")} bitis={son} metin="TYPE 2 DIABETES" x={1860} y={490} boyut={66} hiza="sag" renk={RENK.altin} />
      {/* başlık: günde bir fincan */}
      <Baslik t={t} bas={K(0, "a daily")} metin={b.satirlar[0]} x={1860} y={310} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "a daily") + 0.2} metin={b.satirlar[1]} x={1860} y={426} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "half a point")} vurgu={b.vurgu!} not={b.not} x={1620} y={580} genislik={440} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S01;
