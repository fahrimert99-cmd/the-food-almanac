// Sahne 48 — İpucu 1: yatmadan önce ritüel, tedavi değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRit = K(1, "bedtime"), tNot = K(1, "not"), tWarm = K(2, "warm cup"), tSame = K(2, "same time");
  const tLow = K(2, "low-risk"), tMod = K(2, "modest");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kam} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1250, height: 330,
        background: `linear-gradient(to bottom, ${kagit(0.92)} 0%, ${kagit(0.92)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.0} metin="1" x={130} y={150} boyut={190} renk={RENK.altin} />
      <Baslik t={t} bas={tRit} bitis={tWarm - 0.2} metin="BEDTIME RITUAL" x={290} y={110} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} bitis={tWarm - 0.2} metin="NOT A TREATMENT" x={290} y={200} boyut={76} renk={RENK.mercan} />
      <Etiket t={t} bas={tWarm} bitis={tLow - 0.1} capa={[693, 590]} konum={[330, 400]} metin="WARM CUP" renk={RENK.altin} />
      <Etiket t={t} bas={tSame} bitis={tMod - 0.2} capa={[1210, 470]} konum={[1000, 250]} metin="SAME TIME EACH EVENING" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tLow} bitis={tMod - 0.2} vurgu="LOW-RISK" not="A HABIT" x={600} y={70} genislik={420} boyut={80} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tMod} vurgu="MODEST" not="IMPROVEMENT IN SLEEP QUALITY" x={720} y={70} genislik={680} boyut={80} renk={RENK.altin} />
    </>
  );
};
export default S48;
