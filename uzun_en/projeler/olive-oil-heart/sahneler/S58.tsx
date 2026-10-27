// Sahne 58 — özet: ABD çalışmaları, yarım yemek kaşığı, tereyağı/margarin/mayonez yerine.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = 10.3;
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 30, 1760])}>
        <Etiket t={t} bas={K(0, "lower")} bitis={son} capa={[1130, 330]} konum={[1600, 440]} metin="LOWER RISK" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "replaced")} bitis={son} capa={[920, 275]} konum={[1580, 250]} metin="OLIVE OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "butter,")} bitis={son} capa={[1470, 820]} konum={[1650, 700]} metin="BUTTER" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "half")} bitis={son} satirlar={["HALF A", "TABLESPOON"]} x={60} y={130} boyut={92}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "day")} bitis={son} metin="A DAY · LINKED TO LOWER RISK" x={64} y={332} boyut={30} agirlik={800} genislik={640} />
      <Not t={t} bas={K(0, "replaced")} bitis={son} metin="OLIVE OIL REPLACED:" x={64} y={420} boyut={28} agirlik={800} renk={RENK.altin} genislik={400} />
      <Liste t={t} x={60} y={470} aralik={72} boyut={28} isaret="carpi" genislik={420}
        ogeler={[
          { bas: K(0, "butter,"), metin: "BUTTER", renk: RENK.mercan, bitis: son },
          { bas: K(0, "margarine"), metin: "MARGARINE", renk: RENK.mercan, bitis: son },
          { bas: K(0, "mayonnaise."), metin: "MAYONNAISE", renk: RENK.mercan, bitis: son },
        ]} />
      <Baslik t={t} bas={K(1, "association,")} metin="ASSOCIATION," x={70} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT PROOF" x={70} y={290} boyut={104} renk={RENK.mercan} />
    </>
  );
};

export default S58;
