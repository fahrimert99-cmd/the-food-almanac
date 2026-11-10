// Sahne 42 — probiyotik karşılaştırması: bardak ve yoğurt etiketleri, rozet, kapanış başlığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "That's");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      <Etiket t={t} bas={K(0, "Cranberry")} bitis={tSon} capa={[780, 330]} konum={[1080, 160]} metin="CRANBERRY" renk={RENK.mercan} boyut={32} />
      <Etiket t={t} bas={K(0, "probiotics")} bitis={tSon} capa={[1250, 640]} konum={[1170, 420]} metin="PROBIOTICS" renk={RENK.yesil} boyut={32} />
      <VurguRozet t={t} bas={K(0, "215")} vurgu="215" not="PEOPLE · 3 SMALL TRIALS" x={1600} y={120} genislik={420} bitis={tSon} />
      <BaslikBlok t={t} bas={K(1, "interesting")} satirlar={["AN INTERESTING HINT"]} x={1240} y={120} boyut={78} hiza="orta" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "small")} metin="A SMALL ONE" x={1240} y={190} hiza="orta" boyut={40} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(1, "care")} metin="ASK YOUR CARE TEAM" x={1240} y={250} hiza="orta" boyut={40} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S42;
