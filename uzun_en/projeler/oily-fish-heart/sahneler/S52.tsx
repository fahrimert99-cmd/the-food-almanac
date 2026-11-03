// Sahne 52 — somon ve ezilmiş sardalya tostu
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
    <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
      <Etiket t={t} bas={K(0, "salmon,")} bitis={K(1, "toast")} capa={[1430, 620]} konum={[1600, 300]} metin="SALMON: MILDER" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "mashing")} capa={[760, 470]} konum={[420, 130]} metin="MASHED SARDINES" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "whole-grain")} capa={[620, 720]} konum={[340, 880]} metin="WHOLE-GRAIN TOAST" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "lemon.")} capa={[930, 280]} konum={[1330, 120]} metin="LEMON" renk={RENK.altin} />
    </Kamera>
    <Baslik t={t} bas={K(0, "strong")} bitis={K(0, "start")} metin="STRONG TASTE?" x={1860} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};
export default S52;
