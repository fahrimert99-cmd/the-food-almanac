import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 4 — Kanal tanıtımı + bölüm girişi
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [90, 70, 1740])}>
        <Etiket t={t} bas={K(1, "rinse chicken")} capa={[1110, 540]} konum={[1250, 880]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "rinse chicken") + 0.35} capa={[1400, 330]} konum={[1520, 215]} metin="KITCHEN SINK" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} bitis={c[1].bas - 0.1} metin={MARKA.filigran} x={70} y={150} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "This")} bitis={c[1].bas - 0.1} metin="THIS IS" x={74} y={72} boyut={30} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "why so many")} metin="WHY WE RINSE" x={70} y={150} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "why so many") + 0.2} metin="CHICKEN" x={70} y={260} boyut={100} renk={RENK.mercan} />
    </>
  );
};
export default S04;
