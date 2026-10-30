// Sahne 10 — puan kartı yalnızca sayım; iki tür kanıt (sağda rozetler, solda büyüteç etiketi).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);

  const tIki = K(2, "two");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [60, 50, 1800], [160, 100, 1600])}>
        <Etiket t={t} bas={K(0, "scorecard")} bitis={K(1, "real question") - 0.2} capa={[940, 560]} konum={[1500, 330]} metin="JUST A WAY TO COUNT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "protects")} capa={[820, 330]} konum={[480, 180]} metin="DOES IT PROTECT?" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tIki} satirlar={["TWO KINDS", "OF EVIDENCE"]} x={1860} y={190} boyut={78} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S10;
