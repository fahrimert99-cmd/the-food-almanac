// Sahne 15 — "güncelleme, bağımsız doğrulama değil": sağ panelde madde madde vurgu.
import React from "react";
import { Baslik, BaslikBlok, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.15, 0.6));
  const tEsles = K(0, "match"), tAma = K(1, "But");
  const tYazar = K(1, "author"), tOrtak = K(1, "partly");
  const tGunc = K(1, "update,"), tBag = K(1, "independent");
  return (
    <>
      {/* sol siyah şerit dışında kalan pencere */}
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [320, 40, 1500], [360, 70, 1420])} />
      <Panel a={pPanel} taraf="sag" genislik={900} opak={0.97} />
      {/* 1. cümle: rakamlar 2016 incelemesiyle uyuşuyor */}
      <BaslikBlok t={t} bas={tEsles} satirlar={["MATCHES", "2016 REVIEW"]} x={1860} y={300} boyut={96} hiza="sag"
        bitis={tAma - 0.1} />
      {/* 2. cümle: aynı yazar, kısmen aynı çalışmalar */}
      <Liste t={t} x={1100} y={250} aralik={118} boyut={40} genislik={760} isaret="nokta" ogeler={[
        { bas: tYazar - 0.1, metin: "SAME AUTHOR", renk: RENK.altin },
        { bas: tOrtak - 0.1, metin: "PARTLY SAME TRIALS", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={tGunc - 0.1} metin="AN UPDATE" x={1860} y={600} boyut={112} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={tBag - 0.05} ad="carpi" x={1160} y={760} boyut={84} zemin={RENK.mercan} />
      <Baslik t={t} bas={tBag} metin="NOT INDEPENDENT" x={1860} y={760} boyut={78} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={tBag + 0.3} metin="confirmation" x={1860} y={830} hiza="sag" boyut={34} renk={RENK.lacivert} agirlik={700} />
    </>
  );
};

export default S15;
