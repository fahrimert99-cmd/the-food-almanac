// Sahne 52 — Adım 1: eczacıya sor. Masadaki nesnelere etiketler; yeni reçete, greyfurt, hızlı kontrol, ücretsiz.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 10, 1900], [70, 30, 1780]);
  const tYeni = K(2, "prescription"), tGreyf = K(2, "grapefruit"), tHizli = K(3, "check");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={pencere}>
        <Etiket t={t} bas={tYeni} bitis={tHizli - 0.1} capa={[265, 540]} konum={[290, 240]} metin="NEW PRESCRIPTION" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tGreyf} capa={[949, 690]} konum={[1010, 500]} metin="GRAPEFRUIT?" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tHizli} capa={[610, 520]} konum={[640, 215]} metin="QUICK CHECK" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.0} bitis={tYeni - 0.15} metin="STEP 1" x={960} y={70} boyut={32} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "Ask")} bitis={tYeni - 0.15} metin="ASK YOUR PHARMACIST" x={960} y={165} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(3, "costs")} vurgu="FREE" not="IT COSTS NOTHING" x={1565} y={115} boyut={96} genislik={380} renk={RENK.yesil} />
    </>
  );
};

export default S52;
