// Sahne 28 — zamanlama fikri: ortadaki basamaklar, iki yanda etiket ve not.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [180, 90, 1600], [240, 100, 1500])} />
      <BaslikBlok t={t} bas={K(0, "timing")} satirlar={["TIMING", "MAY MATTER"]} x={120} y={190} boyut={92}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(0, "earlier")} capa={[950, 820]} konum={[420, 840]} metin="EARLIER IN LIFE" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "protective")} capa={[1010, 260]} konum={[1520, 250]} metin="MORE PROTECTIVE?" renk={RENK.altin} />
      <Ikon t={t} bas={K(1, "That")} ad="soru" x={1660} y={520} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "idea,")} satirlar={["AN IDEA,"]} x={1800} y={650} boyut={72} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "not")} satirlar={["NOT A SETTLED FACT"]} x={1800} y={735} boyut={62} hiza="sag" renkler={[RENK.mercan]} />
    </>
  );
};

export default S28;
