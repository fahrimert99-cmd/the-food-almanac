// Sahne 50 — Etiketleri oku: meyve suyu karışımları greyfurt içerebilir; FDA kontrol etmeyi önerir.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1780]);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={pencere}>
        <Etiket t={t} bas={K(1, "juice blends")} capa={[945, 430]} konum={[790, 205]} metin="FRUIT JUICE BLENDS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "grapefruit")} capa={[1445, 700]} konum={[1590, 205]} metin="MAY CONTAIN GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.05} bitis={K(1, "Some") - 0.1} metin="READ LABELS" x={960} y={150} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "FDA")} vurgu="FDA" not="ADVISES CHECKING" x={330} y={70} boyut={90} genislik={400} />
    </>
  );
};

export default S50;
