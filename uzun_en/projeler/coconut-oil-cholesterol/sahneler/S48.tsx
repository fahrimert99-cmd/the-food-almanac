// Sahne 48 — günlük kaşık alışkanlığı yok: sağ panelde başlık + "etki yok" listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(1, "Skip") - 0.4, 0.6));
  const tBaslik = K(1, "Skip");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "spoonful-a-day")} capa={[330, 275]} konum={[760, 380]} metin="SPOONFUL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "coconut")} capa={[250, 720]} konum={[900, 520]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["NO DAILY", "SPOONFUL"]} x={1860} y={190} boyut={92} hiza="sag" />
      <Not t={t} bas={K(2, "no significant")} metin="NO SIGNIFICANT EFFECT ON:" x={1860} y={420} hiza="sag" boyut={30} agirlik={800} genislik={700} />
      <Liste t={t} x={1130} y={500} aralik={80} boyut={38} isaret="nokta" genislik={740} ogeler={[
        { bas: K(2, "weight,"), metin: "WEIGHT", renk: RENK.lacivert },
        { bas: K(2, "waist"), metin: "WAIST SIZE", renk: RENK.lacivert },
        { bas: K(2, "blood sugar"), metin: "BLOOD SUGAR", renk: RENK.lacivert },
        { bas: K(2, "no payoff"), metin: "NO PAYOFF", renk: RENK.altin },
        { bas: K(2, "LDL"), metin: "LDL RISE", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S48;
