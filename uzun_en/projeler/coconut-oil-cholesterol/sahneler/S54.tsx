// Sahne 54 — küçük deney: tereyağı, zeytinyağı, hindistancevizi yağı. "Butter" el yazısı kamera dışında (y > 1012).
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrta = K(1, "somewhere");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [100, 0, 1700])}>
        <Etiket t={t} bas={K(0, "coconut")} capa={[800, 560]} konum={[830, 250]} metin="COCONUT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "butter")} capa={[1500, 660]} konum={[1590, 520]} metin="BUTTER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "olive")} capa={[1260, 450]} konum={[1580, 170]} metin="OLIVE OIL" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="SMALLER TRIAL · HEALTHY ADULTS · AGE ~60" bas={K(0, "smaller")} bitis={tOrta - 0.3} y={110} />
      <BaslikBlok t={t} bas={tOrta} satirlar={["SOMEWHERE", "IN THE MIDDLE"]} x={420} y={110} boyut={88} hiza="orta" />
    </>
  );
};

export default S54;
