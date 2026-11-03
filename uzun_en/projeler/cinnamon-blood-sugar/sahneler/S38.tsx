// Sahne 38 — sınır kilograma göredir; küçük insanlar ve torunlar için fırınlanan kurabiyeler.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700])} />
      <Baslik t={t} bas={K(0, "limit")} bitis={K(1, "If") - 0.1} metin="LIMIT PER KILOGRAM" x={1860} y={130} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "smaller")} bitis={K(1, "If") - 0.1} metin="smaller people reach it sooner" x={1860} y={196} boyut={38} hiza="sag" />
      <Ikon t={t} bas={K(0, "sooner")} bitis={K(1, "If") - 0.1} ad="ok" x={1000} y={240} boyut={80} zemin={RENK.altin} />
      <Etiket t={t} bas={K(1, "bake")} capa={[640, 540]} konum={[540, 300]} metin="CINNAMON TREATS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "grandchildren,")} capa={[900, 600]} konum={[780, 150]} metin="FOR GRANDCHILDREN" renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "small")} ad="uyari" x={1740} y={260} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={K(1, "too")} metin="may be too much for a small child" x={1860} y={140} boyut={44} hiza="sag" genislik={900} />
    </>
  );
};
export default S38;
