// Sahne 22 — BÖLÜM 2: belirtiler başladıktan sonra. 7 karşılaştırma, 3.249 nezle atağı, ilk işaretle başlama.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBegin = K(0, "symptoms begin"), tSeven = K(1, "seven"), tEp = K(1, "3,249"), tVit = K(1, "vitamin C"), tFirst = K(1, "first sign");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={3.7} />
      <Etiket t={t} bas={tBegin} bitis={tSeven} capa={[667, 460]} konum={[420, 200]} metin="SYMPTOMS BEGIN" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tSeven} vurgu="7" not="COMPARISONS" x={1010} y={60} genislik={300} boyut={76} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tEp} vurgu="3,249" not="COLD EPISODES" x={1380} y={60} genislik={340} boyut={76} renk={RENK.altin} />
      <Etiket t={t} bas={tVit} bitis={tFirst} capa={[1280, 520]} konum={[1500, 740]} metin="VITAMIN C" renk={RENK.yesil} />
      <Etiket t={t} bas={tFirst} capa={[667, 460]} konum={[420, 200]} metin="FIRST SIGN" renk={RENK.mercan} />
    </>
  );
};

export default S22;
