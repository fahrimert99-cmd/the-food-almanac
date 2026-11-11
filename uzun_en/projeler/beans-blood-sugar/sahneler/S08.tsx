// Sahne 8 — glisemik indeks: yavaş yükselen tepe + fasulye kasesi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGi = K(0, "glycemic"), tHow = K(0, "how fast"), tBeans = K(1, "Beans"), tLow = K(1, "low");
  const b = s.meta.baslik?.satirlar ?? ["LOW", "GLYCEMIC INDEX"];
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740])} />
      {/* başlık üst boş kâğıtta */}
      <Baslik t={t} bas={tGi} bitis={tBeans - 0.2} metin={b[1]} x={140} y={150} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tHow} bitis={tBeans - 0.2} metin="how fast a food raises blood sugar" x={146} y={226} boyut={36} />
      <Etiket t={t} bas={tHow + 0.3} bitis={tBeans - 0.2} capa={[700, 520]} konum={[1000, 400]} metin="BLOOD SUGAR RISE" renk={RENK.mercan} />
      <Etiket t={t} bas={tBeans} capa={[330, 740]} konum={[330, 560]} metin="BEANS" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tLow} vurgu={b[0]} not="BEANS & LENTILS" x={1400} y={200} renk={RENK.yesil} genislik={420} />
    </>
  );
};

export default S08;
