// Sahne 42 — VITAL denemesi: D vitamini 2.000 IU, sonuç.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = s.cumleler[1].bas - 0.1, b2 = s.cumleler[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1780])}>
        <Etiket t={t} bas={K(1, "vitamin")} bitis={b2} capa={[390, 520]} konum={[250, 205]} metin="VITAMIN D3" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "cardiovascular")} capa={[755, 640]} konum={[1000, 800]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "more")} bitis={b1} metin="MORE ISN'T" x={1860} y={260} boyut={116} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "better")} bitis={b1} metin="BETTER" x={1860} y={380} boyut={116} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(0, "prevention.")} bitis={b1} metin="FOR PREVENTION" x={1860} y={480} boyut={40} renk={RENK.altin} hiza="sag" font="inter" aralik={4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "VITAL")} />
      <Baslik t={t} bas={K(1, "VITAL")} bitis={b2} metin="VITAL TRIAL" x={1080} y={150} boyut={72} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "25,871")} bitis={b2} vurgu="25,871" not="US ADULTS" x={1560} y={230} genislik={380} boyut={88} />
      <VurguRozet t={t} bas={K(1, "2,000")} bitis={b2} vurgu="2,000 IU" not="VITAMIN D3 DAILY" x={1560} y={440} genislik={380} boyut={88} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "5.3")} bitis={b2} vurgu="5.3 YRS" not="MEDIAN" x={1560} y={650} genislik={380} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "didn't")} metin="DIDN'T LOWER" x={1860} y={200} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Liste t={t} isaret="carpi" x={1180} y={330} aralik={96} boyut={38} genislik={700}
        ogeler={[{ bas: K(2, "cancer"), metin: "CANCER", renk: RENK.mercan }, { bas: K(2, "major"), metin: "MAJOR CARDIOVASCULAR EVENTS", renk: RENK.mercan }]} />
    </>
  );
};

export default S42;
