// Sahne 15 — NIH benzer sonuca varıyor: sağ üstte NIH, liste ve "yaklaşık çeyrek" başlığı
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(0, "National"), tQ = K(1, "about");
  const cikNih = K(1, "It") - 0.1;
  const cikListe = tQ - 0.15;
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={K(1, "cranberry")} capa={[330, 400]} konum={[330, 170]} metin="CRANBERRY PRODUCTS" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={tNih} bitis={cikNih} metin="NIH" x={1860} y={170} boyut={150} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tNih + 0.3} bitis={cikNih} metin="NATIONAL INSTITUTES OF HEALTH" x={1860} y={270} boyut={34} agirlik={800} hiza="sag" renk={RENK.altin} />
      {/* 2. cümle */}
      <Liste t={t} isaret="onay" aralik={80} boyut={34} genislik={760} x={1040} y={110} ogeler={[
        { bas: K(1, "symptomatic"), metin: "SYMPTOMATIC", renk: RENK.altin, bitis: cikListe },
        { bas: K(1, "recurrent"), metin: "RECURRENT UTIs", renk: RENK.altin, bitis: cikListe },
        { bas: K(1, "women"), metin: "IN WOMEN", renk: RENK.altin, bitis: cikListe },
      ]} />
      <BaslikBlok t={t} bas={tQ} satirlar={["ABOUT", "A QUARTER"]} x={1860} y={150} boyut={120} hiza="sag" adim={K(1, "25") - tQ}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "25")} metin="LOWER RISK OF RECURRENT UTIs IN WOMEN, PER NIH" x={1860} y={400} boyut={28} agirlik={800} hiza="sag" genislik={900} />
    </>
  );
};
export default S15;
