// Sahne 41 — yumurta: azıcık lutein ama iyi emilim. Sol görsel, sağ panel.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tBut = K(1, "But");
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [40, 34, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={860} />
      <Baslik t={t} bas={K(0, "Eggs") + 0.1} metin={b.satirlar[0]} x={1860} y={260} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "a third")} vurgu="< 1/3 MG" not="lutein per egg" x={1560} y={360} genislik={420} bitis={tBut + 0.2} />
      <Not t={t} bas={tBut} metin={b.not ?? ""} x={1860} y={380} hiza="sag" genislik={640} boyut={40} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "yolk")} capa={[520, 640]} konum={[960, 760]} metin="YOLK LUTEIN" renk={RENK.altin} />
    </>
  );
};

export default S41;
