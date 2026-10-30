// Sahne 27 — vücudun yanıtı: hormon %44 düştü; küçük alt grupta kalça kemik yoğunluğu +2.7% / plasebo −4.6%.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHor = K(1, "hormone"), t44 = K(1, "44"), tYog = K(2, "hip"), tArt = K(2, "2.7"), tDus = K(2, "4.6");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [110, 90, 1700])} />
      <Etiket t={t} bas={K(0, "body's")} bitis={3.2} capa={[560, 420]} konum={[420, 80]} metin="THE BODY'S RESPONSE" renk={RENK.altin} boyut={30} />
      {/* hormon */}
      <Baslik t={t} bas={tHor} bitis={9.0} metin="A HORMONE" x={140} y={90} boyut={76} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "rises")} bitis={9.0} metin="rises when calcium and vitamin D are low" x={146} y={150} boyut={30} />
      <VurguRozet t={t} bas={t44 - 0.1} bitis={9.0} vurgu="–44%" not="that hormone fell" x={1580} y={300} renk={RENK.yesil} genislik={380} />
      {/* kemik yoğunluğu */}
      <Panel a={eout(ilerle(t, tYog - 0.3, 0.6))} taraf="sag" genislik={760} />
      <Baslik t={t} bas={tYog} metin="HIP BONE DENSITY" x={1860} y={170} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "small")} metin="in a small subset" x={1860} y={226} hiza="sag" boyut={30} genislik={500} />
      <VurguRozet t={t} bas={tArt - 0.1} vurgu="+2.7%" not="calcium + vitamin D" x={1480} y={330} renk={RENK.yesil} genislik={340} boyut={92} />
      <VurguRozet t={t} bas={tDus - 0.1} vurgu="–4.6%" not="placebo" x={1480} y={560} renk={RENK.mercan} genislik={340} boyut={92} />
    </>
  );
};

export default S27;
