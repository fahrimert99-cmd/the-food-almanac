// Sahne 51 — özet: 3 g beta-glucan → LDL 7–10 mg/dL. Kâğıt boşluklarında başlık ve rozetler, kasede etiket.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBeta = K(0, "beta-glucan");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [30, 10, 1860], [90, 45, 1740])}>
        <Etiket t={t} bas={tBeta} capa={[830, 400]} konum={[340, 650]} metin="OAT BETA-GLUCAN" renk={RENK.altin} />
      </Kamera>
      {/* 1. vuruş: havuzlanmış analizler */}
      <Baslik t={t} bas={K(0, "pooled")} bitis={K(0, "about") + 0.1} metin="POOLED" x={70} y={300} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "randomized")} bitis={K(0, "about") + 0.1} metin="TRIALS" x={70} y={392} boyut={80} renk={RENK.koyuYesil} />
      {/* 2. vuruş: günde 3 g */}
      <VurguRozet t={t} bas={K(0, "three")} vurgu="3 g" not="OF OAT BETA-GLUCAN A DAY" x={270} y={250} genislik={380} boyut={96} />
      {/* 3. vuruş: LDL 7–10 */}
      <Baslik t={t} bas={K(0, "LDL")} metin="LDL" x={1680} y={250} boyut={104} renk={RENK.mercan} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "seven")} vurgu="–7 TO –10" not="mg/dL" x={1680} y={330} genislik={400} boyut={76} renk={RENK.mercan} />
    </>
  );
};

export default S51;
