// Sahne 37 — gece yulafı: görsel solda, sağda boş kâğıt üzerinde başlık ve notlar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(1, "trial"), tConv = K(2, "convenient"), tNot = K(2, "not");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1780])} />
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "overnight")} satirlar={s.meta.baslik!.satirlar} x={1860} y={190} boyut={104} hiza="sag" />
      <Etiket t={t} bas={K(1, "rolled")} bitis={tTrial - 0.2} capa={[470, 720]} konum={[1500, 470]} metin="ROLLED OATS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "milk")} bitis={tTrial - 0.2} capa={[960, 620]} konum={[1500, 580]} metin="MILK" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "yogurt")} bitis={tTrial - 0.2} capa={[600, 420]} konum={[1500, 690]} metin="YOGURT" renk={RENK.altin} />
      <Ikon t={t} bas={tTrial} ad="soru" x={1330} y={560} zemin={RENK.altin} bitis={tConv - 0.2} />
      <Not t={t} bas={tTrial + 0.15} metin={s.meta.baslik!.not!.toUpperCase()} x={1860} y={500} hiza="sag" genislik={480} boyut={42}
        agirlik={800} renk={RENK.lacivert} bitis={tConv - 0.2} />
      <Ikon t={t} bas={tConv} ad="onay" x={1330} y={540} />
      <Not t={t} bas={tConv + 0.1} metin="CONVENIENT" x={1860} y={514} hiza="sag" genislik={440} boyut={46} agirlik={800} renk={RENK.yesil} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1330} y={680} zemin={RENK.mercan} />
      <Not t={t} bas={tNot + 0.1} metin="NOT PROVEN DIFFERENT" x={1860} y={654} hiza="sag" genislik={460} boyut={42} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S37;
