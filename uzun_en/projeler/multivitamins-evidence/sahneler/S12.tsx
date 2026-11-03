// Sahne 12 — kalp olayları: terazide iki şişe, iki sayı; sağda başlık ve "fark yok" notu.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKalp = K(0, "heart,"), t867 = K(1, "867"), t856 = K(1, "856"), tFark = K(2, "meaningful");
  const cam = kameraYolu(t, s.sure, [0, 60, 1800], [60, 90, 1700]);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={cam} />
      <Panel a={eout(ilerle(t, 0.1, 0.8))} genislik={640} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Etiket t={t} bas={tKalp} bitis={t867 - 0.1} capa={[690, 650]} konum={[800, 900]} metin="HEART" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={t867 - 0.1} satirlar={s.meta.baslik!.satirlar} x={1380} y={230} boyut={84} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={t867} capa={[440, 450]} konum={[440, 190]} metin="867 EVENTS" renk={RENK.yesil} boyut={30} />
      <Etiket t={t} bas={t856} capa={[1140, 450]} konum={[1140, 190]} metin="856 EVENTS" renk={RENK.altin} boyut={30} />
      <Ikon t={t} bas={tFark} ad="onay" x={1430} y={680} boyut={76} zemin={RENK.lacivert} />
      <Not t={t} bas={tFark + 0.1} metin="NO MEANINGFUL DIFFERENCE" x={1490} y={640} boyut={32} agirlik={800} genislik={370} />
    </>
  );
};

export default S12;
