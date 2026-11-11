// Sahne 2 — gerçek ama mütevazı etki; üç değişken
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const fin = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={p}>
        <Etiket t={t} bas={K(1, "how much")} capa={[1200, 780]} konum={[1580, 820]} metin="HOW MUCH" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "which oats")} capa={[560, 560]} konum={[420, 250]} metin="WHICH OATS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "what goes on top")} capa={[820, 400]} konum={[900, 230]} metin="TOPPINGS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "real effect")} bitis={fin} metin="A REAL EFFECT," x={300} y={100} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "modest")} bitis={fin} metin="BUT A MODEST ONE" x={300} y={196} boyut={84} renk={RENK.lacivert} />
    </>
  );
};

export default S02;
