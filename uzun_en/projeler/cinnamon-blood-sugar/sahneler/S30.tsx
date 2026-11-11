// Sahne 30 — Pratik soru: kavanozunda hangi tarçın var?
import React from "react";
import { AbsoluteFill, AltSis, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "your jar")} capa={[953, 520]} konum={[1640, 400]} metin="WHICH CINNAMON?" renk={RENK.altin} boyut={26} />
      </Kamera>
      <AltSis a={0.4} />
      <BaslikBlok t={t} bas={K(0, "practical")} satirlar={["PRACTICAL", "QUESTION"]} x={70} y={330} boyut={88} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(2, "one detail")} vurgu="1 DETAIL" not="changes how much to use" x={1660} y={620} genislik={380} boyut={80} renk={RENK.mercan} />
    </AbsoluteFill>
  );
};

export default S30;
