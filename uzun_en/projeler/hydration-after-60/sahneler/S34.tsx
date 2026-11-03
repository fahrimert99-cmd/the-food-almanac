// Sahne 34 — FRESH-UP denemesi: sürahi + bardak üstünde başlık, kaynak hapı ve sağda sırayla rozetler.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1780]);
  const tCap = K(1, "cap fluids");
  const t504 = K(2, "504"), tAge = K(2, "average age"), tLim = K(2, "1,500"), tCup = K(2, "6 cups"), tNo = K(2, "no limit");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pen} />
      <Baslik t={t} bas={K(0, "heart failure")} bitis={tCap - 0.2} metin="HEART FAILURE" x={1860} y={220} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "unsettled")} bitis={tCap - 0.2} metin="STILL UNSETTLED" x={1860} y={330} boyut={92} renk={RENK.mercan} hiza="sag" />
      <Etiket t={t} bas={tCap} bitis={t504 - 0.3} capa={[880, 430]} konum={[1300, 290]} metin="CAP FLUIDS" renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={K(2, "FRESH-UP")} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={t504} bitis={tAge - 0.1} vurgu="504" not="PEOPLE, CHRONIC HEART FAILURE" x={1640} y={170} genislik={460} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tAge} bitis={tLim - 0.1} vurgu="AGE 69" not="AVERAGE" x={1640} y={170} genislik={460} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tLim} vurgu="1,500 ML" not="A DAY LIMIT" x={1640} y={170} genislik={460} renk={RENK.mercan} />
      <Not t={t} bas={tCup} metin="ABOUT 6 CUPS" x={1640} y={400} hiza="orta" boyut={34} agirlik={800} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tNo} vurgu="OR NO LIMIT" x={1640} y={480} genislik={460} boyut={72} renk={RENK.yesil} />
    </>
  );
};

export default S34;
