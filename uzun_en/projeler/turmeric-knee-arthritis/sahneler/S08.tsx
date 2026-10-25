// Sahne 8 — laboratuvar: iltihap, laboratuvardan insana, denek.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLab = K(0, "lab"), tCalm = K(0, "calm"), tInfl = K(0, "inflammation");
  const tSonuc = K(1, "lab results"), tNot = K(1, "not always"), tIns = K(1, "people,");
  const tMen = K(2, "men"), tSore = K(2, "sore");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [100, 80, 1700])}>
        <Etiket t={t} bas={tLab} bitis={3.2} capa={[1290, 640]} konum={[1020, 230]} metin="LAB FLASK" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "tested")} capa={[1660, 440]} konum={[1300, 220]} metin="MICROSCOPE" renk={RENK.lacivert} />
      </Kamera>
      {/* 1. cümle: iltihabı yatıştırma */}
      <Baslik t={t} bas={tCalm} bitis={3.3} metin="THOUGHT TO CALM" x={80} y={150} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tInfl} bitis={3.3} metin="INFLAMMATION" x={80} y={262} boyut={92} renk={RENK.koyuYesil} />
      {/* 2. cümle: laboratuvar sonucu -> insan? */}
      <div style={{ opacity: sol(t, 8.2) }}><AdimAkisi t={t} x={500} y={230} boyut={32} numarali={false}
        adimlar={[{ bas: tSonuc, metin: "LAB RESULT", renk: RENK.altin }, { bas: tIns, metin: "PEOPLE", renk: RENK.yesil }]} /></div>
      <Ikon t={t} bas={tNot} bitis={8.2} ad="soru" x={500} y={340} boyut={84} zemin={RENK.mercan} />
      {/* 3. cümle: denek grubu */}
      <Baslik t={t} bas={tMen} metin="MEN & WOMEN" x={80} y={150} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSore} metin="WITH SORE KNEES" x={80} y={262} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S08;
