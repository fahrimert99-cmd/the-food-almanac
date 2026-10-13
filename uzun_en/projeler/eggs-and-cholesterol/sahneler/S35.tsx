// Sahne 35 — her +300 mg diyet kolesterolü: %17; yarım yumurta: %6 (ilişki). Görsel solda, yazılar sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[1].bas - 0.15;
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [60, 170, 1700])}>
        <Etiket t={t} bas={K(0, "one and a half")} bitis={cik} capa={[640, 520]} konum={[900, 330]} metin="≈ 1½ EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "half an egg")} capa={[740, 540]} konum={[960, 400]} metin="HALF AN EGG" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: +300 MG ve %17 */}
      <Baslik t={t} bas={K(0, "300")} bitis={cik} metin="+300 MG A DAY" x={1850} y={170} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "dietary")} bitis={cik} metin="dietary cholesterol" x={1850} y={250} hiza="sag" boyut={36} />
      <VurguRozet t={t} bas={K(0, "17")} bitis={cik} vurgu="+17%" not="heart disease and stroke" x={1500} y={440} genislik={420} renk={RENK.mercan} />
      {/* 2. cümle: yarım yumurta, %6 */}
      <BaslikBlok t={t} bas={K(1, "half")} satirlar={b.satirlar} x={1850} y={170} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "6")} vurgu={b.vurgu ?? "+6%"} not={b.not} x={1500} y={440} genislik={440} renk={RENK.altin} />
    </>
  );
};

export default S35;
