// Sahne 1 — hastane denemesi: üstte başlık, tepsi ve atıştırmalıklara etiket.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [110, 130, 1700])}>
        <Etiket t={t} bas={K(0, "hospital")} bitis={cik} capa={[300, 640]} konum={[300, 380]} metin="HOSPITAL TRAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ultra-processed")} capa={[1000, 700]} konum={[1000, 520]} metin="ULTRA-PROCESSED MENU" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* 1. cümle: 20 yetişkin */}
      <Baslik t={t} bas={K(0, "20")} bitis={cik} metin="20 ADULTS" x={960} y={190} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(0, "as much as")} bitis={cik} metin="ATE AS MUCH AS THEY LIKED" x={960} y={270} boyut={38} agirlik={800} hiza="orta" renk={RENK.altin} />
      {/* 2. cümle: +500 */}
      <Baslik t={t} bas={K(1, "500")} metin="+500" x={960} y={210} boyut={190} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={K(1, "calories")} metin="CALORIES A DAY" x={960} y={345} boyut={80} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S01;
