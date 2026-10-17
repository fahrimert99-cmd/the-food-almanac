// Sahne 4 — soru: sarımsak gerçekten tansiyonu düşürür mü, yoksa mutfak efsanesi mi?
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOr = K(0, "or is it");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [80, 20, 1780], [190, 70, 1600])} />
      <Etiket t={t} bas={K(0, "garlic")} bitis={tOr - 0.1} capa={[930, 330]} konum={[1640, 700]} metin="GARLIC" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "blood pressure")} bitis={tOr - 0.1} capa={[900, 780]} konum={[1640, 860]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      <Panel a={eout(ilerle(t, tOr - 0.2, 0.6))} taraf="sol" genislik={760} opak={0.97} />
      <Baslik t={t} bas={K(0, "kitchen")} metin="KITCHEN" x={70} y={380} boyut={116} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "legend")} metin="LEGEND?" x={70} y={500} boyut={116} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "trials")} metin="WHAT THE TRIALS FOUND" x={74} y={640} boyut={38} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
