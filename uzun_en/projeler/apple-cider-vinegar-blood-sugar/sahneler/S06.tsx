// Sahne 6 — nişastalı yiyecekler etiketli; sağ üstte "STARCH → GLUCOSE", glikoz parçacıkları.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(0, "breaks") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [80, 40, 1720])}>
        {/* sağ alttaki küçük imza kâğıt yamayla örtülü */}
        <div style={{ position: "absolute", left: 1610, top: 950, width: 130, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "bread,")} bitis={bit} capa={[330, 760]} konum={[330, 620]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "rice,")} bitis={bit} capa={[800, 780]} konum={[960, 640]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "pasta")} bitis={bit} capa={[1500, 880]} konum={[1500, 760]} metin="PASTA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "potatoes,")} bitis={bit} capa={[1060, 850]} konum={[1130, 730]} metin="POTATOES" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(0, "glucose,")} kaynak={[780, 720]} hedef={[1300, 330]} adet={26} aralik={0.14} omur={2.0} tohum="s6" />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "starch")} satirlar={["STARCH", "→ GLUCOSE"]} x={1860} y={190} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} adim={K(0, "glucose,") - K(0, "starch")} />
      <Not t={t} bas={K(0, "simple")} metin="a simple sugar" x={1860} y={440} hiza="sag" boyut={40} genislik={700} />
      <Not t={t} bas={K(0, "passes")} metin="passes into your bloodstream" x={1860} y={500} hiza="sag" boyut={40} genislik={900} />
    </>
  );
};

export default S06;
