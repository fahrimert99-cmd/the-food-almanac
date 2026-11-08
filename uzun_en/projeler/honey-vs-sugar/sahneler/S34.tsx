// Sahne 34 — Yaghoobi 2008: 30 gün bal ya da sukroz; bal grubunda kilo ve yağ ~%1 azaldı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t70 = K(0, "70 grams"), tSuk = K(0, "sucrose"), t30 = K(0, "30 days"), tKilo = K(1, "weight"), tYuzde = K(1, "one percent");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [70, 290, 1340], [120, 300, 1280])}>
        <Etiket t={t} bas={t70} bitis={tSuk - 0.1} capa={[460, 735]} konum={[330, 540]} metin="70 G HONEY / DAY" renk={RENK.altin} />
        <Etiket t={t} bas={tSuk} bitis={t30 + 1.2} capa={[860, 770]} konum={[800, 540]} metin="70 G SUCROSE / DAY" renk={RENK.lacivert} />
        <Etiket t={t} bas={tKilo} capa={[1140, 915]} konum={[1200, 800]} metin="WEIGHT + FAT" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={t30} satirlar={["30 DAYS"]} x={1860} y={190} boyut={110} hiza="sag" renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tYuzde} vurgu="–1.3%" not="body weight, honey group" x={1700} y={330} renk={RENK.yesil} genislik={340} boyut={88} />
    </>
  );
};

export default S34;
