// Sahne 55 — MCT yağı ile hindistancevizi yağı farkı; %12 rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "MCT")} capa={[985, 800]} konum={[1130, 880]} metin="MCT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "jar")} capa={[700, 440]} konum={[1020, 290]} metin="COCONUT OIL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" />
      <BaslikBlok t={t} bas={K(0, "medium-chain")} satirlar={["MCT AND", "COCONUT OIL"]} x={1860} y={190} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "12 percent")} vurgu="≈ 12%" not="the two shortest medium-chain fats" x={1500} y={470} genislik={560} />
    </>
  );
};

export default S55;
