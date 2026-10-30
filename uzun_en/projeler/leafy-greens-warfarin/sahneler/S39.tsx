// Sahne 39 — Majör kanama: iki silindir (uzun = varfarin, kısa = apixaban); 2,13 vs 3,09 %/yıl.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(0, "apixaban")} capa={[1190, 590]} konum={[1600, 250]} metin="APIXABAN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "warfarin")} capa={[760, 500]} konum={[260, 440]} metin="WARFARIN" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Major")} satirlar={["MAJOR", "BLEEDING"]} x={64} y={150} boyut={92} renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(0, "2.13")} vurgu="2.13%" not="per year" x={1600} y={330} genislik={330} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(0, "3.09")} vurgu="3.09%" not="per year" x={260} y={560} genislik={330} renk={RENK.altin} />
    </>
  );
};

export default S39;
