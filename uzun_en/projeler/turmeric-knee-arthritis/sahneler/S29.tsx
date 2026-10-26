// Sahne 29 — Açık sorular: görsel solda, sağda başlık ve üç soru.
import React from "react";
import { BaslikBlok, Ikon, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pencere}>
        {/* sisli yolun üstünde soru işareti */}
        <Ikon t={t} bas={K(0, "not know")} ad="soru" x={600} y={330} boyut={104} zemin={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={K(0, "do we not know")} satirlar={["OPEN", "QUESTIONS"]} x={1130} y={230} boyut={104}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1130} y={500} aralik={118} boyut={34} genislik={720} ogeler={[
        { bas: K(1, "best product"), metin: "BEST PRODUCT AND DOSE", renk: RENK.altin },
        { bas: K(2, "benefit lasts"), metin: "LASTS BEYOND MONTHS", renk: RENK.altin },
        { bas: K(3, "seventies"), metin: "PEOPLE IN THEIR 70S–80S", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S29;
