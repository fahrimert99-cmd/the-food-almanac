// Sahne 18 — statinler: başlık solda, ilaç adları sağda etiketlerle.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(0, "Cholesterol-lowering")} capa={[800, 640]} konum={[330, 640]} metin="LOWERS CHOLESTEROL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "simvastatin,")} capa={[800, 400]} konum={[1460, 300]} metin="SIMVASTATIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "atorvastatin,")} capa={[880, 560]} konum={[1460, 520]} metin="ATORVASTATIN" renk={RENK.mercan} />
        <Baslik t={t} bas={K(1, "Zocor,")} metin="SOLD AS ZOCOR" x={1460} y={372} boyut={36} renk={RENK.lacivert} hiza="orta" font="inter" agirlik={800} />
        <Baslik t={t} bas={K(1, "Lipitor.")} metin="SOLD AS LIPITOR" x={1460} y={592} boyut={36} renk={RENK.lacivert} hiza="orta" font="inter" agirlik={800} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "statins")} satirlar={b.satirlar} x={100} y={250} boyut={128} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "The FDA names")} metin={b.not!} x={104} y={350} boyut={32} genislik={480} />
    </>
  );
};

export default S18;
