// Sahne 39 — Sinirler: eller ve ayaklarda uyuşma/karıncalanma, denge.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 100, 1700], [40, 120, 1620]);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pencere}>
        <Etiket t={t} bas={K(1, "Hands")} bitis={K(1, "balance") - 0.1} capa={[880, 950]} konum={[1130, 800]} metin="HANDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "feet")} bitis={K(1, "balance") - 0.1} capa={[420, 900]} konum={[300, 770]} metin="FEET" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "balance")} capa={[640, 420]} konum={[980, 330]} metin="BALANCE" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={0.3} metin="LOW B12 CAN AFFECT NERVES" x={1030} y={150} boyut={26} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "numb")} metin="NUMB OR" x={1030} y={310} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "tingly")} metin="TINGLY" x={1030} y={430} boyut={110} renk={RENK.koyuYesil} />
    </>
  );
};

export default S39;
