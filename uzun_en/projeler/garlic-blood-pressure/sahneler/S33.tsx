// Sahne 33 — DASH-Sodium denemesi: –11.5 puan sistolik.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tDash = K(1, "DASH"), tSod = K(1, "low sodium"), t115 = K(1, "11.5"), tVs = K(1, "compared");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [10, 0, 1900])}>
        <Etiket t={t} bas={K(0, "412")} bitis={tDash - 0.2} capa={[820, 700]} konum={[1580, 700]} metin="412 ADULTS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "controlled")} bitis={tDash - 0.2} capa={[1100, 780]} konum={[1580, 860]} metin="CONTROLLED DIETS" renk={RENK.altin} />
        <Etiket t={t} bas={tSod} bitis={t115 - 0.2} capa={[1050, 470]} konum={[1600, 540]} metin="LOW SODIUM" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "DASH-Sodium")} />
      <BaslikBlok t={t} bas={tDash} satirlar={b.satirlar} x={1860} y={190} boyut={92} hiza="sag" bitis={undefined} />
      <VurguRozet t={t} bas={t115} vurgu={b.vurgu!} not={b.not} x={1640} y={440} genislik={400} />
      <Not t={t} bas={tVs} metin="vs. a typical high-sodium diet" x={1860} y={720} hiza="sag" genislik={400} boyut={32} agirlik={800} />
    </>
  );
};

export default S33;
