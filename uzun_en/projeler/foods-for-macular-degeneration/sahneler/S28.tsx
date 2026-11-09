// Sahne 28 — lutein/zeaksantin ve beta-karoten (keşifsel analiz)
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tExp = K(0, "exploratory"), tSwap = K(0, "swapping");
  const [sc, al] = pop(t, tExp, 0.5);
  const aHap = al * sol(t, tSwap - 0.1);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 40, 1880], [60, 90, 1760])}>
        <Etiket t={t} bas={K(0, "beta-carotene")} capa={[430, 690]} konum={[600, 245]} metin="BETA-CAROTENE" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={K(0, "lutein")} capa={[790, 600]} konum={[1040, 245]} metin="LUTEIN + ZEAXANTHIN" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {aHap > 0 && (
        <div style={{ position: "absolute", right: 60, top: 270, opacity: aHap, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
          <Hap metin="EXPLORATORY ANALYSIS" renk={RENK.altin} boyut={34} />
        </div>
      )}
      <BaslikBlok t={t} bas={tSwap} satirlar={["LUTEIN", "VS BETA-CAROTENE"]} x={1860} y={300} boyut={90} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "18")} vurgu="–18%" not="late disease" x={1390} y={560} genislik={320} boyut={96} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "22")} vurgu="–22%" not="wet form" x={1715} y={560} genislik={320} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};

export default S28;
