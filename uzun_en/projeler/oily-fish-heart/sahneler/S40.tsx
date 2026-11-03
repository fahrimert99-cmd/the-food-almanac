// Sahne 40 — dürüst özet: tabak ve kitaplar üzerinde üç etiket (bağ, daha uzun denemeler, soru işareti).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={pencere}>
        <Etiket t={t} bas={K(1, "linked") - 0.1} capa={[880, 560]} konum={[900, 170]} metin="LINKED TO LOWER RISK" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={K(1, "longer dietary trials") - 0.1} capa={[1380, 720]} konum={[1480, 470]} metin="LONGER TRIALS NEEDED" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "fish itself") - 0.1} capa={[330, 460]} konum={[330, 335]} metin="FISH ITSELF?" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "honest")} metin="AN HONEST" x={110} y={130} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "summary") - 0.05} metin="SUMMARY" x={110} y={205} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S40;
