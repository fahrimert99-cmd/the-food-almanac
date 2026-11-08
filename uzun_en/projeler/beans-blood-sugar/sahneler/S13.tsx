// Sahne 13 — karşılaştırma grubu: tam buğday lifi; daha zor ve adil test.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOther = K(0, "other"), tWheat = K(0, "whole wheat"), tFiber = K(0, "fiber");
  const tComp = K(1, "comparison"), tAsked = K(1, "asked"), tTough = K(1, "tougher");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 80, 1700])} />
      <Baslik t={t} bas={tOther} bitis={tComp - 0.2} metin="THE OTHER GROUP" x={160} y={110} boyut={90} renk={RENK.lacivert} />
      <Etiket t={t} bas={tWheat} bitis={tComp - 0.2} capa={[640, 380]} konum={[560, 230]} metin="WHOLE WHEAT" renk={RENK.altin} />
      <Etiket t={t} bas={tFiber} bitis={tComp - 0.2} capa={[1130, 520]} konum={[1000, 900]} metin="EXTRA FIBER" renk={RENK.yesil} />
      <Baslik t={t} bas={tComp} metin="COMPARISON GROUP" x={160} y={110} boyut={90} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAsked} metin="also asked to improve" x={166} y={190} boyut={38} />
      <VurguRozet t={t} bas={tTough} vurgu="FAIRER TEST" not="TOUGHER COMPARISON" x={1640} y={100} genislik={420} boyut={70} renk={RENK.yesil} />
    </>
  );
};

export default S13;
