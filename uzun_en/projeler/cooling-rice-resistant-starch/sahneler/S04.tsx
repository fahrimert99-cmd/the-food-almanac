// Sahne 4 — bölüm girişi: marka adı, ardından "pişir → soğut" akışı.
import React from "react";
import { AdimAkisi, Baslik, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/04" sinirla={false} pencere={kameraYolu(t, s.sure, [0, -75, 1920], [50, -45, 1790])} />
      <Baslik t={t} bas={K(0, "Food") - 0.4} bitis={c[1].bas - 0.1} metin={MARKA.filigran} x={70} y={230} boyut={78} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "starch") - 0.1} metin="STARCH" x={70} y={250} boyut={124} renk={RENK.lacivert} />
      <AdimAkisi t={t} x={390} y={430} boyut={30} numarali={false} adimlar={[
        { bas: K(1, "cook"), metin: "COOK", renk: RENK.mercan },
        { bas: K(1, "cool"), metin: "COOL", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S04;
