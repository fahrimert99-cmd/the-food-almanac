// Sahne 23 — aynı ekip, aynı ürün; bağımsız doğrulama
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOnc = K(1, "That's") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [20, 30, 1840], [120, 90, 1660])}>
        <Etiket t={t} bas={K(0, "trials")} bitis={tOnc} capa={[1500, 380]} konum={[1500, 215]} metin="TWO TRIALS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "research")} bitis={tOnc} capa={[330, 330]} konum={[640, 175]} metin="SAME TEAM" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "same product")} bitis={tOnc} capa={[700, 490]} konum={[1020, 340]} metin="SAME PRODUCT" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "independent")} satirlar={["INDEPENDENT", "CONFIRMATION"]} x={960} y={120} boyut={88} hiza="orta" />
      <Not t={t} bas={K(1, "confirmation")} metin="SAME TEAM · SAME PRODUCT" x={960} y={330} hiza="orta" boyut={32} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S23;
