// Sahne 16 — sonuçlar tutarsız: üstteki boş kâğıtta sıralı başlıklar, bardaklarda tek etiket.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "varied"), t2 = K(1, "without it"), t3 = K(1, "lined up"), t4 = K(2, "each group");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [120, 110, 1700])} />
      <Baslik t={t} bas={t1} bitis={t2 - 0.1} metin="RESULTS VARIED" x={90} y={130} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={t2} bitis={t3 - 0.1} metin="WITHOUT ONE TRIAL" x={90} y={130} boyut={104} renk={RENK.mercan} />
      <Baslik t={t} bas={t3} bitis={t4 - 0.1} metin="LINED UP BETTER" x={90} y={130} boyut={104} renk={RENK.yesil} />
      <Baslik t={t} bas={t4} metin="EACH GROUP SEPARATELY" x={90} y={130} boyut={88} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "opposite")} bitis={t2 + 0.8} capa={[1590, 400]} konum={[1330, 160]} metin="OPPOSITE WAY" renk={RENK.mercan} />
    </>
  );
};

export default S16;
