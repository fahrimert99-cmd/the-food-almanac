// Sahne 8 — kapı ve haplar: dozun yalnızca bir kısmı geçer.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitA = K(1, "Your") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [90, 0, 1740])}>
        <Etiket t={t} bas={K(0, "gatekeeper,")} bitis={K(0, "pill's")} capa={[965, 520]} konum={[965, 140]} metin="GATEKEEPER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "pill's")} bitis={bitA} capa={[1280, 560]} konum={[1280, 140]} metin="THE PILL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "only")} bitis={bitA} metin="ONLY PART" x={90} y={190} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "part")} bitis={bitA} metin="GETS THROUGH" x={90} y={300} boyut={100} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "prescription")} metin="YOUR PRESCRIPTION" x={90} y={190} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "set")} metin="SET WITH THAT IN MIND" x={90} y={290} boyut={66} renk={RENK.koyuYesil} />
    </>
  );
};

export default S08;
