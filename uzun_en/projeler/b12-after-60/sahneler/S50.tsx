// Sahne 50 — Güvenlik notu: reçeteyi kendi başına bırakma.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(1, "stop")} bitis={K(2, "checked") - 0.3} capa={[415, 560]} konum={[1020, 500]} metin="DON'T STOP OR CHANGE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "B12 pills")} bitis={K(2, "checked") - 0.3} capa={[470, 330]} konum={[1020, 330]} metin="B12 PILLS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "safety")} bitis={K(1, "Don't") + 1.6} metin="SAFETY NOTE" x={1860} y={200} boyut={46} renk={RENK.altin} font="inter" hiza="sag" aralik={5} />
      <Ikon t={t} bas={K(0, "safety") + 0.1} bitis={K(1, "Don't") + 1.6} ad="uyari" x={1200} y={200} boyut={78} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "checked")} satirlar={["CHECK", "FIRST"]} x={1860} y={300} boyut={150} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "because")} metin="B12 IS ONLY ONE POSSIBLE CAUSE" x={1860} y={640} hiza="sag" genislik={760} boyut={36}
        agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S50;
