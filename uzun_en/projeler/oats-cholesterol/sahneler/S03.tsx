// Sahne 3 — kısa yol haritası: üç yulaf türü
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1830]);
  const b = s.meta.baslik!.satirlar;
  const renk = [RENK.altin, RENK.koyuYesil, RENK.mercan];
  const kel = ["steel-cut", "rolled", "instant"];
  return (
    <>
      <Kamera gorsel="tam/03" pencere={p} />
      <Panel a={eout(ilerle(t, 0.2, 0.8))} genislik={760} />
      <Baslik t={t} bas={K(0, "servings")} metin="SERVINGS TO 3 G" x={1860} y={170} boyut={62} hiza="sag" renk={RENK.lacivert} />
      {b.map((m, i) => (
        <Baslik key={m} t={t} bas={K(0, kel[i])} metin={m} x={1860} y={340 + i * 130} boyut={104} hiza="sag" renk={renk[i]} />
      ))}
      <Baslik t={t} bas={K(0, "toppings")} metin="TOPPINGS?" x={1860} y={760} boyut={104} hiza="sag" renk={RENK.lacivert} />
    </>
  );
};

export default S03;
