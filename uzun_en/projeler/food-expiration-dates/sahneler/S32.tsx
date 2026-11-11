// Sahne 32 — Fabrikadan buzdolabına: tarih fabrikada basılır, güvenlik depolamaya bağlı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(1, "printed")} capa={[190, 620]} konum={[250, 420]} metin="DATE PRINTED" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "storage")} capa={[1150, 430]} konum={[1150, 200]} metin="STORAGE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "distribution")} capa={[650, 520]} konum={[700, 300]} metin="DISTRIBUTION" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(1, "depends")} kaynak={[200, 700]} hedef={[1600, 700]} adet={14} omur={2.2} kavis={-60} yayilma={30} hedefYayilma={40} tohum="s32" />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(1, "factory")} metin="FACTORY" x={300} y={900} boyut={76} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "refrigerator")} metin="→ YOUR FRIDGE" x={1180} y={900} boyut={76} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};
export default S32;
