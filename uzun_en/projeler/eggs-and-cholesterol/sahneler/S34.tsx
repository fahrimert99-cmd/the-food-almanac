// Sahne 34 — JAMA 2019: altı kohort, 29.615 kişi, 17,5 yıl. Sınıf görseli: üstteki boş duvar yazılara ayrılır.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [90, 60, 1740])}>
        <Etiket t={t} bas={K(0, "17.5")} bitis={cik} capa={[1480, 600]} konum={[1480, 400]} metin="17.5 YEARS MEDIAN" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "eggs")} capa={[345, 780]} konum={[640, 580]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      {t > 0.05 && <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />}
      <Baslik t={t} bas={K(0, "2019")} metin="2019" x={70} y={250} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "six")} metin="6 US COHORTS" x={74} y={385} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "29,615")} bitis={cik} vurgu="29,615" not="people followed" x={1200} y={140} genislik={400} boyut={88} />
      <Baslik t={t} bas={K(1, "heart")} metin="HEART DISEASE?" x={1850} y={250} boyut={84} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S34;
