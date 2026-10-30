// Sahne 39 — etikette elemental kalsiyum; karbonat besinle, sitrat besinli ya da besinsiz.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pSol = eout(ilerle(t, K(0, "200") - 0.4, 0.6));
  const pSag = eout(ilerle(t, K(1, "Calcium") - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1920])}>
      </Kamera>
      <Panel a={pSol} taraf="sol" genislik={700} opak={0.9} />
      <Panel a={pSag} taraf="sag" genislik={640} opak={0.9} />
      <Etiket t={t} bas={K(0, "elemental")} capa={[790, 520]} konum={[330, 520]} metin="ELEMENTAL CALCIUM" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "carbonate")} capa={[880, 660]} konum={[330, 700]} metin="CARBONATE: WITH FOOD" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "200")} vurgu="200–300 MG" not="starting amount" x={300} y={150} boyut={80} genislik={480} />
      <Baslik t={t} bas={K(1, "Calcium")} metin="CALCIUM" x={1860} y={290} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "citrate")} metin="CITRATE" x={1860} y={410} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "with or")} metin="with or without food" x={1860} y={500} boyut={34} hiza="sag" />
    </>
  );
};

export default S39;
