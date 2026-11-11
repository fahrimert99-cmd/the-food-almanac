// Sahne 35 — apixaban/rivaroxaban şişeleri + kalp: aynı kullanım alanı (AF'de inme önleme).
import React from "react";
import { Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tApi = K(0, "apixaban"), tEli = K(0, "Eliquis"), tRiva = K(0, "rivaroxaban"), tXar = K(0, "Xarelto");
  const tInme = K(1, "stroke"), tAF = K(1, "atrial"), tRitim = K(1, "irregular");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [300, 120, 1500], [380, 150, 1380])} />
      <Etiket t={t} bas={tApi} bitis={tRiva - 0.1} capa={[585, 600]} konum={[340, 420]} metin="APIXABAN" renk={RENK.yesil} />
      <Not t={t} bas={tEli} bitis={tRiva - 0.1} metin="SOLD AS ELIQUIS" x={340} y={470} hiza="orta" boyut={28} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={tRiva} capa={[760, 650]} konum={[560, 900]} metin="RIVAROXABAN" renk={RENK.altin} />
      <Not t={t} bas={tXar} metin="SOLD AS XARELTO" x={560} y={940 - 120 + 100 - 40} hiza="orta" boyut={28} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={tInme} bitis={tAF - 0.1} capa={[1130, 400]} konum={[1330, 190]} metin="STROKE PREVENTION" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tAF} bitis={tRitim - 0.1} capa={[1390, 535]} konum={[1560, 270]} metin="ATRIAL FIBRILLATION" renk={RENK.mercan} />
      <Etiket t={t} bas={tRitim} capa={[1200, 560]} konum={[1450, 820]} metin="IRREGULAR RHYTHM" renk={RENK.mercan} />
    </>
  );
};

export default S35;
