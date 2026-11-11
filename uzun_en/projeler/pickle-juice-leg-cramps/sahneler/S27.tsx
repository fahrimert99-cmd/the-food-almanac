// Sahne 27 — yapay, elektrikle tetiklenen kramplar; gece baldır krampı değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [160, 100, 1640])}>
        <Etiket t={t} bas={K(1, "electricity")} capa={[640, 800]} konum={[330, 640]} metin="ELECTRICITY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "calf")} capa={[480, 420]} konum={[900, 250]} metin="NIGHT CALF CRAMP" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "artificial") - 0.2} metin="ARTIFICIAL" x={80} y={100} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "artificial") + 0.1} metin="CRAMPS" x={80} y={196} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S27;
