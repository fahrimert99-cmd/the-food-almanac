// Sahne 1 — kapak cümlesi: 49 saniye (Miller 2010)
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEl = K(0, "electrically");
  const t49 = K(0, "49");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "pickle")} bitis={5.9} capa={[330, 600]} konum={[250, 310]} metin="PICKLE JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "seconds")} capa={[885, 650]} konum={[1450, 880]} metin="STOPWATCH" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "2010")} />}
      <Not t={t} bas={K(0, "2010")} bitis={tEl - 0.1} metin="2010 · LAB STUDY" x={1860} y={210} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={tEl} metin="ELECTRICALLY TRIGGERED FOOT CRAMPS" x={1860} y={210} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={t49} metin="49 SECONDS" x={1860} y={340} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "sooner")} metin="SHORTER" x={1860} y={460} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "than")} vurgu="–49 s" not={s.meta.baslik?.not} x={1560} y={600} genislik={420} boyut={96} />
    </>
  );
};

export default S01;
