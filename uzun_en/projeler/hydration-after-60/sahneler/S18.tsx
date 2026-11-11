// Sahne 18 — susuzluk güvenilir bir alarm değil; rutin gerekli.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.1;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [120, 40, 1720]);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={p}>
        {/* çan: sessiz alarm */}
        <Etiket t={t} bas={K(0, "alarm")} bitis={cikis} capa={[580, 560]} konum={[260, 560]} metin="THIRST ALARM" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "thirst")} metin="THIRST ISN'T" x={70} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "dependable")} metin="A DEPENDABLE ALARM" x={70} y={200} boyut={72} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "routine")} vurgu="ROUTINE" not="DOESN'T RELY ON THIRST" x={1710} y={420} genislik={330} boyut={80} renk={RENK.yesil} />
    </>
  );
};

export default S18;
