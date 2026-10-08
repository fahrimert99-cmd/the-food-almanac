// Sahne 6 — ekmek, pirinç, elma, patates; yiyecekten glikoza. Moleküllerin yanındaki sahte harfler yamayla örtülür.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// sahte harf yamaları: [merkez x, merkez y, genişlik, yükseklik]
const YAMALAR: [number, number, number, number][] = [
  [562, 332, 64, 40], [418, 535, 44, 40], [1130, 556, 48, 44], [1386, 528, 80, 44],
];

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(0, "digestive") - 0.2;
  return (
    <>
      {/* alt sağdaki bozuk yazı pencere dışında kalır (alt <= 1000) */}
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [60, 10, 1760], [110, 40, 1660])}>
        {YAMALAR.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgb(251,249,224) 0%, rgb(251,249,224) 60%, rgba(251,249,224,0) 100%)` }} />
        ))}
        <Etiket t={t} bas={K(0, "bread")} bitis={cik} capa={[333, 800]} konum={[230, 650]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "rice")} bitis={cik} capa={[1027, 867]} konum={[900, 740]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fruit")} bitis={cik} capa={[1400, 787]} konum={[1150, 740]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "potatoes")} bitis={cik} capa={[1600, 880]} konum={[1660, 740]} metin="POTATOES" renk={RENK.altin} />
      </Kamera>
      <Parcaciklar t={t} bas={K(0, "breaks")} kaynak={[960, 700]} hedef={[960, 440]} adet={26} aralik={0.14} tohum="s06" />
      <BaslikBlok t={t} bas={K(0, "digestive")} satirlar={["FOOD"]} x={960} y={170} boyut={100} hiza="orta" />
      <BaslikBlok t={t} bas={K(0, "glucose,")} satirlar={["→ GLUCOSE"]} x={960} y={285} boyut={100} hiza="orta" renkler={[RENK.altin]} />
      <Not t={t} bas={K(0, "bloodstream")} metin="INTO THE BLOODSTREAM" x={960} y={400} hiza="orta" boyut={38} agirlik={800} />
    </>
  );
};

export default S06;
