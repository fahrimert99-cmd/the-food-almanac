// Sahne 11 — mide kesiti: asit B12'yi proteinden ayırır, B12 serbest kalıp ilerler.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProt = K(0, "protein"), tAcid = K(1, "Stomach acid"), tFree = K(1, "free it");
  const tAbs = K(1, "absorbed");
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={pencere}>
        <Etiket t={t} bas={tProt - 0.3} bitis={tAcid - 0.1} capa={[420, 620]} konum={[250, 130]} metin="ATTACHED TO PROTEIN" renk={RENK.altin} />
        <Etiket t={t} bas={tAcid} capa={[540, 440]} konum={[1020, 300]} metin="STOMACH ACID" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tAbs - 0.2} kaynak={[830, 600]} hedef={[1550, 760]} adet={26} aralik={0.09} omur={1.9} tohum="b12" />
      </Kamera>
      <Baslik t={t} bas={tFree} metin="ACID SETS" x={1840} y={200} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tFree + 0.2} metin="B12 FREE" x={1840} y={330} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S11;
