// Sahne 3 — yol haritası: beklenti, süre, dikkat edilecek kişiler.
import React from "react";
import { AdimAkisi, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "how long")} capa={[1595, 640]} konum={[1480, 270]} metin="TIME" renk={RENK.altin} />
      </Kamera>
      <AdimAkisi t={t} x={900} y={150} boyut={32} adimlar={[
        { bas: K(0, "what to expect"), metin: "WHAT TO EXPECT", renk: RENK.mercan },
        { bas: K(0, "how long"), metin: "HOW LONG IT LASTS", renk: RENK.altin },
        { bas: K(0, "who should"), metin: "WHO SHOULD BE CAREFUL", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S03;
