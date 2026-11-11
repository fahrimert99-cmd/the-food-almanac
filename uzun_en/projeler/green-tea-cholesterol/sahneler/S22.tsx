// Sahne 22 — iki sürpriz: toplam kolesterol yalnızca ≥200 mg/dL'de belirgin düştü; trigliserit +%3,6.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [50, 70, 1700])}>
        <Etiket t={t} bas={K(2, "extract")} bitis={13.2} capa={[330, 400]} konum={[800, 150]} metin="EXTRACT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "placebo")} capa={[740, 690]} konum={[1000, 540]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(0, "two")} bitis={3.4} satirlar={["TWO", "SURPRISES"]} x={1860} y={260} boyut={110} hiza="sag" />
      <Not t={t} bas={K(1, "Total")} bitis={8.6} metin="TOTAL CHOLESTEROL FELL CLEARLY ONLY IF YOU STARTED AT" x={1860} y={250} hiza="sag" genislik={640} boyut={36} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "200")} bitis={8.6} vurgu="≥ 200" not="mg/dL at the start" x={1540} y={470} genislik={420} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(2, "triglycerides")} satirlar={b.satirlar} x={1860} y={240} boyut={96} hiza="sag" renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={K(2, "3.6")} vurgu={b.vurgu!} not={b.not} x={1640} y={400} genislik={400} renk={RENK.mercan} />
    </>
  );
};
export default S22;
