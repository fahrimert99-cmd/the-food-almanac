// Sahne 43 — iş tarafı: FDA ve FTC işlemleri
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

// sağ boşlukta beliren hap
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al0] = pop(t, bas, 0.5);
  const al = al0 * sol(t, bitis);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const c1 = c[1].bas - 0.1, gizli = K(1, "hidden") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={w}>
        <Etiket t={t} bas={K(1, "acted")} bitis={gizli} capa={[1260, 640]} konum={[1700, 800]} metin="ACTED AGAINST" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "hidden")} capa={[1330, 520]} konum={[1620, 520]} metin="HIDDEN INGREDIENTS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* 1. cümle: başlık */}
      <Baslik t={t} bas={K(0, "business")} bitis={c1} metin="THE BUSINESS SIDE" x={70} y={110} boyut={84} renk={RENK.lacivert} />
      {/* 2. cümle: kurumlar, sonra sahte iddialar */}
      <Pil t={t} bas={K(1, "FDA")} bitis={gizli} metin="FDA" renk={RENK.lacivert} x={1620} y={200} />
      <Pil t={t} bas={K(1, "Federal")} bitis={gizli} metin="FEDERAL TRADE COMMISSION" renk={RENK.lacivert} x={1560} y={290} />
      <Baslik t={t} bas={K(1, "false")} metin="FALSE CLAIMS" x={1700} y={190} boyut={64} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={K(1, "serious")} metin="of treating serious disease" x={1700} y={250} boyut={26} hiza="orta" genislik={330} agirlik={700} />
    </>
  );
};

export default S43;
