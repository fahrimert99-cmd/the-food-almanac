// Sahne 7 — BHOF günlük kalsiyum hedefleri (50+).
import React from "react";
import { Baslik, BaslikBlok, Hap, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(1, "For calcium") - 0.15;   // 1. aşama sonu
  const tC = K(2, "For men") - 0.1;        // 2. aşama sonu
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 70, 1700])} />
      {/* A: kuruluş ve hedefler */}
      <Not t={t} bas={K(0, "Bone Health")} bitis={tA} metin="BONE HEALTH AND OSTEOPOROSIS FOUNDATION" x={1860} y={170} hiza="sag" genislik={600} boyut={30} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "daily")} bitis={tA} metin="DAILY TARGETS" x={1860} y={330} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "over")} bitis={tA} metin="ADULTS OVER 50" x={1860} y={430} boyut={60} hiza="sag" renk={RENK.koyuYesil} />
      {/* B: 1,200 mg */}
      <BaslikBlok t={t} bas={K(1, "1,200")} bitis={tC} satirlar={s.meta.baslik!.satirlar} x={1860} y={300} boyut={100} hiza="sag" />
      <Pil t={t} bas={K(1, "women")} bitis={tC} metin="WOMEN" renk={RENK.mercan} x={1860} y={600} />
      <Pil t={t} bas={K(1, "men")} bitis={tC} metin="MEN OVER 70" renk={RENK.lacivert} x={1860} y={690} />
      {/* C: 1,000 mg */}
      <VurguRozet t={t} bas={K(2, "1,000")} vurgu="1,000 MG" not="men 50 to 70" x={1560} y={300} genislik={520} renk={RENK.yesil} />
      <Not t={t} bas={K(2, "1,000") + 0.4} metin="OF CALCIUM, PER DAY" x={1560} y={560} hiza="orta" genislik={520} boyut={30} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S07;
