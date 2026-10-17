// Sahne 46 — Nokta 1: tansiyon değerlerini bil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [100, 40, 1700], [180, 80, 1560])}>
        <Etiket t={t} bas={K(2, "high")} bitis={K(2, "clinic") - 0.1} capa={[830, 540]} konum={[1010, 270]} metin="HIGH PRESSURE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "clinic")} bitis={K(2, "applies") - 0.1} capa={[740, 480]} konum={[1080, 270]} metin="CLINIC OR HOME READING" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "applies")} capa={[1300, 460]} konum={[1160, 290]} metin="APPLIES TO YOU?" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={0.05} vurgu="1" not="OF 5 POINTS" x={210} y={120} genislik={230} />
      <Baslik t={t} bas={K(1, "know")} metin="KNOW YOUR" x={1860} y={170} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "numbers")} metin="NUMBERS" x={1860} y={262} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S46;
