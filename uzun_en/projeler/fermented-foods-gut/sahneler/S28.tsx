// Sahne 28 — kefir çalışmaları: 2025 derlemesi, 4–12 hafta, 180–400 ml.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2025 = K(1, "2025"), tHuman = K(1, "human"), tFour = K(1, "four"), tDoses = K(1, "doses"), t180 = K(1, "180");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1800])}>
        <Etiket t={t} bas={0.3} bitis={2.3} capa={[420, 620]} konum={[800, 190]} metin="KEFIR" renk={RENK.altin} />
        <Etiket t={t} bas={tHuman} bitis={tFour - 0.2} capa={[690, 420]} konum={[930, 290]} metin="HUMAN STUDIES" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tDoses} capa={[880, 690]} konum={[1130, 470]} metin="DOSES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} bas={t2025} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={0.3} satirlar={s.meta.baslik!.satirlar} x={1860} y={230} boyut={118} hiza="sag" />
      <VurguRozet t={t} bas={tFour} vurgu={s.meta.baslik!.vurgu!} not="MOSTLY LASTING" x={1560} y={500} genislik={480} boyut={100} />
      <VurguRozet t={t} bas={t180} vurgu="180–400 ML" not="PER SERVING, ABOUT" x={1560} y={740} genislik={520} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S28;
