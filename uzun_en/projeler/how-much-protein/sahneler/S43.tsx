// Sahne 43 — KDIGO 2024: standart 0,8 g/kg, çok yüksek alımdan kaçın; öneri zayıf.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tZayif = K(1, "graded") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={K(0, "moderate")} bitis={K(0, "keep") - 0.2} capa={[480, 780]} konum={[860, 800]} metin="MODERATE–ADVANCED CKD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "not on")} bitis={K(0, "keep") - 0.2} capa={[300, 900]} konum={[700, 905]} metin="NOT ON DIALYSIS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "avoid")} bitis={tZayif} capa={[1500, 260]} konum={[1130, 90]} metin="AVOID VERY HIGH INTAKES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "KDIGO")} />
      <VurguRozet t={t} bas={K(0, "0.8")} bitis={tZayif} vurgu="0.8 G/KG" not="the standard amount" x={1380} y={520} genislik={380} />
      <VurguRozet t={t} bas={K(1, "weak")} vurgu="WEAK" not="recommendation · limited evidence" x={1380} y={520} genislik={420} renk={RENK.mercan} boyut={96} />
    </>
  );
};

export default S43;
