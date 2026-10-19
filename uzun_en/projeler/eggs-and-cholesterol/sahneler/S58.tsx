// Sahne 58 — büyük çalışmalar: yumurta kâseyi iki yığın makale ortasında; sonuç rozetleri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const c1 = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(0, "large studies")} bitis={c1} capa={[420, 740]} konum={[480, 520]} metin="LARGE STUDIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "one egg")} bitis={c1} capa={[960, 720]} konum={[960, 560]} metin="≤ 1 EGG A DAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "pooled analysis")} capa={[1500, 760]} konum={[1500, 540]} metin="POOLED ANALYSIS" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "not linked")} bitis={c1} vurgu="NOT LINKED" not="HEART DISEASE · STROKE" x={960} y={170} genislik={700} boyut={92}
        renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "small link")} vurgu="SMALL LINK" not="IN ONE POOLED ANALYSIS" x={1530} y={170} genislik={560} boyut={80} />
      <Baslik t={t} bas={K(1, "not fully")} metin="NOT FULLY" x={620} y={190} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "closed")} metin="CLOSED" x={620} y={290} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S58;
