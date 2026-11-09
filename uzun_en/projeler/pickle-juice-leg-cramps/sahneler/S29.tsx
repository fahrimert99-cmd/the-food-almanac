// Sahne 29 — yaşlı yetişkinlerde gece krampı için deneme bulunamadı: boş raf boşluğu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "pickle")} bitis={K(1, "for")} capa={[440, 420]} konum={[1200, 330]} metin="PICKLE JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "honest")} capa={[780, 790]} konum={[1250, 790]} metin="NOT TESTED" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "trial") - 0.2} satirlar={b!.satirlar} x={1860} y={230} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "older") - 0.2} metin={b!.not!.toUpperCase()} x={1860} y={470} hiza="sag" genislik={560} boyut={32} agirlik={800} />
    </>
  );
};

export default S29;
