// Sahne 58 — kendi ölçümün manşetten değerli.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [110, 60, 1700])}>
        <Etiket t={t} bas={K(0, "meter")} capa={[390, 620]} konum={[340, 780]} metin="YOUR METER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "sugar")} metin="CHECK AT HOME" x={960} y={80} boyut={32} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      <Baslik t={t} bas={K(0, "own")} metin="YOUR OWN METER" x={960} y={160} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "more")} metin="TELLS MORE THAN ANY HEADLINE" x={960} y={250} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <AdimAkisi t={t} x={960} y={880} boyut={30} numarali={false} adimlar={[
        { bas: K(1, "what you see"), metin: "WHAT YOU SEE", renk: RENK.yesil },
        { bas: K(1, "care team"), metin: "YOUR CARE TEAM", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S58;
