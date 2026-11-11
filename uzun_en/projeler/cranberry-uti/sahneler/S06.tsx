// Sahne 6 — PAC hipotezi: meyve, bardak ve büyütülmüş mercek
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "cranberries")} capa={[387, 640]} konum={[230, 430]} metin="CRANBERRY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "bacteria")} capa={[1447, 653]} konum={[1330, 890]} metin="BACTERIA" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "wall")} capa={[1650, 700]} konum={[1700, 890]} metin="BLADDER WALL" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "proanthocyanidins")} metin="PROANTHOCYANIDINS" x={60} y={90} boyut={44} renk={RENK.altin} font="inter" />
      <Baslik t={t} bas={K(0, "PACs")} metin={b.satirlar[0]} x={60} y={190} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Researchers")} metin="RESEARCHERS THINK" x={60} y={320} boyut={34} renk={RENK.lacivert} font="inter" />
      <Not t={t} bas={K(1, "stop")} metin={b.not!} x={1467} y={140} hiza="orta" genislik={560} boyut={30} />
    </>
  );
};

export default S06;
