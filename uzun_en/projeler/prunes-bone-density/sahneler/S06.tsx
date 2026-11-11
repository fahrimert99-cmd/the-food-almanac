// Sahne 6 — 100 g şeker, deneydeki yarım doz (50 g). Sol panelde sayılar.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Panel, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYari = K(1, "smaller") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700])}>
        <Etiket t={t} bas={K(1, "50")} capa={[960, 560]} konum={[1250, 150]} metin="TRIAL DOSE: 50 G" renk={RENK.altin} />
      </Kamera>
      <Panel a={einout(ilerle(t, 0.2, 0.7))} taraf="sol" genislik={760} />
      <Baslik t={t} bas={K(0, "100")} bitis={tYari} metin="100 G" x={70} y={300} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "38")} bitis={tYari} metin="38 G NATURAL" x={70} y={430} boyut={80} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "38")} bitis={tYari} metin="SUGARS" x={70} y={520} boyut={80} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "smaller")} metin="SMALLER DOSE" x={70} y={240} boyut={84} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" boyut={42} x={70} y={350} aralik={100} genislik={640} ogeler={[
        { bas: K(1, "50"), metin: "50 G · UNDER 2 OZ", renk: RENK.altin },
        { bas: K(1, "120"), metin: "≈ 120 CALORIES", renk: RENK.mercan },
        { bas: K(1, "19"), metin: "19 G SUGARS", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S06;
