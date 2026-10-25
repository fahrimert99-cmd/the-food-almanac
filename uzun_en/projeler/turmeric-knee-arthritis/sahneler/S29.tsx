// Sahne 29 — açık sorular: solda manzara görseli, sağda boş kâğıt üzerinde üç soru.
import React from "react";
import { BaslikBlok, Kamera, kameraYolu, Liste, RENK, SP, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820]);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pen} />
      <BaslikBlok t={t} bas={K(0, "what do we")} satirlar={s.meta.baslik?.satirlar ?? ["OPEN", "QUESTIONS"]} x={1200} y={210} boyut={104}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Liste t={t} x={1200} y={460} aralik={118} boyut={36} genislik={680}
        ogeler={[
          { bas: K(1, "best product"), metin: "BEST PRODUCT + DOSE", renk: RENK.altin },
          { bas: K(2, "benefit lasts"), metin: "BENEFIT BEYOND MONTHS", renk: RENK.altin },
          { bas: K(3, "seventies"), metin: "AGES 70s–80s", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S29;
