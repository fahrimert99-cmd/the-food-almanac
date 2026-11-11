// Sahne 4 — kanal tanıtımı ve mesane sorusu
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={K(1, "cranberry")} capa={[1193, 362]} konum={[1640, 220]} metin="CRANBERRIES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin={MARKA.ad.toUpperCase()} x={60} y={800} boyut={60} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "bladder")} metin="FOR THE BLADDER?" x={1860} y={720} boyut={64} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S04;
