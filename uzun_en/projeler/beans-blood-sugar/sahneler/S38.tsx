// Sahne 38 — böbrek notu: sol üstte başlık, sağ üstte iki aşamalı mesaj, nesne etiketleri.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(2, "If");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "limit")} bitis={t2} capa={[800, 430]} konum={[540, 300]} metin="BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "lab tests")} capa={[1240, 700]} konum={[1500, 890]} metin="LAB TESTS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={["A NOTE ON", "KIDNEYS"]} x={90} y={215} boyut={88} />
      <KaynakEtiketi t={t} bas={K(1, "National")} bitis={t2} metin="National Kidney Foundation" y={48} />
      <Ikon t={t} bas={K(1, "usually")} bitis={t2} ad="onay" x={1080} y={190} boyut={84} />
      <Baslik t={t} bas={K(1, "usually")} bitis={t2} metin="USUALLY NO LIMIT" x={1150} y={190} boyut={72} renk={RENK.koyuYesil} />
      <Liste t={t} x={1000} y={100} aralik={78} boyut={34} isaret="nokta" genislik={880}
        ogeler={[
          { bas: K(2, "high potassium"), metin: "HIGH POTASSIUM OR PHOSPHORUS", renk: RENK.mercan },
          { bas: K(2, "dialysis,"), metin: "OR ON DIALYSIS", renk: RENK.mercan },
          { bas: K(2, "ask a"), metin: "ASK A KIDNEY DIETITIAN", renk: RENK.yesil },
        ]} />
    </>
  );
};

export default S38;
