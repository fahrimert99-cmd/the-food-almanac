// Sahne 11 — Sonia et al.: üç pirinç örneği (taze / 10 sa oda sıcaklığı / 24 sa buzdolabı + yeniden ısıtma).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800])}>
        <Etiket t={t} bas={K(1, "Freshly")} capa={[400, 640]} konum={[400, 905]} metin="FRESH" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "Cooled")} capa={[960, 650]} konum={[960, 905]} metin="10 H · ROOM TEMP" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "refrigerator")} capa={[1480, 470]} konum={[1480, 905]} metin="24 H · FRIDGE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(3, "reheated")} capa={[1400, 330]} konum={[1400, 200]} metin="THEN REHEATED" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Baslik t={t} bas={K(0, "resistant")} metin="RESISTANT STARCH" x={70} y={190} boyut={74} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "three")} metin="3 KINDS OF RICE" x={74} y={268} boyut={44} renk={RENK.lacivert} />
    </>
  );
};

export default S11;
