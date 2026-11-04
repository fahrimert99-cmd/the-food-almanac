// Sahne 19 — küçük fark (6 puan) ve üçüncü denemenin "hangi pirinç" bükümü.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [120, 30, 1720], [180, 80, 1600])}>
        <Etiket t={t} bas={K(0, "glucose meter")} bitis={K(1, "third")} capa={[930, 850]} konum={[1450, 900]} metin="GLUCOSE METER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "third")} capa={[1180, 690]} konum={[1500, 600]} metin="THIRD TRIAL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "which rice")} capa={[760, 420]} konum={[450, 330]} metin="WHICH RICE?" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "Six")} bitis={K(1, "And")} vurgu="6" not="points: small" x={300} y={150} genislik={340} boyut={110} />
      <Baslik t={t} bas={K(0, "nothing,")} bitis={K(1, "And")} metin="NOT NOTHING," x={110} y={420} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "small")} bitis={K(1, "And")} metin="BUT SMALL" x={110} y={490} boyut={64} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "twist")} metin="THE TWIST" x={1830} y={190} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "about which")} metin="comes from the rice you buy" x={1830} y={270} hiza="sag" boyut={32} agirlik={700} genislik={520} />
    </>
  );
};

export default S19;
