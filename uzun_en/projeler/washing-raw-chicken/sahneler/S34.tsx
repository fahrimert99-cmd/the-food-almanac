// Sahne 34 — tek sayı asıl güvence: fırında ısı + termometre, iş bitti onayı.
import React from "react";
import { Etiket, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "number"), tIsi = K(1, "heat"), tTerm = K(1, "thermometer"), tBitti = K(1, "job");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tIsi} capa={[480, 380]} konum={[1000, 130]} metin="HEAT" renk={RENK.mercan} boyut={32} />
        <Etiket t={t} bas={tTerm} capa={[1480, 672]} konum={[1580, 520]} metin="THERMOMETER" renk={RENK.yesil} boyut={32} />
      </Kamera>
      <VurguRozet t={t} bas={tSayi - 0.1} vurgu="165°F" not="the real safeguard" x={1520} y={110} genislik={400} boyut={110} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tBitti} ad="onay" x={1810} y={250} boyut={80} />
    </>
  );
};

export default S34;
