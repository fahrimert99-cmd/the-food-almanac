// Sahne 42 — 2022 derlemesi: sağdaki boş kâğıt alanda satır grupları değişir; kitap ve kâse etiketli.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBut = K(0, "but"), tAnd = K(0, "and");
  // sağ alt köşedeki imza dışarıda kalsın diye pencere 1815 ve 1040 sınırının içinde
  const pencere = kameraYolu(t, s.sure, [60, 30, 1740], [140, 80, 1650]);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={pencere}>
        <Etiket t={t} bas={K(0, "2022")} bitis={tBut - 0.1} capa={[560, 600]} konum={[700, 440]} metin="2022 REVIEW" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "breakfast")} bitis={tBut - 0.1} capa={[1470, 770]} konum={[1470, 620]} metin="BREAKFAST" renk={RENK.yesil} />
      </Kamera>
      {/* A: ilişki */}
      <BaslikBlok t={t} bas={K(0, "skipping")} bitis={tBut - 0.1} satirlar={["SKIPPING BREAKFAST"]} x={960} y={170} boyut={84} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(0, "linked")} bitis={tBut - 0.1} satirlar={["LINKED WITH WORSE", "HEART OUTCOMES"]} x={960} y={275} boyut={84}
        renkler={[RENK.mercan, RENK.mercan]} />
      {/* B: ölçülmeyen etkenler */}
      <BaslikBlok t={t} bas={tBut} bitis={tAnd - 0.1} satirlar={["UNMEASURED FACTORS", "MAY EXPLAIN PART"]} x={960} y={190} boyut={84}
        renkler={[RENK.lacivert, RENK.altin]} />
      {/* C: uzun denemeler yok */}
      <BaslikBlok t={t} bas={K(0, "long")} satirlar={["LONG RANDOMIZED TRIALS", "WITH REAL OUTCOMES"]} x={960} y={190} boyut={80}
        renkler={[RENK.lacivert, RENK.lacivert]} />
      <Baslik t={t} bas={K(0, "missing")} metin="ARE MISSING" x={960} y={190 + 2 * 80 * 1.12} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S42;
