// Sahne 2 — mide tek neden değil: hap kutusu.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1760]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={p}>
        <Etiket t={t} bas={K(1, "pills")} capa={[570, 735]} konum={[300, 880]} metin="COMMON PILLS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "part")} capa={[1400, 635]} konum={[1560, 820]} metin="ALSO PILLS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "only")} metin="NOT THE ONLY" x={1860} y={150} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "cause") - 0.1} metin="CAUSE" x={1860} y={250} boyut={96} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S02;
