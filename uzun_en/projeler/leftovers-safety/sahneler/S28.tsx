// Sahne 28 — mikrodalga; yeniden ısıtma etiketi, zaman → soğutma → ısı akışı, "kurtarma değil" notu.
import React from "react";
import { AdimAkisi, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRe = K(0, "reheating"), tIne = K(0, "inefficient");
  const tTime = K(1, "time"), tCool = K(1, "cooling"), tHeat = K(2, "Heat"), tResc = K(2, "rescue.");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
      <Etiket t={t} bas={tRe} bitis={tTime - 0.2} capa={[840, 580]} konum={[900, 930]} metin="REHEATING" renk={RENK.altin} boyut={32} />
      <Etiket t={t} bas={tIne} capa={[850, 230]} konum={[1330, 140]} metin="INEFFICIENT" renk={RENK.mercan} boyut={32} />
      <Etiket t={t} bas={tResc - 0.2} capa={[1190, 440]} konum={[1580, 300]} metin="NOT A RESCUE" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <AdimAkisi t={t} x={960} y={915} boyut={32} adimlar={[
        { bas: tTime, metin: "TIME", renk: RENK.yesil }, { bas: tCool, metin: "COOLING", renk: RENK.yesil }, { bas: tHeat, metin: "HEAT", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S28;
