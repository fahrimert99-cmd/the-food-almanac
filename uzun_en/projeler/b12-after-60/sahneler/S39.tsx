// Sahne 39 — Sinirler: uyuşma, karıncalanma, denge. Eldiven = eller, botlar = ayaklar, tırabzan = denge.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 80, 1700], [60, 110, 1600])}>
        <Etiket t={t} bas={K(1, "Hands")} capa={[900, 950]} konum={[1180, 800]} metin="HANDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "feet")} capa={[390, 820]} konum={[420, 640]} metin="FEET" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "balance")} capa={[650, 420]} konum={[1000, 500]} metin="BALANCE" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={K(1, "tingly,")} kaynak={[900, 960]} hedef={[900, 880]} adet={12} aralik={0.12} omur={1.2} yayilma={200}
          kavis={-60} boyut={5} tohum="karinca" hedefYayilma={120} />
      </Kamera>
      <Baslik t={t} bas={K(0, "nerves.")} metin="NERVES" x={1860} y={200} boyut={30} hiza="sag" renk={RENK.altin} font="inter" aralik={6} />
      <BaslikBlok t={t} bas={K(1, "numb")} satirlar={["NUMB OR", "TINGLY"]} x={1860} y={320} boyut={140} hiza="sag" adim={0.3} />
      <Not t={t} bas={K(1, "tingly,") + 0.3} metin="hands and feet" x={1860} y={600} boyut={38} hiza="sag" genislik={700} agirlik={700} />
    </>
  );
};

export default S39;
