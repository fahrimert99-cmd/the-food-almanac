// Sahne 34 — iyi desteklenen ve belirsiz olanlar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1150, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWell = K(0, "well"), tSmall = K(1, "small"), tMem = K(1, "memory"), tCos = K(1, "COSMOS.");
  const tUnc = K(2, "what's"), tDiv = K(2, "diverse"), tNour = K(2, "nourished");
  const bitA = tUnc - 0.1;
  const w = kameraYolu(t, s.sure, [0, 40, 1880], [60, 80, 1760]);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={w} />
      {/* iyi desteklenen */}
      <Baslik t={t} bas={0.05} bitis={bitA} metin="WHAT'S" x={1150} y={140} boyut={52} renk={RENK.gri} />
      <Baslik t={t} bas={tWell} bitis={bitA} metin="WELL SUPPORTED?" x={1150} y={235} boyut={96} renk={RENK.koyuYesil} />
      <Chip t={t} bas={tSmall} bitis={bitA} metin="AT MOST SMALL HARMS" renk={RENK.altin} y={400} />
      <Chip t={t} bas={tMem} bitis={bitA} metin="SMALL MEMORY BENEFIT" renk={RENK.yesil} y={490} />
      <Etiket t={t} bas={tCos} bitis={bitA} capa={[600, 520]} konum={[950, 300]} metin="COSMOS" renk={RENK.yesil} boyut={26} />
      {/* belirsiz */}
      <BaslikBlok t={t} bas={tUnc} satirlar={["WHAT'S", "UNCERTAIN"]} x={1150} y={160} boyut={92} renkler={[RENK.lacivert, RENK.mercan]} />
      <Chip t={t} bas={tDiv} metin="MORE DIVERSE GROUPS" renk={RENK.altin} y={440} />
      <Chip t={t} bas={tNour} metin="HOW WELL NOURISHED" renk={RENK.altin} y={530} />
    </>
  );
};

export default S34;
