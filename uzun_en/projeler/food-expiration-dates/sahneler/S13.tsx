// Sahne 13 — Aynı anket: %84 paket tarihine yakın gıdayı en azından ara sıra atıyor.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1880])}>
        <Etiket t={t} bas={K(0, "discard")} capa={[700, 470]} konum={[1050, 130]} metin="DISCARDED" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={K(0, "same")} metin="THE SAME SURVEY" x={1860} y={290} hiza="sag" genislik={560} boyut={36} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "84")} metin="84% TOSS" x={1860} y={430} boyut={118} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={K(0, "food")} metin="food near its date at least occasionally" x={1860} y={530} hiza="sag" genislik={560}
        boyut={38} agirlik={800} renk={RENK.lacivert} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S13;
