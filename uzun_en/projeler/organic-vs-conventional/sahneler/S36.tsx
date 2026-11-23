// Sahne 36 — az vaka ve ortalama yaş: kase ortada, üstteki boş kâğıtta başlık, sağda "44" rozeti.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <Baslik t={t} bas={K(0, "non-hodgkin")} metin="NON-HODGKIN LYMPHOMA" x={960} y={150} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(0, "too few")} metin="TOO FEW CASES TO LEAN ON" x={960} y={225} boyut={36} hiza="orta" renk={RENK.mercan} agirlik={800} />
      <Etiket t={t} bas={K(0, "handful")} capa={[850, 480]} konum={[430, 420]} metin="JUST A HANDFUL" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "44")} vurgu="44" not="AVERAGE AGE" x={1620} y={330} genislik={380} renk={RENK.altin} />
      <Not t={t} bas={K(1, "past")} metin="SAYS LESS ABOUT PEOPLE PAST 60" x={1620} y={560} boyut={32} hiza="orta" genislik={400} agirlik={800} />
    </>
  );
};
export default S36;
