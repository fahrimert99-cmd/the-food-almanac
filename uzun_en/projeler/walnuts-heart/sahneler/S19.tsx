// Sahne 19 — günlük 1–2 ons ceviz.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tGrup = K(0, "walnut"), tYuz = K(0, "15"), tGram = K(1, "30");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [50, 90, 1660])} />
      <Panel a={1} taraf="sag" genislik={900} />
      <AltSis a={0.5} />
      <Etiket t={t} bas={tGrup} capa={[660, 630]} konum={[640, 350]} metin="WALNUT GROUP" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tYuz} vurgu="≈15%" not="OF DAILY CALORIES" x={1480} y={340} genislik={440} bitis={tGram - 0.2} />
      <BaslikBlok t={t} bas={tGram} satirlar={b.satirlar} x={1860} y={340} boyut={104} hiza="sag" />
      <Not t={t} bas={K(1, "grams,")} metin={b.not!} x={1860} y={580} hiza="sag" genislik={800} boyut={34} />
    </>
  );
};
export default S19;
