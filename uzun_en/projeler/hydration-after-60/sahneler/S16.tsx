import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 16 — dikkat: küçük çalışmalar, ortalama fark
const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "These") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "small,")} capa={[620, 570]} konum={[700, 330]} metin="SMALL EXPERIMENTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "healthy men")} capa={[1640, 700]} konum={[1660, 520]} metin="HEALTHY MEN" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={gec} satirlar={["ONE", "CAUTION"]} x={560} y={150} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(2, "average difference")} metin="AVERAGE DIFFERENCE" x={1880} y={150} boyut={76} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "not a rule")} metin="NOT A RULE" x={1880} y={250} boyut={76} renk={RENK.mercan} hiza="sag" />
    </>
  );
};
export default S16;
