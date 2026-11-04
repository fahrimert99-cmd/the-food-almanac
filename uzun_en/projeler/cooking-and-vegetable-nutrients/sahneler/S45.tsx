// Sahne 45 — süre ve ısı
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      <Baslik t={t} bas={K(0, "time")} bitis={9.4} metin="TIME + HEAT" x={70} y={115} boyut={90} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "30")} capa={[780, 440]} konum={[1000, 150]} metin="30 MINUTES" renk={RENK.altin} boyut={28} bitis={9.4} />
      <Etiket t={t} bas={K(1, "heating")} capa={[1200, 600]} konum={[1640, 640]} metin="LOWER VITAMIN C" renk={RENK.mercan} boyut={28} bitis={9.4} />
      <Not t={t} bas={K(1, "depend")} bitis={9.4} metin="RESULTS DEPEND ON CONDITIONS" x={1860} y={130} hiza="sag" boyut={30} agirlik={800} genislik={420} />
      <Baslik t={t} bas={K(2, "gentle")} metin="GENTLE + SHORT" x={70} y={115} boyut={90} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "sensible")} metin="A SENSIBLE RULE" x={74} y={180} boyut={34} agirlik={800} />
      <Ikon t={t} bas={K(2, "short")} ad="onay" x={760} y={125} boyut={80} />
    </>
  );
};
export default S45;
