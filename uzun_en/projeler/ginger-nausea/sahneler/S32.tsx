// Sahne 32 — denemelerde ölçülü dozlar: 0,5–2 g.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tHalf = K(0, "half"), tCount = K(1, "count");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [30, 70, 1780])}>
        <Etiket t={t} bas={K(0, "measured")} bitis={tCount} capa={[620, 640]} konum={[1080, 330]} metin="MEASURED DOSE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tHalf} metin="0.5 TO 2" x={1860} y={170} boyut={128} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "two")} metin="GRAMS" x={1860} y={315} boyut={128} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "mostly")} metin={m.baslik?.not ?? "the range tested in these trials"} x={1860} y={420} hiza="sag" genislik={560} boyut={32} />
      <Ikon t={t} bas={tCount} ad="onay" x={1375} y={650} boyut={80} />
      <Baslik t={t} bas={tCount} metin="EASY TO COUNT" x={1860} y={650} boyut={74} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(1, "mug")} metin="far easier than a mug of tea" x={1860} y={720} hiza="sag" genislik={600} boyut={32} />
    </>
  );
};

export default S32;
