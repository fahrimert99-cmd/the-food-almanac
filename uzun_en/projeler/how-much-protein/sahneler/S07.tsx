// Sahne 7 — anabolik direnç: yaşlı kas daha büyük sinyale ihtiyaç duyabilir.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Parcaciklar, RENK, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tO = K(1, "Older");
  const tP = K(1, "protein");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 15, 1850])}>
        {/* görselin sağ kenar dikişi kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1190, top: -20, width: 800, height: 1120,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 5%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(1, "muscle")} bitis={tP - 0.1} capa={[790, 450]} konum={[1300, 560]} metin="OLDER MUSCLE" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={K(0, "describe")} bitis={tO - 0.1} metin="RESEARCHERS DESCRIBE" x={1560} y={150} hiza="orta" boyut={34} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "anabolic")} bitis={tO - 0.1} metin="ANABOLIC" x={1560} y={300} boyut={112} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "resistance")} bitis={tO - 0.1} metin="RESISTANCE" x={1560} y={425} boyut={112} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "bigger")} metin="BIGGER SIGNAL" x={1560} y={200} boyut={96} hiza="orta" renk={RENK.lacivert} />
      <Liste t={t} isaret="onay" x={1300} y={300} aralik={100} boyut={40} genislik={560}
        ogeler={[{ bas: tP, metin: "PROTEIN" }, { bas: K(1, "exercise,"), metin: "EXERCISE" }]} />
      <Parcaciklar t={t} bas={tP} kaynak={[1290, 380]} hedef={[790, 400]} adet={14} aralik={0.12} kavis={-80} renk={RENK.yesil} tohum="s7" />
      <Not t={t} bas={K(1, "build")} metin="to build at the same rate" x={1560} y={600} hiza="orta" boyut={36} genislik={600} agirlik={800} />
    </>
  );
};

export default S07;
