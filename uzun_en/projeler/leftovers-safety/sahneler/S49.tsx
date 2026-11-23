// Sahne 49 — güvenlik notu: doktora danışın.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "ask");
  const [sc, al] = pop(t, K(0, "safety"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1860])}>
        <Etiket t={t} bas={K(1, "medicines")} bitis={tAsk - 0.2} capa={[840, 510]} konum={[420, 180]} metin="MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[707, 533]} konum={[560, 180]} metin="DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1310, top: 110, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * sol(t, tAsk - 0.1) }}>
        <Hap metin="A SAFETY NOTE" renk={RENK.altin} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={tAsk} satirlar={s.meta.baslik?.satirlar ?? []} x={1310} y={140} boyut={110} />
      <Liste t={t} x={1310} y={400} isaret="nokta" boyut={30} aralik={70} genislik={560}
        ogeler={[
          { bas: K(1, "diabetes,"), metin: "DIABETES", renk: RENK.altin },
          { bas: K(1, "cancer,"), metin: "CANCER", renk: RENK.altin },
          { bas: K(1, "organ"), metin: "ORGAN TRANSPLANT", renk: RENK.altin },
          { bas: K(1, "medicines"), metin: "IMMUNE-WEAKENING MEDICINES", renk: RENK.altin },
        ]} />
      <Not t={t} bas={K(1, "whether")} metin="Ask whether you should follow stricter food safety rules." x={1310} y={730} genislik={540} boyut={32} agirlik={700} />
    </>
  );
};
export default S49;
