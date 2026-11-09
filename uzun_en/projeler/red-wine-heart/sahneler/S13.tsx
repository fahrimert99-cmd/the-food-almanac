// Sahne 13 — eski içiciler: terazi + +26% rozeti
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Etiket t={t} bas={K(1, "never")} capa={[480, 440]} konum={[480, 220]} metin="NEVER DRANK" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(1, "former")} satirlar={["FORMER", "DRINKERS"]} x={1860} y={170} boyut={100} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={K(1, "higher")} capa={[1400, 560]} konum={[1250, 440]} metin="HIGHER RISK" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "26")} vurgu="+26%" not="higher risk of dying than lifelong non-drinkers" x={1060} y={180} renk={RENK.mercan} genislik={400} />
    </>
  );
};
export default S13;
