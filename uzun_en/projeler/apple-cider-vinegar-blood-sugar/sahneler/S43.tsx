// Sahne 43 — ilaç etkileşimi: solda muayene masası, sağda boş kâğıt alanında başlık ve maddeler.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMed = K(0, "medication"), tLarge = K(1, "large amounts"), tPot = K(1, "lower potassium");
  const tMat = K(1, "matters"), tWater = K(1, "water pills"), tIns = K(1, "insulin");
  const tOver = K(2, "possible overlap"), tDiab = K(2, "diabetes medicines");
  const tAsk = K(2, "medicines");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tLarge - 0.1} bitis={tWater - 0.3} capa={[620, 270]} konum={[920, 150]} metin="LARGE AMOUNTS" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tOver - 0.1} capa={[727, 433]} konum={[1200, 470]} metin="POSSIBLE OVERLAP" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tDiab - 0.1} capa={[860, 350]} konum={[1250, 330]} metin="DIABETES MEDICINES" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tMed} metin="MEDICATION" x={1120} y={160} boyut={116} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPot} bitis={tOver - 0.3} metin="LOWER POTASSIUM" x={1120} y={320} boyut={84} renk={RENK.mercan} />
      <Not t={t} bas={tMat} bitis={tOver - 0.3} metin="Matters for people who take:" x={1120} y={405} boyut={36} />
      <Liste t={t} x={1120} y={480} aralik={96} boyut={40} isaret="nokta" ogeler={[
        { bas: tWater, metin: "WATER PILLS", renk: RENK.mercan, bitis: tOver - 0.3 },
        { bas: tIns, metin: "INSULIN", renk: RENK.mercan, bitis: tOver - 0.3 },
      ]} />
      <Ikon t={t} bas={tAsk} ad="uyari" x={1160} y={640} boyut={80} zemin={RENK.altin} />
      <Not t={t} bas={tAsk} metin={s.meta.baslik?.not?.toUpperCase() ?? ""} x={1230} y={600} boyut={36} agirlik={800} genislik={600} />
    </>
  );
};

export default S43;
