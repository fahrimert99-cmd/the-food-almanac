// Sahne 11 — Ried'in incelemesi: 20 rastgele deneme, 970 yetişkin, sarımsak ve plasebo.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKay = K(0, "Ried");
  const [sk, ak] = pop(t, tKay, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [70, 50, 1780])} />
      <div style={{ position: "absolute", left: 1380, top: 112, transform: `translate(-50%, -50%) scale(${sk})`, opacity: ak }}>
        <Hap metin={s.meta.etiket ?? ""} renk={RENK.altin} />
      </div>
      <Etiket t={t} bas={K(0, "20")} capa={[1500, 560]} konum={[1500, 890]} metin="20 TRIALS" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "970")} vurgu="970" not="adults" x={330} y={70} genislik={340} />
      <Etiket t={t} bas={K(1, "garlic")} capa={[700, 640]} konum={[1000, 180]} metin="GARLIC" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "placebo,")} capa={[470, 640]} konum={[470, 880]} metin="PLACEBO" renk={RENK.gri} />
    </>
  );
};

export default S11;
