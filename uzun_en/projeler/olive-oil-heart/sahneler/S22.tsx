// Sahne 22 — 7,216 gönüllü, ortalama yaş 67, üst üçte bir günde ~35 g
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tUst = K(0, "top"), t35 = K(0, "35");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740])}>
        <Etiket t={t} bas={tUst} bitis={t35 + 2.5} capa={[640, 780]} konum={[1150, 780]} metin="TOP THIRD" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "7,216")} bitis={tUst - 0.15} vurgu="7,216" not="PREDIMED VOLUNTEERS" x={1600} y={170} genislik={460} boyut={84} />
      <VurguRozet t={t} bas={K(0, "67,")} bitis={tUst - 0.15} vurgu="67" not="AVERAGE AGE" x={1600} y={430} genislik={460} boyut={84} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={t35} satirlar={b.satirlar} x={1860} y={200} boyut={92} hiza="sag" />
      <Not t={t} bas={t35 + 0.5} metin={b.not!.toUpperCase()} x={1860} y={410} hiza="sag" genislik={520} boyut={30} agirlik={800} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "two") - 0.1} vurgu="≈ 2½" not="TABLESPOONS" x={1600} y={640} genislik={420} boyut={96} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S22;
