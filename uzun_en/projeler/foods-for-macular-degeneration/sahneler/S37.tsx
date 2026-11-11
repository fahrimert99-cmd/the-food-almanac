// Sahne 37 — güvenlik notları: doktor/eczacıya sor
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(2, "Always") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 60, 1780])}>
        <Etiket t={t} bas={K(1, "zinc")} bitis={tA} capa={[980, 470]} konum={[560, 230]} metin="HIGH-DOSE ZINC" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "doctor")} capa={[947, 767]} konum={[1330, 830]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "pharmacist")} capa={[985, 500]} konum={[1330, 650]} metin="PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "safety")} bitis={tA} metin="SAFETY NOTES" x={1860} y={190} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Liste t={t} x={1340} y={340} aralik={110} boyut={30} isaret="carpi" genislik={520} ogeler={[
        { bas: K(1, "upset"), metin: "UPSET STOMACH", renk: RENK.altin, bitis: tA },
        { bas: K(1, "urinary"), metin: "URINARY PROBLEMS IN MEN", renk: RENK.mercan, bitis: tA },
      ]} />
      <Not t={t} bas={K(1, "original")} bitis={tA} metin="in the original trial" x={1340} y={520} boyut={28} genislik={520} />
      <BaslikBlok t={t} bas={tA + 0.15} satirlar={["ASK YOUR", "PHARMACIST"]} x={1860} y={190} boyut={92} hiza="sag" />
      <Not t={t} bas={K(2, "especially")} metin="especially with other prescriptions" x={1860} y={470} hiza="sag" boyut={30} genislik={520} />
    </>
  );
};

export default S37;
