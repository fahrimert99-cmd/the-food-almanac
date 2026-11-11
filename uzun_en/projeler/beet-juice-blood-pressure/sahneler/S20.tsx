// Sahne 20 — Londra denemesi: 68 yetişkin, 250 mL pancar suyu, plasebo, ilaç kullanımı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYetiskin = K(0, "68"), tMl = K(0, "250"), tSuyu = K(0, "beet juice"), tPlasebo = K(1, "placebo");
  const tYari = K(2, "half");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700])}>
        <Etiket t={t} bas={tSuyu} bitis={tYari} capa={[1480, 520]} konum={[1480, 250]} metin="BEET JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={tPlasebo} bitis={tYari} capa={[1130, 520]} konum={[1130, 250]} metin="PLACEBO" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={tYetiskin} satirlar={["68 ADULTS,", "4 WEEKS"]} x={110} y={230} boyut={104} />
      <VurguRozet t={t} bas={tMl} bitis={tYari - 0.1} vurgu="250 mL" not="BEET JUICE A DAY" x={330} y={470} genislik={440} boyut={96} />
      <VurguRozet t={t} bas={tYari} vurgu="HALF" not="ALREADY TAKING BLOOD PRESSURE MEDICINE" x={330} y={470} genislik={500} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};

export default S20;
