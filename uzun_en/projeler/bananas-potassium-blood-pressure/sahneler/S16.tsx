// Sahne 16 — pazar tezgâhı: DASH bütün bir yeme düzeni; potasyumu tek başına denemek gerekir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "less"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 50, 1920], [80, 110, 1760])}>
        <Etiket t={t} bas={K(0, "vegetables")} capa={[560, 520]} konum={[800, 400]} metin="VEGETABLES" renk={RENK.yesil} bitis={K(1, "cannot")} />
        <Etiket t={t} bas={K(0, "fruits")} capa={[1500, 690]} konum={[1700, 560]} metin="FRUITS" renk={RENK.mercan} bitis={K(1, "cannot")} />
        <div style={{ position: "absolute", left: 1690, top: 440, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * (t < K(1, "cannot") ? 1 : 0) }}>
          <Hap metin="LESS SODIUM" renk={RENK.lacivert} boyut={28} />
        </div>
        <Etiket t={t} bas={K(1, "potassium")} capa={[1400, 540]} konum={[1650, 430]} metin="POTASSIUM ALONE" renk={RENK.altin} bitis={K(2, "trials")} />
        <Etiket t={t} bas={K(2, "trials")} capa={[1010, 330]} konum={[820, 450]} metin="TRIALS: MOSTLY POTASSIUM" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["A WHOLE", "EATING PATTERN"]} x={140} y={170} boyut={84} />
    </>
  );
};

export default S16;
