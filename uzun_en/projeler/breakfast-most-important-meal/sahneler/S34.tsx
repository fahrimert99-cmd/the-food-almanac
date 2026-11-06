// Sahne 34 — süt + meyve + mezura: 24 haftalık deneme, +0.45 kg vs −0.16 kg.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800]);
  const t24 = K(1, "24-week"), tAvg = K(1, "average"), tMilk = K(1, "milk"), tGain = K(1, "0.45"), tCmp = K(2, "comparison"), tLoss = K(2, "0.16");
  const m = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={p}>
        <Etiket t={t} bas={tMilk - 0.1} capa={[520, 420]} konum={[250, 330]} metin="MILK PROTEIN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={t24 - 0.1} metin={m?.satirlar[0] ?? "24 WEEKS"} x={1000} y={160} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAvg - 0.3} bitis={tGain - 0.2} metin="60 adults · average age 61" x={1000} y={235} boyut={32} />
      <VurguRozet t={t} bas={tGain - 0.1} vurgu="+0.45 kg" not={m?.not} x={1230} y={265} genislik={400} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tLoss - 0.1} vurgu="–0.16 kg" not="carbohydrate drink group" x={1670} y={265} genislik={380} renk={RENK.mercan} />
      <Not t={t} bas={tCmp} metin="COMPARISON GROUP" x={1670} y={222} genislik={420} boyut={24} agirlik={800} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S34;
