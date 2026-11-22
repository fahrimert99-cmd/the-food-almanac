// Sahne 11 — Cochrane birçok denemeyi tek analizde toplar; 2013 güncellemesi.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const cik = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={p}>
        <Etiket t={t} bas={K(0, "many trials")} bitis={cik} capa={[560, 590]} konum={[330, 330]} metin="MANY TRIALS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "one analysis")} bitis={cik} capa={[960, 400]} konum={[1500, 300]} metin="ONE ANALYSIS" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(0, "pools")} kaynak={[640, 600]} hedef={[960, 440]} adet={26} aralik={0.11} omur={1.5} yayilma={420} kavis={-120} tohum="havuz" />
      </Kamera>
      <Baslik t={t} bas={K(1, "2013")} metin="UPDATED IN 2013" x={56} y={130} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "Hemilä")} metin="HEMILÄ & CHALKER" x={56} y={215} boyut={50} renk={RENK.koyuYesil} />
    </>
  );
};

export default S11;
