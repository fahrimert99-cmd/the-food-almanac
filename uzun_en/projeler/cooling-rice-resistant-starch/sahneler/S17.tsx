// Sahne 17 — ikinci çapraz deneme: sıcak ve soğutulmuş pirinç, ortada cep saati.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={K(0, "hot white rice")} capa={[360, 560]} konum={[360, 905]} metin="HOT WHITE RICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "cooled in a")} capa={[1480, 640]} konum={[1480, 905]} metin="COOLED RICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "twelve hours")} capa={[960, 330]} konum={[960, 190]} metin="12 HOURS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "second")} bitis={K(0, "twelve") } metin="SECOND TRIAL" x={90} y={120} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "20")} vurgu="20" not="healthy adults" x={1560} y={110} genislik={340} boyut={92} bitis={K(0, "compared")} />
    </>
  );
};

export default S17;
