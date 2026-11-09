// Sahne 39 — USDA: pişmiş ıspanak ve lahana (lutein + zeaksantin)
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])}>
        <Etiket t={t} bas={K(0, "spinach")} capa={[330, 300]} konum={[330, 185]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "kale")} capa={[800, 290]} konum={[800, 185]} metin="KALE" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "USDA")} />
      <BaslikBlok t={t} bas={K(0, "cup") - 0.1} satirlar={["1 CUP", "COOKED SPINACH"]} x={1860} y={170} boyut={80} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "20")} vurgu="20 MG" not="lutein and zeaxanthin together" x={1560} y={390} genislik={460} />
      <VurguRozet t={t} bas={K(1, "24")} vurgu="≈ 24 MG" not="1 cup cooked kale" x={1560} y={660} genislik={460} renk={RENK.koyuYesil} />
    </>
  );
};

export default S39;
