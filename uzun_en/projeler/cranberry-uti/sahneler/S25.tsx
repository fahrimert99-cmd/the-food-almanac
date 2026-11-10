// Sahne 25 — 29% / 29% ve 10 / 12: sağda iki sıra rozet, solda gravür.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1830])}>
        <Etiket t={t} bas={K(1, "cranberry")} capa={[780, 560]} konum={[1020, 800]} metin="CRANBERRY" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={K(0, "Bacteria")} metin="BACTERIA + WHITE CELLS IN URINE" x={1500} y={170} hiza="orta" boyut={32} agirlik={800} genislik={720} />
      <VurguRozet t={t} bas={K(0, "29")} vurgu="29%" not="CRANBERRY" x={1330} y={230} genislik={280} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "both")} vurgu="29%" not="PLACEBO" x={1670} y={230} genislik={280} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Symptomatic")} metin="SYMPTOMATIC INFECTIONS" x={1500} y={510} hiza="orta" boyut={32} agirlik={800} genislik={720} />
      <VurguRozet t={t} bas={K(1, "ten")} vurgu="10" not="CRANBERRY" x={1330} y={570} genislik={280} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "twelve")} vurgu="12" not="PLACEBO" x={1670} y={570} genislik={280} renk={RENK.lacivert} />
    </>
  );
};

export default S25;
