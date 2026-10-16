// Sahne 53 — özet: randomize çalışmalarda düşüş, kanıtın kaynağı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "Most") - 0.15;
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 100, 1800], [0, 140, 1680])} />
      <Panel a={pPanel} taraf="sag" genislik={820} opak={0.96} />
      <BaslikBlok t={t} bas={K(0, "randomized")} satirlar={["RANDOMIZED", "TRIALS"]} x={1860} y={190} boyut={84} hiza="sag" bitis={tS1} />
      <VurguRozet t={t} bas={K(0, "eight")} vurgu="8–9" not="points systolic, pooled analyses" x={1560} y={450} genislik={440} bitis={tS1} />
      <Liste t={t} x={1260} y={300} aralik={110} boyut={36} isaret="nokta" genislik={600} ogeler={[
        { bas: K(1, "one"), metin: "ONE RESEARCH GROUP", renk: RENK.altin },
        { bas: K(1, "supplements"), metin: "MOSTLY SUPPLEMENTS", renk: RENK.altin },
      ]} />
      <Etiket t={t} bas={K(0, "garlic")} bitis={tS1} capa={[210, 880]} konum={[330, 640]} metin="GARLIC" renk={RENK.yesil} />
    </>
  );
};

export default S53;
