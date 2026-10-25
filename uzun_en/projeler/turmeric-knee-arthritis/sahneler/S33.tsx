// Sahne 33 — kurkumin zor emilir: solda görsel, sağda üç neden ve sonuç.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, Liste, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pen}>
        <Etiket t={t} bas={K(0, "Curcumin")} bitis={K(1, "poor uptake") + 0.8} capa={[653, 533]} konum={[1330, 440]} metin="CURCUMIN" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "hard")} satirlar={s.meta.baslik?.satirlar ?? ["HARD TO", "ABSORB"]} x={1200} y={160} boyut={96}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.3} />
      <Liste t={t} x={1200} y={580} aralik={96} boyut={34} genislik={660}
        ogeler={[
          { bas: K(1, "poor uptake"), metin: "POOR GUT UPTAKE", renk: RENK.mercan },
          { bas: K(1, "quick breakdown"), metin: "QUICK BREAKDOWN", renk: RENK.mercan },
          { bas: K(1, "fast removal"), metin: "FAST REMOVAL", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={K(1, "very little")} metin="VERY LITTLE REACHES YOUR BLOODSTREAM" x={1200} y={868} boyut={32} genislik={660} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S33;
