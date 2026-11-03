import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 9 — iki koruma: anahtarlar + sağda başlık
const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = K(1, "After 60") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "thirst signal")} capa={[500, 420]} konum={[1230, 480]} metin="THIRST SIGNAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kidneys")} capa={[720, 800]} konum={[1230, 690]} metin="KIDNEYS" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safeguards:")} bitis={gec} satirlar={["TWO", "SAFEGUARDS"]} x={1040} y={170} boyut={118} />
      <BaslikBlok t={t} bas={gec + 0.2} satirlar={["AFTER 60"]} x={1040} y={170} boyut={118} renkler={[RENK.altin]} />
      <Baslik t={t} bas={K(1, "both can weaken")} metin="BOTH CAN WEAKEN" x={1040} y={300} boyut={64} renk={RENK.mercan} />
    </>
  );
};
export default S09;
