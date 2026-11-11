import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 6 — iki kase: zeytin yağı ile rafine yağ, fenolik bileşikler.
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800])}>
        <Etiket t={t} bas={K(0, "Virgin")} bitis={K(1, "refined")} capa={[540, 520]} konum={[540, 250]} metin="VIRGIN OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "refined")} capa={[1380, 540]} konum={[1380, 250]} metin="REFINED OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "keep more")} capa={[540, 700]} konum={[540, 880]} metin="MORE PHENOLICS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "loses many")} capa={[1380, 700]} konum={[1380, 880]} metin="FEWER PHENOLICS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "phenolics")} bitis={K(1, "Virgin") - 0.1} metin="PHENOLICS" x={1450} y={150} boyut={100} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "natural")} bitis={K(1, "Virgin") - 0.1} metin="NATURAL PLANT COMPOUNDS" x={1450} y={225} boyut={28} hiza="orta" agirlik={800} renk={RENK.altin} />
    </>
  );
};
export default S06;
