// Sahne 1 — kahve ve su, ilk iddia: "seni kurutur", ardından 50 erkeklik deneme.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "coffee");
  const tIddia = K(0, "dries");
  const tAdam = K(1, "50");
  const tPorsiyon = K(1, "four servings");
  const tSonuc = K(1, "hydrated");
  const bitisA = K(1, "In") + 0.3;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tBaslik} bitis={bitisA + 2} capa={[470, 650]} konum={[250, 330]} metin="COFFEE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "water")} capa={[890, 640]} konum={[1090, 800]} metin="WATER" renk={RENK.yesil} />
      </Kamera>
      {/* Giriş başlığı sağ boş kâğıtta */}
      <BaslikBlok t={t} bas={tBaslik} bitis={bitisA} satirlar={["COFFEE", "VS WATER"]} x={1860} y={330} boyut={104} hiza="sag" />
      <Not t={t} bas={tIddia} bitis={bitisA} metin="“IT DRIES YOU OUT”" x={1860} y={560} hiza="sag" boyut={40} renk={RENK.mercan} agirlik={800} />
      {/* Deneme: 50 erkek, 4 porsiyon, sonuç */}
      <VurguRozet t={t} bas={tAdam} vurgu="50 MEN" not="drank coffee daily" x={1560} y={150} boyut={96} genislik={400} />
      <VurguRozet t={t} bas={tPorsiyon} vurgu="4 SERVINGS" not="of coffee a day" x={1560} y={430} boyut={80} genislik={430} renk={RENK.mercan} />
      <Ikon t={t} bas={tSonuc} ad="onay" x={1380} y={735} boyut={84} />
      <Not t={t} bas={tSonuc + 0.1} metin="HYDRATED ABOUT AS WELL AS WATER" x={1450} y={690} boyut={36} agirlik={800} genislik={400} />
    </>
  );
};

export default S01;
