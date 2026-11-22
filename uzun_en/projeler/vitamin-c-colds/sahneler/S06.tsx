// Sahne 6 — günlük ihtiyaç: sağ boş kâğıtta başlık, rozet ve satırlar.
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <BaslikBlok t={t} bas={K(0, "recommended")} satirlar={b.satirlar} x={1500} y={150} boyut={100} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "90")} vurgu={b.vurgu!} not={b.not} x={1500} y={240} genislik={520} />
      <Not t={t} bas={K(0, "men")} metin="ADULT MEN · 90 MG" x={1500} y={510} hiza="orta" boyut={44} agirlik={800} genislik={720} />
      <Not t={t} bas={K(0, "75")} metin="ADULT WOMEN · 75 MG" x={1500} y={590} hiza="orta" boyut={44} agirlik={800} genislik={720} />
      <Not t={t} bas={K(1, "35")} metin="SMOKERS · +35 MG" x={1500} y={670} hiza="orta" boyut={44} agirlik={800} genislik={720} renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={K(1, "National")} metin="National Institutes of Health" y={890} />
    </>
  );
};

export default S06;
