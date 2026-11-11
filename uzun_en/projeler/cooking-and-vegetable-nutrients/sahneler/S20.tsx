// Sahne 20 — Miglio 2008: kaynatma her şey için kötü değil; üç yöntem etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHavuc = K(1, "carrots,"), tKab = K(1, "zucchini"), tBrok = K(1, "broccoli,");
  const tKayn = K(1, "boiling"), tBuhar = K(1, "steaming"), tKar = K(1, "carotenoids"), tKiz = K(1, "frying"), tHav2 = K(1, "carrots held");
  const tC = K(1, "vitamin");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tHavuc} bitis={tKayn - 0.15} capa={[300, 560]} konum={[280, 745]} metin="CARROTS" renk={RENK.mercan} />
        <Etiket t={t} bas={tKab} bitis={tKayn - 0.15} capa={[600, 780]} konum={[610, 870]} metin="ZUCCHINI" renk={RENK.yesil} />
        <Etiket t={t} bas={tBrok} bitis={tKayn - 0.15} capa={[1010, 650]} konum={[1010, 845]} metin="BROCCOLI" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tKayn} capa={[1400, 400]} konum={[1640, 190]} metin="BOILING" renk={RENK.altin} />
        <Etiket t={t} bas={tBuhar} capa={[700, 330]} konum={[720, 150]} metin="STEAMING" renk={RENK.yesil} />
        <Etiket t={t} bas={tKiz} capa={[1500, 640]} konum={[1700, 440]} metin="FRYING" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.1} />
      <Baslik t={t} bas={tKar} bitis={tHav2 - 0.2} metin="CAROTENOIDS" x={70} y={190} boyut={68} renk={RENK.lacivert} />
      <Not t={t} bas={tKar + 0.5} bitis={tHav2 - 0.2} metin="KEPT BETTER BOILED OR STEAMED" x={70} y={240} boyut={26} agirlik={800} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tHav2} metin="CARROTS" x={70} y={190} boyut={68} renk={RENK.lacivert} />
      <Baslik t={t} bas={tC} metin="KEPT VITAMIN C" x={70} y={262} boyut={52} renk={RENK.koyuYesil} />
    </>
  );
};

export default S20;
