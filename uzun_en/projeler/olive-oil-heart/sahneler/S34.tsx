// Sahne 34 — Fikir 2: fenoller. EUROLIVE denemesi (200 sağlıklı erkek, 25 mL/gün, düşük/orta/yüksek fenol, 3 hafta).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFen = K(0, "phenolics"), tEu = K(1, "EUROLIVE");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "low,")} capa={[320, 520]} konum={[300, 165]} metin="LOW PHENOLIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "high")} capa={[720, 480]} konum={[880, 330]} metin="HIGH PHENOLIC" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "second")} bitis={tEu - 0.15} metin="IDEA 2" x={1860} y={250} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <Baslik t={t} bas={tFen} bitis={tEu - 0.15} metin="PHENOLICS" x={1860} y={340} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <BaslikBlok t={t} bas={tEu} satirlar={["EUROLIVE", "TRIAL"]} x={1860} y={280} boyut={110} hiza="sag" />
      <Liste t={t} x={1210} y={520} isaret="nokta" boyut={32} aralik={76} genislik={650} ogeler={[
        { bas: K(1, "200"), metin: "200 HEALTHY MEN" },
        { bas: K(1, "aged"), metin: "AGES 20 TO 60" },
        { bas: K(1, "25"), metin: "25 ML A DAY" },
        { bas: K(1, "three"), metin: "3 WEEKS EACH" },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "EUROLIVE") + 0.2} />
    </>
  );
};

export default S34;
