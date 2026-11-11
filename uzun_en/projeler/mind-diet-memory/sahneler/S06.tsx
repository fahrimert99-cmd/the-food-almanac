// Sahne 6 — antik terazi: 15 maddelik skor kartı, 10 yenecek + 5 sınırlanacak.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSkor = K(0, "scorecard");
  const tOn = K(1, "Ten");
  const tBes = K(1, "five");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={tSkor} bitis={K(0, "fifteen") - 0.1} capa={[900, 830]} konum={[1250, 820]} metin="SCORECARD" renk={RENK.altin} />
        <Etiket t={t} bas={tOn} bitis={tBes - 0.15} capa={[280, 620]} konum={[230, 150]} metin="10 BRAIN-HEALTHY" renk={RENK.yesil} />
        <Etiket t={t} bas={tBes} capa={[780, 580]} konum={[1130, 520]} metin="5 TO LIMIT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "fifteen")} metin={b.satirlar[0]} x={1860} y={230} boyut={150} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={tOn} metin={b.not!} x={1860} y={325} hiza="sag" boyut={34} genislik={560} />
      <VurguRozet t={t} bas={K(2, "top score")} vurgu="15" not="TOP SCORE" x={1600} y={640} genislik={340} boyut={120} renk={RENK.koyuYesil} />
    </>
  );
};

export default S06;
