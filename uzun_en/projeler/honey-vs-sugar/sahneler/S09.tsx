// Sahne 9 — baldan baha değişir: 32–87 aralığı (dört kavanoz).
import React from "react";
import { Baslik, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tVary = K(1, "vary a lot"), t32 = K(1, "32"), t87 = K(1, "87");
  const tJar = K(2, "own jar"), tAbove = K(2, "above");
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1820]);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kam} />
      <Baslik t={t} bas={0.05} bitis={c[1].bas - 0.1} metin="THAT'S CLOSE." x={700} y={200} boyut={140} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tVary - 0.1} bitis={tJar - 0.15} metin="HONEYS VARY A LOT" x={800} y={195} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t32 - 0.1} vurgu="32" not="lowest tested" x={330} y={290} genislik={280} boyut={96} renk={RENK.altin} />
      <VurguRozet t={t} bas={t87 - 0.1} vurgu="87" not="highest tested" x={1580} y={290} genislik={280} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={tJar - 0.1} metin="YOUR OWN JAR" x={800} y={195} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tAbove} metin="ABOVE OR BELOW THE AVERAGE" x={800} y={262} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S09;
