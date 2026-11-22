// Sahne 33 — 65 biyopsi: hepsinin nedeni belirlendi, üçü diyete bağlı oksalat nefropatisi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["65 BIOPSIES", "REVIEWED"];
  const c1 = s.cumleler[1].bas - 0.1, c2 = s.cumleler[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "juicing")} bitis={c2} capa={[1080, 780]} konum={[1360, 700]} metin="JUICING PATIENT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "oxalate-rich")} capa={[900, 330]} konum={[1420, 640]} metin="OXALATE CRYSTALS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "65")} satirlar={b} x={1420} y={110} boyut={80} hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" boyut={34} x={1190} y={360} genislik={700}
        ogeler={[{ bas: K(0, "identified"), metin: "IDENTIFIED CAUSE", bitis: c1 }]} />
      <VurguRozet t={t} bas={K(1, "Three,")} vurgu="3 OF 65" not="presumed diet-induced oxalate nephropathy" x={1500} y={450}
        genislik={440} boyut={96} renk={RENK.mercan} bitis={c2} />
      <Not t={t} bas={K(2, "heavy")} metin="Heavy intake of oxalate-rich juices: a potential cause" x={1500} y={330} boyut={36} hiza="orta" genislik={560}
        agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S33;
