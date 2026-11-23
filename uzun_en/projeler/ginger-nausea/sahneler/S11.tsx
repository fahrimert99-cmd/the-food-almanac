// Sahne 11 — "en az 1 gram": terazi üstünde toz zencefil; sağda kinetik başlık ve sayı rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, Hap, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEnAz = K(0, "at least");
  const tGram = K(0, "gram of ginger");
  const tDoz = K(0, "fixed dose");
  const tPlasebo = K(0, "placebo");
  const tFigur = K(1, "one-gram");
  const tTut = K(1, "hold on");
  const [sc, al] = pop(t, tPlasebo, 0.55);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 60, 1740])}>
        <Etiket t={t} bas={tGram} bitis={tFigur} capa={[560, 290]} konum={[930, 200]} metin="GINGER POWDER" renk={RENK.altin} />
        <Etiket t={t} bas={tDoz} bitis={tFigur} capa={[960, 740]} konum={[1260, 880]} metin="FIXED DOSE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tEnAz} satirlar={["AT LEAST", "1 GRAM"]} x={1250} y={290} boyut={124} />
      <Not t={t} bas={tEnAz + 0.5} metin="the fixed ginger dose that beat placebo" x={1254} y={530} boyut={30} genislik={560} />
      <div style={{ position: "absolute", left: 1254, top: 620, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="BETTER THAN PLACEBO" renk={RENK.yesil} boyut={26} />
      </div>
      <VurguRozet t={t} bas={tFigur} vurgu="1 G" not="HOLD ON TO IT" x={1420} y={740} genislik={330} boyut={90} />
    </>
  );
};
export default S11;
