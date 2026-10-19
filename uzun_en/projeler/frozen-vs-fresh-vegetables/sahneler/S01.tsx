// Sahne 1 — taze brokoli, sağda boş kâğıt: başlık ve rozet sağ tarafta.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tGec = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [60, 90, 1700])}>
        <Etiket t={t} bas={K(1, "broccoli")} capa={[420, 400]} konum={[900, 180]} metin="FRESH BROCCOLI" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: soru */}
      <Baslik t={t} bas={K(0, "frozen")} bitis={tGec} metin="FROZEN VEGETABLES" x={1860} y={250} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={5} />
      <Baslik t={t} bas={K(0, "second best")} bitis={tGec} metin="SECOND BEST?" x={1860} y={340} boyut={120} renk={RENK.lacivert} hiza="sag" />
      {/* 2. cümle: rakam */}
      <BaslikBlok t={t} bas={K(1, "35")} satirlar={["35 DAYS", "CHILLED"]} x={1860} y={240} boyut={118} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "39 percent")} vurgu="–39%" not="vitamin C lost from stored broccoli" x={1560} y={560} genislik={440} renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={K(1, "In a 2007")} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S01;
