import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Kanıtların birleştirilmesi: kitap yığını
const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const b2 = K(1, "pool"), b3 = K(2, "asking");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={pencere}>
        <Etiket t={t} bas={K(0, "trial.")} bitis={b2} capa={[600, 190]} konum={[1000, 70]} metin="ONE TRIAL" renk={RENK.mercan} />
        <Etiket t={t} bas={b2} bitis={b3 - 0.1} capa={[420, 480]} konum={[420, 900]} metin="MANY TRIALS, POOLED" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "wider")} bitis={b3 - 0.1} capa={[1130, 530]} konum={[1450, 880]} metin="WIDER, STEADIER" renk={RENK.altin} />
        <Etiket t={t} bas={b3} capa={[1240, 300]} konum={[1500, 140]} metin="SAME QUESTION" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "many")} capa={[1000, 720]} konum={[1520, 900]} metin="MANY TIMES" renk={RENK.koyuYesil} />
      </Kamera>
    </>
  );
};
export default S19;
