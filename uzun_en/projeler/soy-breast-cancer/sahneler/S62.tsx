// Sahne 62 — gündelik miktarlar ve tıbbi ekip.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEv = K(0, "everyday");
  const cikis = K(0, "and keep") ;
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "tofu")} bitis={cikis} capa={[770, 430]} konum={[800, 200]} metin="TOFU" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "edamame")} bitis={cikis} capa={[560, 475]} konum={[330, 310]} metin="EDAMAME" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "soy milk")} bitis={cikis} capa={[1260, 300]} konum={[1660, 300]} metin="SOY MILK" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "medical team")} capa={[1290, 800]} konum={[1440, 885]} metin="MEDICAL TEAM IN THE LOOP" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={tEv} metin="EVERYDAY AMOUNTS" x={960} y={70} boyut={76} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};
export default S62;
