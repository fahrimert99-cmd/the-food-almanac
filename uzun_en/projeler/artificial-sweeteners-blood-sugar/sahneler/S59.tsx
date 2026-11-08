// Sahne 59 — WHO ve ADA: tartı kontrolü için değil; önce su, ölçülü tatlandırıcı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAda = K(1, "American");
  const sonra = tAda - 0.15; // birinci vuruş burada çekilir
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1790])} />
      {/* 1. vuruş: WHO */}
      <Baslik t={t} bas={K(0, "WHO")} bitis={sonra} metin="WHO: NOT FOR WEIGHT CONTROL" x={140} y={96} boyut={74} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "sweeteners")} bitis={sonra} capa={[1200, 330]} konum={[1690, 330]} metin="SWEETENERS" renk={RENK.mercan} />
      <Not t={t} bas={K(0, "though")} bitis={sonra} metin="Does not cover people with diabetes" x={1860} y={430}
        hiza="sag" genislik={380} boyut={34} agirlik={800} />
      {/* 2. vuruş: ADA */}
      <Baslik t={t} bas={tAda} metin="ADA SAYS" x={140} y={96} boyut={80} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "water")} capa={[700, 520]} konum={[900, 110]} metin="WATER FIRST" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "moderation")} capa={[1200, 400]} konum={[1690, 330]} metin="IN MODERATION" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "short-term")} capa={[1300, 560]} konum={[1560, 500]} metin="SHORT-TERM SWAP FOR SUGAR" renk={RENK.altin} />
    </>
  );
};

export default S59;
