// Sahne 7 — mmHg ve uzun süre yüksek tansiyonun yükü.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [20, 20, 1860], [130, 70, 1680])} />
      <Etiket t={t} bas={K(0, "mercury")} bitis={K(1, "stays high")} capa={[660, 430]} konum={[900, 300]} metin="MERCURY COLUMN" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "millimeters")} vurgu="mm Hg" not="millimeters of mercury" x={1560} y={150} genislik={460} boyut={96} />
      <Liste t={t} x={1330} y={400} aralik={80} boyut={34} genislik={500} ogeler={[
        { bas: K(1, "stays high"), metin: "HIGH FOR YEARS", renk: RENK.altin },
        { bas: K(1, "heart"), metin: "STRAIN ON HEART", renk: RENK.mercan },
        { bas: K(1, "arteries"), metin: "STRAIN ON ARTERIES", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S07;
