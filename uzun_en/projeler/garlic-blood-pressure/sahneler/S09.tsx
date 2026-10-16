// Sahne 9 — "her puan önemli": sebze kasesi üzerinde üç karşılaştırma etiketi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "medication"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 70, 1780])}>
        <Etiket t={t} bas={K(1, "garlic's")} capa={[480, 520]} konum={[300, 380]} metin="GARLIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "diet")} capa={[1250, 400]} konum={[1640, 250]} metin="DIET CHANGES" renk={RENK.yesil} />
        <div style={{ position: "absolute", left: 1640, top: 430, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="MEDICATION" renk={RENK.lacivert} />
        </div>
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "point")} satirlar={["EVERY POINT", "COUNTS"]} x={70} y={130} boyut={88} />
    </>
  );
};
export default S09;
