// Sahne 37 — Gupta 2023 çalışması: masada tansiyon aleti, tuzluk ve not defteri.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(1, "median")} capa={[1270, 520]} konum={[930, 170]} metin="MEDIAN AGE 61" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2023")} metin="2023 TRIAL" x={1860} y={185} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "213")} bitis={cik} vurgu="213" not="ADULTS AGED 50 TO 75" x={420} y={150} genislik={400} />
      <VurguRozet t={t} bas={K(1, "almost half")} vurgu="≈ HALF" not="HAD HIGH BLOOD PRESSURE" x={420} y={150} genislik={440} renk={RENK.mercan} />
    </>
  );
};

export default S37;
