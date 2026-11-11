// Sahne 37 — kısa süreli aşım güvenli sayılır; kaygı sürekli yüksek alım; etiket türü söylemez.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t0 = K(0, "week"), t1 = K(1, "steady,"), t2 = K(2, "label");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [150, 80, 1620], [0, 20, 1920])} />
      <Baslik t={t} bas={t0} bitis={t1 - 0.2} metin="A WEEK OR TWO" x={160} y={170} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "considered")} bitis={t1 - 0.2} metin="slightly over is considered safe" x={164} y={236} boyut={36} />
      <Ikon t={t} bas={K(0, "safe.")} bitis={t1 - 0.2} ad="onay" x={760} y={200} boyut={84} />
      <Baslik t={t} bas={t1} bitis={t2 - 0.2} metin="STEADY, HIGH INTAKE" x={160} y={170} boyut={92} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "over")} bitis={t2 - 0.2} metin="over a long time is the concern" x={164} y={236} boyut={36} />
      <Ikon t={t} bas={K(1, "long")} bitis={t2 - 0.2} ad="saat" x={1090} y={200} boyut={84} zemin={RENK.altin} />
      <Etiket t={t} bas={t2} capa={[1320, 470]} konum={[1500, 250]} metin="WHICH TYPE?" renk={RENK.altin} />
      <Ikon t={t} bas={K(2, "type")} ad="soru" x={1740} y={250} boyut={84} zemin={RENK.lacivert} />
      <Not t={t} bas={K(2, "which")} metin="the jar's label often doesn't say" x={1860} y={140} boyut={44} hiza="sag" genislik={900} />
    </>
  );
};
export default S37;
