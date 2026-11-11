// Sahne 53 — 2022 Toronto analizi: küçük ortalama iyileşme, düşük kesinlik, yayın yanlılığı sonrası kayboldu.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2022 = K(0, "2022"), t18 = K(0, "18"), t4 = K(0, "4"), tLow = K(1, "low"), tPub = K(1, "publication");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tPub} capa={[1000, 800]} konum={[960, 420]} metin="PUBLICATION BIAS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={t18} metin="18 TRIALS" x={960} y={140} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      {/* ölçerin düğmelerindeki bozuk yazıları kartlar sürekli örter */}
      <VurguRozet t={t} bas={t2022 - 0.1} bitis={t4} vurgu="2022" not="TORONTO ANALYSIS" x={1560} y={625} genislik={440} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t4} bitis={tLow} vurgu="≈ 4 MG/DL" not="FASTING GLUCOSE" x={1560} y={625} genislik={440} boyut={86} renk={RENK.altin} />
      <VurguRozet t={t} bas={tLow} vurgu="LOW CERTAINTY" not="FADED AFTER BIAS ADJUSTMENT" x={1560} y={625} genislik={500} boyut={70} renk={RENK.mercan} />
    </>
  );
};

export default S53;
