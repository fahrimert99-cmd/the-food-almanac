// Sahne 6 — "hangi toksin?" sorusu, büyüteç
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [180, 0, 1560], [260, 40, 1420]);
  const cik = K(1, "Which") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={pw}>
        <Etiket t={t} bas={K(0, "cleanse")} bitis={cik} capa={[960, 700]} konum={[1400, 760]} metin="A CLEANSE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "toxin,")} capa={[1180, 300]} konum={[1500, 150]} metin="WHICH TOXIN?" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "question")} bitis={cik} metin="A FAIR QUESTION" x={60} y={170} boyut={78} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "measure")} satirlar={["HOW WOULD YOU", "MEASURE IT?"]} x={1500} y={600} boyut={70} hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={K(1, "leaving")} ad="soru" x={1500} y={850} boyut={96} zemin={RENK.altin} />
    </>
  );
};
export default S06;
