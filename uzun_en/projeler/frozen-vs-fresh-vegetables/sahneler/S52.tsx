// Sahne 52 — Kontrollü karşılaştırmalar: iki kase, üstte senkron başlık/rozet.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "controlled") - 0.1, t2 = K(0, "vitamin"), t3 = K(0, "comparable"), t4 = K(0, "sometimes");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [20, 0, 1880], [100, 40, 1720])}>
        <Etiket t={t} bas={K(0, "frozen")} capa={[560, 700]} konum={[560, 780]} metin="FROZEN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "fresh")} capa={[1400, 700]} konum={[1400, 780]} metin="FRESH, FRIDGE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={t1} bitis={t2 - 0.1} metin="CONTROLLED COMPARISONS" x={960} y={130} boyut={76} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={t2} bitis={t3 - 0.15} metin="VITAMIN C + OTHER VITAMINS" x={960} y={130} boyut={76} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t3} bitis={t4 - 0.15} vurgu="≈ COMPARABLE" x={960} y={42} genislik={620} boyut={76} renk={RENK.altin} />
      <VurguRozet t={t} bas={t4} vurgu="SOMETIMES HIGHER" x={960} y={42} genislik={780} boyut={76} renk={RENK.yesil} />
    </>
  );
};

export default S52;
