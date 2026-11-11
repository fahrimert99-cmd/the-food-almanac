// Sahne 45 — sınırlar: haftalar, yıllar değil.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 60, 1800])} />
      <Not t={t} bas={0.1} bitis={1.8} x={960} y={150} hiza="orta" metin="FINALLY: THE LIMITS" boyut={52} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "trials")} satirlar={b.satirlar} x={960} y={150} boyut={112} hiza="orta" bitis={6.9} renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={K(1, "weeks,")} bitis={6.9} capa={[1000, 590]} konum={[1250, 420]} metin="WEEKS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "years.")} bitis={6.9} capa={[1250, 520]} konum={[1560, 330]} metin="NOT YEARS" renk={RENK.mercan} />
      <Ikon t={t} bas={K(2, "shown")} bitis={K(3, "A") - 0.1} ad="carpi" zemin={RENK.mercan} x={380} y={150} />
      <Not t={t} bas={K(2, "heart")} bitis={K(3, "A") - 0.1} x={470} y={125} metin="NO PROOF OF FEWER HEART ATTACKS OR STROKES" boyut={36} agirlik={800} genislik={1200} />
      <Etiket t={t} bas={K(3, "reading")} capa={[270, 430]} konum={[640, 340]} metin="LOWER READING" renk={RENK.yesil} />
      <Not t={t} bas={K(3, "fewer")} x={960} y={225} hiza="orta" metin="NOT THE SAME AS FEWER EVENTS" boyut={48} agirlik={800} renk={RENK.mercan} />
      <Etiket t={t} bas={K(3, "studies")} capa={[960, 540]} konum={[1180, 390]} metin="STUDIES TAKE YEARS" renk={RENK.lacivert} />
    </>
  );
};

export default S45;
