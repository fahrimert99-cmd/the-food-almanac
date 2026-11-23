// Sahne 27 — sonuçlar neden farklı: gürültülü küçük çalışmalar, farklı ürün ve dozlar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const URUNLER = [
  { ad: "RAW ROOT", capa: [285, 560], konum: [285, 800] },
  { ad: "POWDER", capa: [660, 610], konum: [660, 880] },
  { ad: "CAPSULES", capa: [1000, 680], konum: [1000, 800] },
  { ad: "DRIED SLICES", capa: [1330, 700], konum: [1330, 880] },
  { ad: "TEA BAG", capa: [1740, 680], konum: [1740, 800] },
] as { ad: string; capa: [number, number]; konum: [number, number] }[];

const Gurultu: React.FC<{ t: number; bas: number; bitis: number }> = ({ t, bas, bitis }) => {
  const a = pop(t, bas, 0.5)[1] * sol(t, bitis);
  if (a <= 0) return null;
  const f = Math.floor(t * 12);
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const r = Math.sin(i * 12.9898 + f * 78.233) * 43758.5453;
    pts.push(`${(700 + i * 8.6).toFixed(0)},${(310 + (r - Math.floor(r) - 0.5) * 70).toFixed(0)}`);
  }
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
      <polyline points={pts.join(" ")} fill="none" stroke={RENK.mercan} strokeWidth={5} strokeLinejoin="round" />
    </svg>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhy = K(0, "Why"), tSmall = K(1, "Small"), tNoisy = K(1, "noisy"), tProd = K(1, "products"), tDoses = K(1, "doses");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [30, 140, 1840])}>
        {URUNLER.map((u, i) => (
          <Etiket key={u.ad} t={t} bas={tProd + i * 0.3} capa={u.capa} konum={u.konum} metin={u.ad} renk={i % 2 ? RENK.altin : RENK.koyuYesil} boyut={26} />
        ))}
      </Kamera>
      <Ikon t={t} bas={tWhy} bitis={tSmall - 0.1} ad="soru" x={620} y={190} zemin={RENK.altin} boyut={96} />
      <Baslik t={t} bas={tWhy} bitis={tSmall - 0.1} metin="WHY DO RESULTS DIFFER?" x={700} y={190} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSmall} bitis={tProd - 0.15} metin="SMALL STUDIES:" x={140} y={130} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNoisy} bitis={tProd - 0.15} metin="NOISY" x={140} y={240} boyut={120} renk={RENK.mercan} />
      <Gurultu t={t} bas={tNoisy} bitis={tProd - 0.15} />
      <BaslikBlok t={t} bas={tProd} satirlar={["DIFFERENT", "PRODUCTS"]} x={960} y={120} boyut={96} hiza="orta" />
      <Not t={t} bas={tDoses} metin="and doses" x={960} y={330} hiza="orta" boyut={34} />
    </>
  );
};

export default S27;
