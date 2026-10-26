// Sahne 11 — midede B12 proteine bağlıdır; asit onu serbest bırakır, sonra emilir.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB12 = K(0, "B12"), tProt = K(0, "protein"), tAsit = K(1, "Stomach acid"), tSerbest = K(1, "free"), tEmilir = K(1, "absorbed");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [60, 70, 1740])}>
        <Etiket t={t} bas={tB12} bitis={tAsit - 0.1} capa={[420, 610]} konum={[430, 880]} metin="B12 IN FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tProt} bitis={tAsit - 0.1} capa={[640, 600]} konum={[860, 880]} metin="ATTACHED TO PROTEIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tAsit + 0.2} capa={[200, 340]} konum={[600, 120]} metin="STOMACH ACID" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tSerbest} kaynak={[830, 610]} hedef={[1500, 600]} adet={26} aralik={0.14} omur={1.6} kavis={-120} tohum="serbest" />
        <Etiket t={t} bas={tSerbest + 0.2} capa={[1100, 610]} konum={[1250, 410]} metin="FREED B12" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tAsit} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={170} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <AdimAkisi t={t} x={1330} y={830} boyut={30} numarali={false}
        adimlar={[{ bas: tSerbest + 0.5, metin: "FREED", renk: RENK.altin }, { bas: tEmilir, metin: "ABSORBED FURTHER DOWN", renk: RENK.yesil }]} />
    </>
  );
};

export default S11;
