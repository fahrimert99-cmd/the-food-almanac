// Sahne 20 — 10 yiyecek %44, 25 yiyecek %70; sağdaki boş kâğıtta başlık + rozet.
import React from "react";
import { Baslik, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTen = K(0, "ten"), t44 = K(0, "44"), t25 = K(1, "twenty-five"), t70 = K(1, "70");
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1830]);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={pen} />
      {/* 1. cümle: 10 yiyecek -> %44 */}
      <Baslik t={t} bas={tTen} bitis={t25 - 0.1} metin="10 FOODS" x={1690} y={150} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t44} bitis={t25 - 0.1} vurgu="44%" not="of all the sodium" x={1690} y={260} genislik={360} renk={RENK.altin} />
      {/* 2. cümle: 25 yiyecek -> %70 */}
      <Baslik t={t} bas={t25} metin="25 FOODS" x={1690} y={150} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t70} vurgu="70%" not="of all the sodium" x={1690} y={260} genislik={360} renk={RENK.koyuYesil} />
    </>
  );
};

export default S20;
