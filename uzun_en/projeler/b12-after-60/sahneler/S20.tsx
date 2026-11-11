// Sahne 20 — DPP denemesi: metformin ya da plasebo, iki şişe.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: "rgb(250,241,214)", borderRadius: 30, boxShadow: "0 0 28px 22px rgb(250,241,214)" }} />
);

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "2,150"), tMet = K(0, "metformin"), tPla = K(0, "placebo"), tThose = K(1, "those"), tNine = K(1, "nine");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [160, 60, 1700], [210, 90, 1600])}>
        {/* takvimlerdeki anlamsız rakamlar kâğıt rengiyle örtülür */}
        <Yama x={50} y={140} w={500} h={420} />
        <Yama x={1390} y={160} w={450} h={410} />
        <Etiket t={t} bas={tMet} capa={[560, 640]} konum={[560, 470]} metin="METFORMIN" renk={RENK.altin} />
        <Etiket t={t} bas={tPla} capa={[1070, 640]} konum={[1070, 470]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={tSayi} bitis={tThose - 0.1} vurgu="≈ 2,150" not="adults at high risk for diabetes" x={1300} y={70} genislik={480} boyut={84} />
      <VurguRozet t={t} bas={tNine} vurgu="≈ 9 YEARS" not="more on metformin" x={1560} y={230} genislik={400} boyut={84} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S20;
