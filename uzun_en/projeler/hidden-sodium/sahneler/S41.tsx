// Sahne 41 — 4 kişiden 3'ünde düşüş; ilaç kullananlarda da kullanmayanlarda da ~8 mmHg.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const cik1 = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "low-sodium")} bitis={cik1} capa={[940, 380]} konum={[1010, 90]} metin="LOW SODIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "took")} capa={[1010, 700]} konum={[900, 900]} metin="TOOK MEDICINE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={640} opak={1} />
      <BaslikBlok t={t} bas={K(0, "three")} satirlar={b.satirlar} x={1860} y={240} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "near 8")} vurgu="≈ 8 MMHG" not="PRESSURE DROP" x={1650} y={500} genislik={440} boyut={84} />
      <Not t={t} bas={K(1, "in people")} metin="WITH OR WITHOUT MEDICINE" x={1860} y={690} hiza="sag" genislik={440} boyut={28} agirlik={800} />
    </>
  );
};

export default S41;
