// Sahne 60 — plan: önce yiyecek, daha az sodyum, bakım ekibiyle görüşme.
import React from "react";
import { AdimAkisi, Baslik, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPlan = K(1, "plan");
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 20, 1800])} />
      <AdimAkisi t={t} x={960} y={190} boyut={34} adimlar={[
        { bas: K(0, "Food first"), metin: "FOOD FIRST", renk: RENK.yesil },
        { bas: K(0, "less sodium"), metin: "LESS SODIUM", renk: RENK.altin },
        { bas: K(0, "conversation"), metin: "CARE TEAM", renk: RENK.lacivert },
      ]} />
      <Baslik t={t} bas={tPlan} metin="THE PLAN" x={1150} y={390} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "evidence")} metin="WHAT THE EVIDENCE SUPPORTS" x={1150} y={460} boyut={32} hiza="orta" agirlik={800} />
    </>
  );
};

export default S60;
