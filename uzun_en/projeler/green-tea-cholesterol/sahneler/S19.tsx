// Sahne 19 — 1.075 kadın, 12 ay, ekstre kapsülü ya da plasebo, 843 mg EGCG.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1680])}>
        <Etiket t={t} bas={K(0, "capsules")} capa={[330, 520]} konum={[300, 660]} metin="GREEN TEA EXTRACT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "placebo")} capa={[700, 520]} konum={[790, 660]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(0, "1,075")} satirlar={[b.satirlar[0]]} x={1860} y={220} boyut={112} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(0, "twelve")} satirlar={[b.satirlar[1]]} x={1860} y={338} boyut={112} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "every")} metin={b.not!} x={1860} y={410} hiza="sag" genislik={640} boyut={32} />
      <VurguRozet t={t} bas={K(1, "843")} vurgu="843 MG" not="of EGCG every day" x={1500} y={560} genislik={460} />
    </>
  );
};
export default S19;
