// Sahne 41 — karıştırıcı etkenler: dışarıda boş kâğıt üst bant; masa görseli altta.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Üst banttaki küçük hap (ekran koordinatı, ortası x,y)
const Chip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 38,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFark = K(0, "differ"), tSig = K(0, "smoking"), tDiet = K(0, "diet"), tInc = K(0, "income");
  const tStat = K(0, "statistics");
  const t1 = c[1].bas, t2 = c[2].bas;
  const pencere = kameraYolu(t, s.sure, [30, 30, 1860], [130, 140, 1660]);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={pencere}>
        <Etiket t={t} bas={K(0, "breakfast")} bitis={t1 - 0.2} capa={[1380, 745]} konum={[1275, 590]} metin="BREAKFAST" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tInc} bitis={t1 - 0.2} capa={[430, 560]} konum={[260, 300]} metin="INCOME" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      {/* 1. cümle: farklar */}
      <Baslik t={t} bas={tFark} bitis={t1 - 0.2} metin="OTHER DIFFERENCES" x={960} y={150} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Chip t={t} bas={tSig} bitis={t1 - 0.2} x={850} y={265} metin="SMOKING" renk={RENK.mercan} />
      <Chip t={t} bas={tDiet} bitis={t1 - 0.2} x={1110} y={265} metin="DIET" renk={RENK.yesil} />
      <Not t={t} bas={tStat} bitis={t1 - 0.2} metin="Statistics cannot remove all of it" x={960} y={330} hiza="orta" boyut={36} />
      {/* 2. cümle: ilişki, neden değil */}
      <Baslik t={t} bas={K(1, "association")} bitis={t2 - 0.2} metin="ASSOCIATION" x={960} y={150} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "not")} bitis={t2 - 0.2} metin="NOT A CAUSE" x={960} y={270} boyut={80} renk={RENK.mercan} hiza="orta" />
      {/* 3. cümle */}
      <Baslik t={t} bas={K(2, "all-cause")} metin="ALL-CAUSE RESULT" x={960} y={150} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "not")} metin="NOT STATISTICALLY" x={960} y={262} boyut={72} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={K(2, "significant")} metin="SIGNIFICANT" x={960} y={344} boyut={72} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S41;
