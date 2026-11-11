// Sahne 1 — ıspanak kasesi solda, sağ boş kâğıtta senkron başlıklar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuz = K(0, "100,000"), tYuksek = K(0, "highest lutein"), tYuzde = K(0, "40 percent");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1780])}>
        <Etiket t={t} bas={K(0, "greens")} bitis={tYuz} capa={[560, 330]} konum={[1000, 120]} metin="LEAFY GREENS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "two US studies")} />
      {/* 100.000 yetişkin */}
      <Baslik t={t} bas={tYuz} bitis={tYuksek - 0.2} metin="ABOUT 100,000" x={1860} y={300} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tYuz + 0.25} bitis={tYuksek - 0.2} metin="ADULTS OVER 50" x={1860} y={410} boyut={64} hiza="sag" renk={RENK.koyuYesil} />
      {/* en yüksek lutein */}
      <BaslikBlok t={t} bas={tYuksek} satirlar={["HIGHEST", "LUTEIN"]} x={1860} y={250} boyut={112} hiza="sag" />
      <Not t={t} bas={K(0, "zeaxanthin")} metin="+ ZEAXANTHIN" x={1860} y={500} hiza="sag" boyut={40} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={tYuzde} vurgu="–40%" not={s.meta.baslik!.not} x={1560} y={600} genislik={460} />
    </>
  );
};

export default S01;
