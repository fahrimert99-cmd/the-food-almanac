// Sahne 34 — açıklama 1: alıştırma (pratik) etkisi.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1760])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={700} />
      <Baslik t={t} bas={K(0, "explanations")} bitis={K(1, "practice") - 0.1} metin="POSSIBLE EXPLANATIONS" x={1860} y={170} boyut={52}
        renk={RENK.altin} hiza="sag" />
      <BaslikBlok t={t} bas={K(1, "practice")} satirlar={b.satirlar} x={1860} y={300} boyut={120} hiza="sag"
        renkler={[RENK.koyuYesil]} />
      <Etiket t={t} bas={K(2, "same")} capa={[320, 835]} konum={[250, 700]} metin="SAME TESTS" renk={RENK.mercan} />
      {b.not && <Not t={t} bas={K(2, "tend")} metin={b.not} x={1860} y={450} hiza="sag" genislik={520} boyut={38} />}
    </>
  );
};

export default S34;
