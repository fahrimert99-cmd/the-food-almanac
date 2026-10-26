// Sahne 22 — 13 yıl sonra: net düşük B12 farkı anlamlı değil, düşük/sınırda hâlâ daha yaygın. Yazılar sağdaki boş sayfada.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = 5.7, b2 = 13.6;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* 1. cümle */}
      <BaslikBlok t={t} bas={K(0, "13")} bitis={b1} satirlar={["13 YEARS", "LATER"]} x={1860} y={180} boyut={130} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "clearly")} bitis={b1} metin="GAP IN CLEARLY LOW B12" x={1860} y={440} boyut={40} hiza="sag" agirlik={800} />
      <Not t={t} bas={K(0, "no longer")} bitis={b1} metin="NO LONGER STATISTICALLY SIGNIFICANT" x={1860} y={500} boyut={40} hiza="sag" agirlik={800} renk={RENK.mercan} genislik={820} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "low or")} bitis={b2} metin="LOW OR BORDERLINE" x={1860} y={170} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(1, "still more")} bitis={b2} metin="STILL MORE COMMON ON METFORMIN" x={1860} y={250} boyut={38} hiza="sag" agirlik={800} renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "metformin,")} bitis={b2} capa={[730, 780]} konum={[1090, 700]} metin="METFORMIN" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "20.3")} bitis={b2} vurgu="20.3%" not="METFORMIN" x={1380} y={360} genislik={340} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "15.6")} bitis={b2} vurgu="15.6%" not="PLACEBO" x={1730} y={360} genislik={340} renk={RENK.yesil} />
      {/* 3. cümle */}
      <Baslik t={t} bas={K(2, "borderline")} metin="BORDERLINE" x={1860} y={190} boyut={118} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "gray")} metin="= GRAY ZONE" x={1860} y={320} boyut={118} renk={RENK.altin} hiza="sag" />
      <Not t={t} bas={K(2, "not clearly")} metin="NOT CLEARLY LOW" x={1860} y={430} boyut={42} hiza="sag" agirlik={800} />
      <Not t={t} bas={K(2, "but not")} metin="NOT COMFORTABLY NORMAL" x={1860} y={495} boyut={42} hiza="sag" agirlik={800} />
    </>
  );
};

export default S22;
