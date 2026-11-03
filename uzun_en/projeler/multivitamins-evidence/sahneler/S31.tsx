// Sahne 31 — beta karoten + E vitamini takviyeleri; akciğer kanseri uyarısı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// sağa hizalı hap (ekran koordinatı)
const Chip: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, y, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 50, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(0, "beta"), tE = K(0, "vitamin"), tSup = K(0, "supplements");
  const tHeart = K(0, "heart"), tCancer = K(0, "cancer.");
  const t1 = K(1, "beta"), tMore = K(1, "more"), tSmoke = K(1, "smoke"), tAsb = K(1, "asbestos");
  const bitisA = t1 - 0.15;
  const w = kameraYolu(t, s.sure, [30, 30, 1860], [100, 80, 1720]);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={w} />
      {/* 1. cümle: ürün başlığı sağ üstte, kâğıt boşluğunda */}
      <Baslik t={t} bas={tB} bitis={bitisA} metin="BETA CAROTENE" x={1450} y={200} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={tE} bitis={bitisA} metin="VITAMIN E" x={1450} y={285} boyut={66} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tB} bitis={bitisA} capa={[790, 470]} konum={[1010, 100]} metin="CARROTS" renk={RENK.altin} boyut={24} />
      <Etiket t={t} bas={tSup} bitis={bitisA} capa={[1270, 430]} konum={[1640, 560]} metin="SUPPLEMENTS" renk={RENK.lacivert} boyut={24} />
      <Chip t={t} bas={tHeart} bitis={bitisA} metin="HEART DISEASE" renk={RENK.mercan} y={400} />
      <Chip t={t} bas={tCancer} bitis={bitisA} metin="CANCER" renk={RENK.mercan} y={480} />
      {/* 2. cümle: akciğer kanseri bağlantısı */}
      <Etiket t={t} bas={t1} capa={[790, 470]} konum={[1010, 100]} metin="BETA CAROTENE" renk={RENK.mercan} boyut={24} />
      <Baslik t={t} bas={tMore} metin="MORE LUNG CANCER" x={1450} y={200} boyut={56} renk={RENK.mercan} />
      <Chip t={t} bas={tSmoke} metin="PEOPLE WHO SMOKE" renk={RENK.altin} y={290} boyut={26} />
      <Chip t={t} bas={tAsb} metin="ASBESTOS EXPOSURE" renk={RENK.altin} y={370} boyut={26} />
    </>
  );
};

export default S31;
