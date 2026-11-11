// Sahne 2 — çiğ baharat serpmesi ve kapsüller; emilim zor.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  const bitis = K(0, "hard") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={pen}>
        <Etiket t={t} bas={K(0, "capsules")} bitis={bitis} capa={[950, 880]} konum={[1380, 900]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kitchen spice")} bitis={bitis} capa={[490, 580]} konum={[1000, 420]} metin="KITCHEN SPICE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "hard")} metin="HARD TO" x={1860} y={230} boyut={140} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "absorb") - 0.05} metin="ABSORB" x={1860} y={380} boyut={140} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(0, "key ingredient") ?? K(0, "key")} metin="the key ingredient" x={1860} y={480} hiza="sag" boyut={34} renk={RENK.gri} />
    </>
  );
};

export default S02;
