// Sahne 22 — Hafiz 2022 incelemesi: 65 çalışma, açlık glukozu –10 mg/dL.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      {/* 1. cümle: kule = 65 çalışma */}
      <Etiket t={t} bas={K(0, "review")} bitis={4.4} capa={[470, 150]} konum={[860, 150]} metin="NEWER REVIEW" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "65")} bitis={s.cumleler[1].bas + 0.9} capa={[470, 150]} konum={[860, 150]} metin="65 TRIALS" renk={RENK.yesil} />
      {/* 2. cümle */}
      <Not t={t} bas={K(1, "type")} metin="ADULTS WITH TYPE 2 DIABETES" x={1860} y={190} hiza="sag" boyut={36} agirlik={800} />
      <Etiket t={t} bas={K(1, "pulse")} capa={[990, 700]} konum={[1240, 790]} metin="PULSE EATING" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(1, "fasting")} satirlar={b.satirlar} x={1860} y={330} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "10")} vurgu={b.vurgu!} not={b.not} x={1620} y={520} genislik={420} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S22;
