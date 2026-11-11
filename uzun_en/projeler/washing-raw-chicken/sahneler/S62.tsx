// Sahne 62 — güvenli yapan şey ısı: 165°F
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "thermometer.")} capa={[1050, 560]} konum={[1520, 820]} metin="FOOD THERMOMETER" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "heat.")} metin="HEAT" x={60} y={190} boyut={140} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "165")} vurgu="165°F" not="safe internal temperature" x={215} y={350} genislik={350} boyut={96} />
    </>
  );
};
export default S62;
