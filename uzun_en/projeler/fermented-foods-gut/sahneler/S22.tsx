// Sahne 22 — şaşırtıcı mı? lif genelde kahraman; on hafta yeterince uzun olmayabilir.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSur = K(0, "surprising,"), tFib = K(0, "fiber"), tTen = K(1, "ten"), tFull = K(1, "full");
  const tYeni = K(1, "researchers") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tFib} bitis={tYeni} capa={[1000, 720]} konum={[1500, 420]} metin="FIBER: USUAL HERO" renk={RENK.yesil} />
        <Etiket t={t} bas={tTen} capa={[420, 790]} konum={[300, 300]} metin="10 WEEKS" renk={RENK.altin} />
        <Etiket t={t} bas={tFull} capa={[1010, 260]} konum={[1500, 180]} metin="FULL EFFECT?" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tSur} bitis={tYeni} metin="SURPRISING?" x={1860} y={170} boyut={110} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S22;
