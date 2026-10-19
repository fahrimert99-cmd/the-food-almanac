// Sahne 15 — Favell 1998: dondurma C vitamini kaybettirmedi
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "freshest"), t2 = K(2, "frozen");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [60, 60, 1800], [150, 110, 1640])}>
        <Etiket t={t} bas={K(0, "green")} bitis={t1 - 0.2} capa={[520, 430]} konum={[260, 330]} metin="GREEN BEANS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "carrots")} bitis={t1 - 0.2} capa={[1060, 560]} konum={[1100, 340]} metin="CARROTS" renk={RENK.mercan} />
        <Etiket t={t} bas={t2} capa={[1540, 600]} konum={[1540, 330]} metin="FROZEN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "no")} bitis={t1 - 0.2} metin="NO VITAMIN C LOSS" x={100} y={170} boyut={88} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={t1} bitis={t2 - 0.2} metin="FRESHEST = JUST PICKED" x={960} y={170} boyut={88} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "match")} metin="MATCH OR BEAT IT" x={1860} y={170} boyut={88} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S15;
