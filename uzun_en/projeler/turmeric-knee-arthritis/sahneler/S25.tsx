// Sahne 25 — Feng 2022 meta-analizi: 15 deneme, 1.670 kişi; plaseboya göre ~1,8 puan ağrı azalması.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta.baslik!;
  const son1 = K(1, "Compared") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "randomized")} bitis={son1} capa={[500, 520]} konum={[1250, 520]} metin="RANDOMIZED TRIALS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "curcuminoids")} capa={[520, 190]} konum={[1330, 190]} metin="CURCUMINOIDS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={m && s.meta.etiket ? s.meta.etiket : ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "15")} bitis={son1} metin={m.satirlar[0]} x={1500} y={290} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "1,670")} bitis={son1} vurgu={m.vurgu!} not={m.not} x={1500} y={450} genislik={440} />
      <Not t={t} bas={K(1, "Compared")} metin="COMPARED WITH PLACEBO" x={1500} y={440} hiza="orta" boyut={30} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "1.8")} vurgu="–1.8 POINTS" not="knee pain vs placebo, pain scale" x={1500} y={560} genislik={500} boyut={84} renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "noticeable")} ad="onay" x={1390} y={860} />
      <Not t={t} bas={K(1, "noticeable")} metin="JUDGED NOTICEABLE" x={1460} y={830} boyut={34} agirlik={800} />
    </>
  );
};

export default S25;
