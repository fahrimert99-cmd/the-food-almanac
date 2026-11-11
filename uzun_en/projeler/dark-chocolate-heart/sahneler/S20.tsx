// Sahne 20 — finansman: NIH, Mars Edge, çalışmadaki rolü
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [30, 50, 1700]);
  const tNih = K(0, "National Institutes"), tMars = K(1, "Mars Edge"), tCandy = K(1, "candy company"), tRol = K(2, "no role");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={w}>
        <Etiket t={t} bas={tCandy} bitis={tRol} capa={[480, 585]} konum={[960, 740]} metin="CANDY COMPANY" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "analyzing")} capa={[740, 270]} konum={[1010, 160]} metin="ANALYSIS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin="WHO PAID?" x={1860} y={200} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={tNih} vurgu="NIH" not="National Institutes of Health" x={1590} y={310} genislik={520} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tMars} vurgu="MARS EDGE" not="grant + donated capsules" x={1590} y={540} genislik={520} boyut={92} />
      <Ikon t={t} bas={tRol} ad="carpi" x={1230} y={880} boyut={64} zemin={RENK.mercan} />
      <Baslik t={t} bas={tRol + 0.1} metin="NO ROLE IN DESIGN OR ANALYSIS" x={1290} y={880} boyut={44} renk={RENK.mercan} />
    </>
  );
};

export default S20;
