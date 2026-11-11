// Sahne 23 — bakımevleri: solda görsel, sağda başlık, sayılar ve fayda yok listesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, Hap, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tP = K(2, "Pregnant");
  const [sc, al] = pop(t, K(1, "about the same"), 0.5);
  const solSon = tP - 0.1;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 80, 1760])} />
      <BaslikBlok t={t} bas={K(0, "care")} satirlar={m.baslik!.satirlar} x={1860} y={200} boyut={120} hiza="sag" renkler={[RENK.lacivert]} />
      <Etiket t={t} bas={K(1, "cranberry")} bitis={solSon} capa={[580, 500]} konum={[1180, 480]} metin="CRANBERRY JUICE" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "three")} bitis={solSon} metin="3 trials · 1,489 older residents" x={1860} y={320} hiza="sag" boyut={38} agirlik={800} />
      <div style={{ position: "absolute", left: 1540, top: 580, transform: `translate(-50%, 0) scale(${sc})`, opacity: al * (t < solSon ? 1 : 0) }}>
        <Hap metin="ABOUT THE SAME RISK" renk={RENK.altin} boyut={34} />
      </div>
      <Liste t={t} x={1080} y={500} aralik={110} boyut={34} isaret="nokta" genislik={780}
        ogeler={[{ bas: tP, metin: "PREGNANT WOMEN", renk: RENK.mercan }, { bas: K(2, "adults"), metin: "BLADDERS NOT EMPTYING FULLY", renk: RENK.mercan }]} />
      <Baslik t={t} bas={K(2, "little")} metin="LITTLE OR NO BENEFIT" x={1080} y={760} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S23;
