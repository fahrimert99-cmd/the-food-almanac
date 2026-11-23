// Sahne 57 — pratik sonuç: güvenli ritüel, dikkat edilecekler, doktor.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760]);
  const g1 = c[1].bas - 0.1, g2 = c[2].bas - 0.1;
  const pPanel = eout(ilerle(t, 0.15, 0.7));
  const X = 1290;
  return (
    <>
      <Kamera gorsel="tam/57" pencere={w}>
        <Etiket t={t} bas={K(0, "bedtime")} bitis={g1} capa={[560, 520]} konum={[420, 880]} metin="BEDTIME CUP" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} genislik={740} />
      {/* 1. cümle */}
      <BaslikBlok t={t} bas={K(0, "probably")} bitis={g1} satirlar={["PROBABLY", "SAFE"]} x={X} y={260} boyut={120} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "pleasant")} bitis={g1} metin="a pleasant ritual for most people" x={X} y={540} boyut={36} genislik={540} />
      {/* 2. cümle */}
      <Baslik t={t} bas={c[1].bas} bitis={g2} metin="CAUTIONS" x={X} y={190} boyut={110} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" x={X} y={320} aralik={110} boyut={34} genislik={560}
        ogeler={[
          { bas: K(1, "ragweed"), bitis: g2, metin: "RAGWEED ALLERGY", renk: RENK.altin },
          { bas: K(1, "warfarin"), bitis: g2, metin: "WARFARIN", renk: RENK.mercan },
          { bas: K(1, "sedatives"), bitis: g2, metin: "SEDATIVES", renk: RENK.mercan },
        ]} />
      {/* 3. cümle */}
      <Ikon t={t} bas={K(2, "sleep trouble")} ad="soru" x={X + 50} y={250} boyut={100} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "sleep trouble") + 0.2} satirlar={["SLEEP TROUBLE", "THAT LASTS"]} x={X} y={420} boyut={84} renkler={[RENK.lacivert, RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(2, "conversation")} satirlar={["TALK TO", "YOUR DOCTOR"]} x={X} y={640} boyut={84} renkler={[RENK.koyuYesil, RENK.koyuYesil]} />
    </>
  );
};

export default S57;
