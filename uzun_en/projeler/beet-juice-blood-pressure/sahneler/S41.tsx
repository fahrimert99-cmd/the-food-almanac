// Sahne 41 — taş uyarısı: kanıt değil, dikkat.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [30, 70, 1860])} />
      {/* kitaplar = çalışma; pancar ve bardak = nitrat/oksalat */}
      <Etiket t={t} bas={K(0, "2014")} bitis={4.8} capa={[560, 735]} konum={[560, 430]} metin="2014 TRIAL" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(0, "oxalate")} bitis={8.9} capa={[1250, 800]} konum={[1130, 430]} metin="OXALATE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "high-nitrate")} bitis={11.0} capa={[1650, 640]} konum={[1500, 330]} metin="HIGH NITRATE" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "caution")} satirlar={b.satirlar} x={90} y={170} boyut={110} renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={K(1, "trial")} bitis={15.2} capa={[800, 700]} konum={[900, 470]} metin="NO STONE TRIAL" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "rests")} x={640} y={150} metin="Rests on oxalate content" boyut={48} agirlik={800} />
      <Not t={t} bas={K(1, "not direct")} x={640} y={220} metin="Not direct evidence" boyut={48} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S41;
