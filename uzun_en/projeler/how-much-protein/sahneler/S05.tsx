// Sahne 5 — kas kaybı ve sarkopeni tanımı.
import React from "react";
import { Baslik, Kamera, Not, RENK, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS = K(1, "doctors");
  const tOld = K(1, "everyday") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800])} />
      
      <Baslik t={t} bas={K(0, "older")} bitis={tOld - 0.1} metin="GETTING OLDER" x={1860} y={170} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "lose")} bitis={tOld - 0.1} metin="LOSING MUSCLE" x={1860} y={265} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "strength")} bitis={tOld - 0.1} metin="AND STRENGTH" x={1860} y={360} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "everyday")} bitis={tS - 0.1} metin="EVERYDAY LIFE" x={1860} y={220} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tS} metin="SARCOPENIA" x={1860} y={220} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "sarcopenia")} metin="age-related loss of muscle mass and strength" x={1860} y={290} hiza="sag" boyut={34} genislik={470} agirlik={800} />
    </>
  );
};

export default S05;
