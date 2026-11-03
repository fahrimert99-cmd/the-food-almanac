// Sahne 38 — Sınırı kendi başına değiştirme; kardiyoloji ekibiyle konuşma: iki koltuk, başlıklar üstte.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1790]);
  const tKonus = K(1, "conversation");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={pen} />
      <Baslik t={t} bas={K(0, "change")} bitis={c[1].bas - 0.1} metin="CHANGE YOUR OWN LIMIT?" x={960} y={130} boyut={92} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tKonus} metin="A GOOD CONVERSATION" x={960} y={120} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={K(1, "your")} capa={[430, 580]} konum={[330, 250]} metin="YOU" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "cardiology")} capa={[1500, 560]} konum={[1560, 250]} metin="CARDIOLOGY TEAM" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "not a decision")} metin="NOT ALONE" x={960} y={225} boyut={64} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S38;
