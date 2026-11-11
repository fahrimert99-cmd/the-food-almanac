// Sahne 15 — tansiyon aleti ve meyve kasesi; sağda DASH + düşük sodyum çubukları.
import React from "react";
import { BaslikBlok, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [40, 140, 1800])}>
        <Etiket t={t} bas={K(0, "systolic")} capa={[600, 640]} konum={[880, 470]} metin="SYSTOLIC PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "DASH")} satirlar={["DASH + LOW", "SODIUM"]} x={1860} y={190} boyut={96} hiza="sag" />
      <CubukGrafik t={t} bas={K(0, "7.1") - 0.1} x={1130} y={480} w={700} h={290} maks={12.5} cubuklar={[
        { etiket: "NO HIGH BP", deger: 7.1, metin: "–7.1", renk: RENK.altin, bas: K(0, "7.1") - 0.1 },
        { etiket: "HIGH BP", deger: 11.5, metin: "–11.5", renk: RENK.yesil, bas: K(0, "11.5") - 0.1 },
      ]} />
      <Not t={t} bas={K(0, "11.5")} metin="mmHg systolic vs typical diet, high sodium" x={1480} y={870} hiza="orta" boyut={28} genislik={760} />
      <KaynakEtiketi t={t} metin="Sacks et al. · N Engl J Med · 2001" />
    </>
  );
};

export default S15;
