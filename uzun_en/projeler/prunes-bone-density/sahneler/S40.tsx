// Sahne 40 — üçü de iyileştirdi; kivi en az yan etki; erik kurusu makul seçenek, net kazanan değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [] as string[], not: "" };
  const tKiwi = K(1, "Kiwifruit"), tSo = K(2, "So");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 60, 1780])}>
        <Etiket t={t} bas={tKiwi} bitis={tSo - 0.1} capa={[493, 467]} konum={[430, 230]} metin="FEWEST SIDE EFFECTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "prunes")} capa={[1060, 540]} konum={[1150, 830]} metin="REASONABLE OPTION" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1490} y={190} boyut={84} adim={0.2} />
      <VurguRozet t={t} bas={K(0, "similar")} vurgu="SIMILAR" not="on the main measure" x={1680} y={380} genislik={360} boyut={64} bitis={tSo - 0.1} />
      <BaslikBlok t={t} bas={K(2, "not a clear")} satirlar={["NOT A CLEAR", "WINNER"]} x={1490} y={700} boyut={62} adim={0.2}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S40;
