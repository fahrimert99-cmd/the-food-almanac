// Sahne 50 — Glukoz ölçerle kendi tepkini izle; bakım ekibine sor.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMeter = K(0, "glucose"), tSpoon = K(0, "spoonful"), tCare = K(1, "care team"), tFit = K(1, "honey fits");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 100, 1620])}>
        <Etiket t={t} bas={tMeter} capa={[480, 420]} konum={[420, 250]} metin="HOME GLUCOSE METER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSpoon} capa={[1010, 500]} konum={[1330, 300]} metin="A SPOONFUL" renk={RENK.altin} />
        <Etiket t={t} bas={tCare} capa={[1450, 700]} konum={[1550, 520]} metin="ASK YOUR CARE TEAM" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tFit} metin="DOES HONEY FIT YOUR PLAN?" x={960} y={105} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S50;
