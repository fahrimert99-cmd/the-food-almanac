// Sahne 45 — kemik kesiti: osteoporoz / osteopeni tanımı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOp = K(0, "osteoporosis"), tZayif = K(0, "weak"), tTarama = K(1, "bone density"), tPeni = K(2, "osteopenia"), tHafif = K(2, "milder");
  const gec = tPeni - 0.15;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={tTarama} capa={[760, 560]} konum={[300, 800]} metin="BONE DENSITY SCAN" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={tOp} bitis={gec} metin="OSTEOPOROSIS" x={960} y={105} boyut={104} hiza="orta" renk={RENK.mercan} />
      <Not t={t} bas={tZayif} bitis={gec} metin="bones weak enough to break easily" x={1870} y={400} hiza="sag" genislik={400} boyut={36} />
      <Baslik t={t} bas={tPeni} metin="OSTEOPENIA" x={960} y={105} boyut={104} hiza="orta" renk={RENK.altin} />
      <Not t={t} bas={tHafif} metin="a milder drop in bone density" x={1870} y={400} hiza="sag" genislik={400} boyut={36} />
    </>
  );
};

export default S45;
