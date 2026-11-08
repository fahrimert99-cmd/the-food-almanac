// Sahne 14 — 16 deneme: lavabo, tavuk, petri kapları.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHs = K(0, "high");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "rinsing")} bitis={K(0, "faucet") - 0.1} capa={[413, 360]} konum={[760, 60]} metin="RINSING" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "faucet")} bitis={tHs - 0.3} capa={[533, 213]} konum={[760, 60]} metin="FAUCET" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "nutrient")} capa={[1307, 533]} konum={[1500, 330]} metin="NUTRIENT JELLY" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "sixteen")} bitis={tHs - 0.3} metin={b.satirlar[0]} x={1860} y={200} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      {b.not && <Not t={t} bas={1.1} bitis={tHs - 0.3} metin={b.not} x={1860} y={262} hiza="sag" genislik={560} boyut={30} />}
      <BaslikBlok t={t} bas={tHs} bitis={K(0, "nutrient") - 0.2} satirlar={["HIGH-SPEED", "CAMERAS"]} x={1860} y={200} boyut={88} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S14;
