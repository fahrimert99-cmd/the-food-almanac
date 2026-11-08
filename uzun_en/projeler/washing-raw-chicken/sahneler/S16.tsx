// Sahne 16 — Plakalarda tavuktan gelen bakteri üredi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tConf = K(1, "confirmed"), tSend = K(2, "Rinsing");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(0, "grew")} bitis={K(0, "came") + 0.6} capa={[493, 333]} konum={[1070, 170]} metin="GREW ON PLATES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "chicken.")} bitis={tConf - 0.1} capa={[800, 540]} konum={[1250, 520]} metin="FROM THE CHICKEN" renk={RENK.koyuYesil} />
        <Parcaciklar t={t} bas={K(2, "flying")} kaynak={[800, 520]} hedef={[1250, 300]} adet={22} omur={1.8} kavis={-140} yayilma={120}
          hedefYayilma={360} renk={RENK.mercan} boyut={5} tohum="s16" />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={b.satirlar} x={1860} y={310} boyut={96} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tConf} bitis={tSend - 0.1} ad="onay" x={1560} y={640} boyut={110} />
      <Not t={t} bas={tConf} bitis={tSend - 0.1} metin="LAB CONFIRMED" x={1560} y={715} hiza="orta" boyut={40} agirlik={800} />
      <Baslik t={t} bas={tSend} metin="RINSING CAN SEND" x={1860} y={640} boyut={64} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "bacteria")} metin="BACTERIA FLYING" x={1860} y={715} boyut={64} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S16;
