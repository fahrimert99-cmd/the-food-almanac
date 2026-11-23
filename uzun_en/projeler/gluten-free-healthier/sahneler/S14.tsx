// Sahne 14 — iki kohort: 64.714 kadın + 45.303 erkek = 110.017 yetişkin.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const out = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(0, "cohorts")} bitis={out} capa={[420, 560]} konum={[760, 250]} metin="TWO COHORTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "heart")} capa={[920, 585]} konum={[1080, 420]} metin="HEART DISEASE" renk={RENK.mercan} />
      </Kamera>
      <Panel a={1} genislik={880} opak={1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* 1. cümle: iki kohort */}
      <Baslik t={t} bas={K(0, "two")} bitis={out} metin="TWO AMERICAN COHORTS" x={1250} y={190} boyut={64} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "64,714")} bitis={out} vurgu="64,714" not="WOMEN · NURSES' HEALTH STUDY" x={1540} y={260} genislik={560} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "45,303")} bitis={out} vurgu="45,303" not="MEN · HEALTH PROFESSIONALS" x={1540} y={520} genislik={560} renk={RENK.koyuYesil} />
      {/* 2. cümle: toplam */}
      <BaslikBlok t={t} bas={K(1, "None")} satirlar={["110,017", "ADULTS"]} x={1250} y={330} boyut={130} renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Not t={t} bas={K(1, "had")} metin="no heart disease at the start" x={1254} y={620} boyut={36} />
    </>
  );
};

export default S14;
