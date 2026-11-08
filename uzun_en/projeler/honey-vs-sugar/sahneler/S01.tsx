// Sahne 1 — bal kavanozu, 18 çalışma, –4 mg/dL
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // sol kenardaki sahte ekranlı ölçüm aleti kadraj dışında kalır (x < 500)
  const pencere = kameraYolu(t, s.sure, [520, 130, 1400], [560, 150, 1340]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={pencere}>
        <Etiket t={t} bas={K(0, "honey")} capa={[1150, 640]} konum={[850, 520]} metin="HONEY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "18")} metin="18 TRIALS" x={70} y={270} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "fasting")} metin="FASTING GLUCOSE" x={74} y={385} boyut={58} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "4")} vurgu="–4" not="mg/dL" x={1720} y={330} genislik={320} />
    </>
  );
};

export default S01;
