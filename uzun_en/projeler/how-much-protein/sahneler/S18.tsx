// Sahne 18 — ana tavsiye: en az 1.0–1.2 g/kg; sağda kâğıt alanda başlık ve rozetler
import React from "react";
import { Baslik, Etiket, Kamera, Panel, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYasli = K(0, "healthy adults");
  const tEnAz = K(0, "at least");
  const tSayi = K(0, "1.0");
  const tProtein = K(0, "protein");
  const tLb = K(1, "0.45");
  const X = 1570;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])} />
      <Panel a={1} taraf="sag" genislik={900} opak={1} />
      <Baslik t={t} bas={tYasli} metin="HEALTHY ADULTS OVER 65" x={X} y={215} boyut={38} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={2} />
      <Baslik t={t} bas={tEnAz} metin={b.satirlar[0]} x={X} y={360} boyut={124} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={tSayi} vurgu={b.vurgu!} not={b.not} x={X} y={440} genislik={520} boyut={112} renk={RENK.koyuYesil} />
      <Parcaciklar t={t} bas={tProtein} kaynak={[820, 440]} hedef={[1330, 560]} adet={14} omur={1.8} boyut={5} tohum="s18" />
      <Etiket t={t} bas={tProtein} capa={[560, 440]} konum={[230, 170]} metin="PROTEIN" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tLb} vurgu="0.45–0.55" not="grams per pound" x={X} y={740} genislik={520} boyut={84} renk={RENK.altin} />
    </>
  );
};

export default S18;
