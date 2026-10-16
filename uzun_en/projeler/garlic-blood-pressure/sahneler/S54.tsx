// Sahne 54 — sınırlar: diyet değişikliği aralığı, ek tedavi, test edilmemiş çiğ/pişmiş.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [220, 0, 1700], [260, 20, 1580])} />
      <Panel a={pPanel} taraf="sol" genislik={820} opak={0.96} />
      <BaslikBlok t={t} bas={K(0, "range")} satirlar={["SIMILAR TO A", "BIG DIET CHANGE"]} x={80} y={190} boyut={76} />
      <Liste t={t} x={80} y={470} aralik={110} boyut={34} isaret="carpi" genislik={700} ogeler={[
        { bas: K(0, "add-on"), metin: "AN ADD-ON TO TREATMENT", renk: RENK.altin },
        { bas: K(0, "nobody"), metin: "HEART ATTACKS: NOT SHOWN", renk: RENK.mercan },
      ]} />
      <Etiket t={t} bas={K(1, "Raw")} capa={[1200, 760]} konum={[1450, 330]} metin="RAW & COOKED: UNTESTED" renk={RENK.mercan} />
    </>
  );
};

export default S54;
