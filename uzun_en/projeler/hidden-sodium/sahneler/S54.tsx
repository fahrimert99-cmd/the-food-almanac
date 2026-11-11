// Sahne 54 — iki marka karşılaştır: ekmek etiketleri, yiyecek listesi, 10 sn rozeti
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "Compare");
  const tA = K(2, "two kinds"), tB = tA + 0.4;
  const tEkmek = K(2, "bread,"), tCorba = K(2, "canned soup"), tHindi = K(2, "deli turkey");
  const tNa = K(2, "sodium");
  const tSn = K(3, "ten-second"), tBedava = K(3, "costs nothing");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [50, 100, 1700])}>
        <Etiket t={t} bas={tA} bitis={tNa - 0.2} capa={[400, 560]} konum={[330, 250]} metin="BRAND A" renk={RENK.altin} />
        <Etiket t={t} bas={tB} bitis={tNa - 0.2} capa={[760, 600]} konum={[720, 250]} metin="BRAND B" renk={RENK.yesil} />
        <Etiket t={t} bas={tNa} capa={[933, 400]} konum={[1000, 200]} metin="SODIUM PER SERVING" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tBas} metin="COMPARE" x={1860} y={300} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBas + 0.55} metin="TWO BRANDS" x={1860} y={420} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1380} y={560} aralik={70} boyut={32} genislik={500}
        ogeler={[
          { bas: tEkmek, metin: "BREAD", renk: RENK.altin, bitis: tSn - 0.3 },
          { bas: tCorba, metin: "CANNED SOUP", renk: RENK.altin, bitis: tSn - 0.3 },
          { bas: tHindi, metin: "DELI TURKEY", renk: RENK.altin, bitis: tSn - 0.3 },
        ]} />
      <VurguRozet t={t} bas={tSn} vurgu="10 SEC" x={1620} y={580} genislik={400} boyut={96} />
      <Not t={t} bas={tBedava} metin="COSTS NOTHING" x={1620} y={770} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S54;
