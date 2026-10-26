// Sahne 6 — zerdeçal bitkisi ve kurkumin.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760]);
  const c1 = K(1, "curcumin");
  const bit = K(1, "its") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={pen}>
        <Etiket t={t} bas={K(0, "root")} bitis={bit} capa={[1000, 888]} konum={[1300, 800]} metin="ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "curcuma")} bitis={bit} capa={[780, 330]} konum={[1330, 440]} metin="CURCUMA LONGA" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "turmeric")} bitis={bit} metin="TURMERIC" x={1860} y={150} boyut={120} renk={RENK.altin} hiza="sag" />
      <Not t={t} bas={K(0, "golden")} bitis={bit} metin="THE GOLDEN SPICE" x={1860} y={235} hiza="sag" boyut={34} renk={RENK.gri} agirlik={800} />
      <Not t={t} bas={K(1, "active")} bitis={c1} metin="ACTIVE COMPOUND" x={1860} y={200} hiza="sag" boyut={40} renk={RENK.lacivert} agirlik={800} />
      <Baslik t={t} bas={c1} metin="CURCUMIN" x={1860} y={290} boyut={150} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={c1 + 0.2} metin="the main active compound in turmeric" x={1860} y={400} hiza="sag" boyut={34} renk={RENK.lacivert} />
      <Liste t={t} isaret="nokta" x={1250} y={560} aralik={90} boyut={38} genislik={620}
        ogeler={[{ bas: K(1, "supplements"), metin: "SUPPLEMENTS", renk: RENK.altin }, { bas: K(1, "studies"), metin: "STUDIES", renk: RENK.koyuYesil }]} />
    </>
  );
};

export default S06;
