// Sahne 19 — bölüm açılışı: COSMOS çalışması
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCos = K(0, "cosmos"), tCoc = K(0, "cocoa"), tMv = K(0, "multivitamin"), tOut = K(0, "outcomes");
  const tN = K(1, "21,000"), tAge = K(1, "aged"), tCx = K(1, "cocoa extract"), tMx = K(1, "a multivitamin"), tPl = K(1, "placebo");
  const gec = K(1, "21,000") - 0.35; // akronim bloğu burada çekilir
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      {/* 1. cümle: akronimin açılımı (sağ boş kâğıt) */}
      <Baslik t={t} bas={tCos} bitis={gec} metin="COSMOS" x={1000} y={230} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tCoc} bitis={gec} metin="COCOA SUPPLEMENT" x={1010} y={340} boyut={44} agirlik={800} />
      <Not t={t} bas={tMv} bitis={gec} metin="AND MULTIVITAMIN" x={1010} y={400} boyut={44} agirlik={800} />
      <Not t={t} bas={tOut} bitis={gec} metin="OUTCOMES STUDY" x={1010} y={460} boyut={44} agirlik={800} renk={RENK.altin} />
      {/* 2. cümle: sayı başlığı */}
      <BaslikBlok t={t} bas={tN} satirlar={["21,000+"]} x={1000} y={230} boyut={140} renkler={[RENK.koyuYesil]} />
      <Baslik t={t} bas={tAge} metin="ADULTS 60+" x={1000} y={350} boyut={84} renk={RENK.lacivert} />
      <Etiket t={t} bas={tMx} capa={[500, 400]} konum={[830, 300]} metin="MULTIVITAMIN" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tCx} capa={[700, 660]} konum={[1150, 600]} metin="COCOA EXTRACT" renk={RENK.mercan} boyut={26} />
      <Not t={t} bas={tPl} metin="TESTED AGAINST PLACEBO" x={1010} y={440} boyut={36} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S19;
