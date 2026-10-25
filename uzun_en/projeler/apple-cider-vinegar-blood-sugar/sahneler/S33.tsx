// Sahne 33 — 2022 incelemesi: %47 yüksek yanlılık riski, yayın yanlılığı. Kitap yığını solda, yazılar sağ boş kâğıtta.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t22 = K(0, "2022"), t47 = K(0, "47"), tHigh = K(0, "high risk"), tPub = K(0, "publication");
  const tSmall = K(1, "small studies"), tPubd = K(1, "published");
  const [sc, al] = pop(t, tPub, 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [40, 100, 1760])}>
        <Etiket t={t} bas={tPubd - 0.2} capa={[380, 560]} konum={[1000, 440]} metin="MORE LIKELY PUBLISHED" renk={RENK.altin} boyut={28} />
      </Kamera>
      <AltSis a={0.7} yukseklik={150} />
      <Not t={t} bas={t22} metin="THE 2022 REVIEW" x={1860} y={130} hiza="sag" boyut={32} agirlik={800} renk={RENK.altin} genislik={600} bitis={t47 + 0.2} />
      <VurguRozet t={t} bas={t47 - 0.1} vurgu="47%" not="of the studies" x={1500} y={110} genislik={400} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tHigh} satirlar={["HIGH RISK", "OF BIAS"]} x={1860} y={440} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", right: 60, top: 690, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
        <Hap metin="SIGNS OF PUBLICATION BIAS" renk={RENK.altin} boyut={30} />
      </div>
      <Not t={t} bas={tSmall} metin="Small studies with exciting results" x={1860} y={790} hiza="sag" boyut={34} genislik={820} />
    </>
  );
};

export default S33;
