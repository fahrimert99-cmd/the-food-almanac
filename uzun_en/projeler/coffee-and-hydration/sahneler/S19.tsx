// Sahne 19 — küçük fark (idrarda sodyum) ve iki denemede de ~0.4 kg kilo kaybı.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "sodium")} bitis={K(1, "and") - 0.1} capa={[1330, 420]} konum={[1560, 250]} metin="MORE SODIUM IN URINE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "body weight")} capa={[730, 470]} konum={[420, 130]} metin="BODY WEIGHT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "not a")} capa={[1330, 430]} konum={[1560, 250]} metin="NOT A COFFEE EFFECT" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "0.4")} vurgu="≈ 0.4 KG" not="down in both trials" x={1710} y={650} genislik={330} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S19;
