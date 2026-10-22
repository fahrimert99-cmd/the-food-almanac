// Sahne 31 — kefirin kendi mikropları dışkıda bulundu; derleme yazarları geçici sağkalım olarak yorumladı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOwn = K(0, "own"), tStool = K(0, "stool");
  const tRead = K(1, "reviewers"), tSurv = K(1, "surviving"), tPerh = K(1, "perhaps"), tTemp = K(1, "temporarily");
  const pPan = eout(ilerle(t, tRead - 0.2, 0.8));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1780])}>
        <Etiket t={t} bas={tOwn} bitis={tRead - 0.2} capa={[745, 533]} konum={[260, 430]} metin="KEFIR MICROBES" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tStool} bitis={tRead - 0.2} capa={[1597, 251]} konum={[1640, 370]} metin="IN STOOL SAMPLES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={640} />
      <Not t={t} bas={tRead} metin="THE REVIEWERS' READING" x={1860} y={230} boyut={32} agirlik={800} hiza="sag" genislik={520} renk={RENK.altin} />
      <Baslik t={t} bas={tSurv} metin="SURVIVING" x={1860} y={340} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tSurv + 0.2} metin="THE TRIP" x={1860} y={450} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tPerh} metin="PERHAPS ONLY TEMPORARILY" x={1860} y={560} boyut={36} agirlik={800} hiza="sag" genislik={440} />
      <Ikon t={t} bas={tTemp} ad="saat" x={1760} y={760} boyut={110} zemin={RENK.altin} />
    </>
  );
};

export default S31;
