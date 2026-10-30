// Sahne 1 — Rush çalışması: sofra, yemek etiketleri, sağda başlık ve –53% rozeti.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYemek = K(0, "MIND diet");
  const tYarim = K(0, "about half");
  const cikis = tYarim - 0.35;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={tYemek} bitis={cikis} capa={[440, 490]} konum={[560, 300]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={tYemek + 0.2} bitis={cikis} capa={[620, 620]} konum={[760, 880]} metin="SALMON" renk={RENK.altin} />
        <Etiket t={t} bas={tYemek + 0.4} bitis={cikis} capa={[355, 690]} konum={[330, 900]} metin="BLUEBERRIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={tYemek + 0.6} bitis={cikis} capa={[887, 467]} konum={[1150, 440]} metin="OLIVE OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tYemek + 0.8} bitis={cikis} capa={[1040, 603]} konum={[1290, 770]} metin="WALNUTS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* 923 yaşlı yetişkin */}
      <VurguRozet t={t} bas={K(0, "923")} bitis={tYemek - 0.15} vurgu="923" not="OLDER ADULTS" x={1560} y={190} genislik={420} />
      {/* yaklaşık yarısı */}
      <Baslik t={t} bas={tYarim} metin={b.satirlar[0]} x={1860} y={220} boyut={140} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "Alzheimer's")} vurgu={b.vurgu!} not={b.not} x={1560} y={330} genislik={600} boyut={120}
        renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
