// Sahne 59 — CDC önerisi: yavaş su, sonra temizle ve dezenfekte et
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "rinse,")} bitis={K(0, "then")} capa={[520, 580]} konum={[900, 440]} metin="IF YOU RINSE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "clean")} capa={[1150, 720]} konum={[1100, 480]} metin="SPONGE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "sanitize")} capa={[1560, 640]} konum={[1700, 420]} metin="SANITIZER" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "CDC's")} bitis={K(0, "then")} metin="CDC ADVICE" x={960} y={90} boyut={60} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "gently")} bitis={K(0, "then") - 0.1} metin="RUN WATER GENTLY" x={960} y={170} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(0, "then")} bitis={K(1, "Just")} satirlar={["THEN CLEAN +", "SANITIZE"]} x={960} y={110} boyut={72} hiza="orta" />
      <BaslikBlok t={t} bas={K(1, "count")} satirlar={["DON'T COUNT ON", "THE RINSE"]} x={960} y={110} boyut={72} hiza="orta" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S59;
