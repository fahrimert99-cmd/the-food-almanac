// Sahne 57 — güvenlik uyarısı: ilaç kullananlar önce doktora danışsın.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(1, "doctor")} capa={[1140, 850]} konum={[1000, 600]} metin="YOUR DOCTOR" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "bread you eat")} capa={[1500, 700]} konum={[1560, 500]} metin="BREAD" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "If you have")} satirlar={["SAFETY", "FIRST"]} x={140} y={170} boyut={150} />
      <Not t={t} bas={K(1, "talk to your")} metin="Talk to your doctor, pharmacist or dietitian first" x={144} y={480} boyut={36} genislik={760} />
      <Not t={t} bas={K(1, "matched to")} metin="Doses may be matched to your usual carbohydrates" x={144} y={590} boyut={34} genislik={700} renk={RENK.koyuYesil} />
    </>
  );
};

export default S57;
