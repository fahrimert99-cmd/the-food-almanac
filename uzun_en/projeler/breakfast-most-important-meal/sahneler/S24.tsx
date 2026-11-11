// Sahne 24 — sınırlar: 22 kişi, tek gün, laboratuvar; prediyabet ve A1C test edilmedi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t22 = K(1, "22 people"), tTest = K(1, "fixed test meal"), tPre = K(2, "prediabetes"), tA1c = K(2, "A1C");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={tTest} bitis={tPre} capa={[1370, 710]} konum={[1200, 400]} metin="FIXED TEST MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "lab")} bitis={tPre} capa={[1590, 540]} konum={[1640, 330]} metin="LAB" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin="THE LIMITS" x={110} y={190} boyut={124} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={110} y={330} aralik={100} boyut={38} genislik={700}
        ogeler={[{ bas: t22, metin: "22 PEOPLE, ONE DAY EACH", renk: RENK.lacivert }, { bas: tTest, metin: "FIXED MEAL IN A LAB", renk: RENK.lacivert }]} />
      <Liste t={t} isaret="carpi" x={110} y={530} aralik={100} boyut={38} genislik={700}
        ogeler={[{ bas: tPre, metin: "PREDIABETES NOT TESTED", renk: RENK.mercan }, { bas: tA1c, metin: "A1C OVER TIME UNKNOWN", renk: RENK.mercan }]} />
    </>
  );
};

export default S24;
