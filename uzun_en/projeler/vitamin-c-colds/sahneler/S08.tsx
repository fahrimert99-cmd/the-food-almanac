// Sahne 8 — asıl soru: "gerekenden fazlası" korur mu / iyileşmeyi hızlandırır mı?
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sağ üstteki boş kâğıtta açılıp yerinde duran hap
const PopHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-100%, -50%) scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780]);
  const cik0 = c[1].bas - 0.2, cik1 = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={p}>
        <Etiket t={t} bas={K(0, "vitamin")} bitis={cik0} capa={[985, 480]} konum={[1180, 300]} metin="VITAMIN C" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "tested")} capa={[1500, 640]} konum={[1560, 400]} metin="TESTED FOR DECADES" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(1, "real question")} bitis={cik1} metin="THE REAL QUESTION" x={1860} y={150} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "more than you need")} bitis={cik1} metin="Taking more than you need…" x={1860} y={220} hiza="sag" boyut={34} agirlik={700} renk={RENK.gri} />
      <PopHap t={t} bas={K(1, "protect you")} bitis={cik1} x={1860} y={330} metin="PROTECT FROM COLDS?" renk={RENK.yesil} />
      <PopHap t={t} bas={K(1, "recover")} bitis={cik1} x={1860} y={410} metin="RECOVER FASTER?" renk={RENK.altin} />
    </>
  );
};

export default S08;
