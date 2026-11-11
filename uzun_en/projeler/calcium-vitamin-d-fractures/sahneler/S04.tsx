// Sahne 4 — Kanal tanıtımı, kalsiyum + D vitamini, kemik.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ad = MARKA.ad.toUpperCase().split(" ");
  const tCal = K(1, "calcium");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1660])}>
        <Etiket t={t} bas={K(1, "bones")} capa={[1330, 330]} konum={[1730, 450]} metin="BONE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "The")} bitis={K(1, "Let's") - 0.1} metin={ad.slice(0, 2).join(" ")} x={60} y={740} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Almanac")} bitis={K(1, "Let's") - 0.1} metin={ad.slice(2).join(" ")} x={60} y={830} boyut={72} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCal} metin="CALCIUM" x={1880} y={770} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "vitamin")} metin="+ VITAMIN D" x={1880} y={850} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
