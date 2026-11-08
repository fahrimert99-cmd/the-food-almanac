// Sahne 57 — 165°F ve 2 saat kuralı
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "thermometer.")} bitis={K(2, "leftovers") - 0.1} capa={[520, 620]} konum={[560, 400]} metin="FOOD THERMOMETER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "leftovers")} capa={[960, 670]} konum={[880, 430]} metin="LEFTOVERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "refrigerator")} capa={[1520, 380]} konum={[1170, 340]} metin="REFRIGERATOR" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(1, "Cook")} metin="COOK TO" x={70} y={150} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "165")} metin="165°F" x={70} y={270} boyut={128} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "within")} vurgu="2 HOURS" not="leftovers in the fridge" x={1080} y={110} genislik={360} boyut={72} />
    </>
  );
};
export default S57;
