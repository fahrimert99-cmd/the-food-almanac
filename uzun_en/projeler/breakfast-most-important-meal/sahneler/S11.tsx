// Sahne 11 — kilo ve yağ farksız; dinlenme metabolizması sabit (<12 kcal/gün).
import React from "react";
import { Baslik, BaslikBlok, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(0, "weight"), tFat = K(0, "body fat"), tBf = K(0, "breakfast"), tFa = K(0, "fasting");
  const tMeta = K(1, "metabolism"), tSteady = K(1, "steady"), tDozen = K(1, "dozen");
  const tCik = K(1, "Resting") - 0.15;
  const z = ilerle(t, 0, s.sure);
  const [sEq, aEq] = pop(t, K(0, "did not differ"), 0.5);
  const hapSatir = (bas: number, metin: string, renk: string, x: number, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * (t < tCik ? 1 : 0);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={34} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/11" pencere={[0 + 20 * z, 40 + 20 * z, 1900 - 90 * z]}>
        {/* kadran yazıları anlamsız: kâğıt diskle örtülür */}
        <div style={{ position: "absolute", left: 140, top: 380, width: 560, height: 520, borderRadius: "50%",
          background: `radial-gradient(circle at 50% 50%, #F8F3E4 0%, #F8F3E4 78%, rgba(248,243,228,0) 100%)` }} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <g transform={`translate(420 640) scale(${sEq})`} opacity={aEq}>
            <rect x={-95} y={-52} width={190} height={34} rx={8} fill={RENK.koyuYesil} />
            <rect x={-95} y={18} width={190} height={34} rx={8} fill={RENK.koyuYesil} />
          </g>
        </svg>
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <div style={{ opacity: t < tCik ? 1 : 0 }}>
        <BaslikBlok t={t} bas={tW} satirlar={s.meta.baslik?.satirlar ?? []} x={960} y={190} boyut={110} bitis={tCik} />
      </div>
      {hapSatir(tFat, "BODY FAT: SAME", RENK.yesil, 1380, 540)}
      {hapSatir(tBf + 0.05, "BREAKFAST", RENK.altin, 1130, 640)}
      {hapSatir(tFa, "FASTING", RENK.lacivert, 1500, 640)}
      <Baslik t={t} bas={tCik + 0.15} metin="RESTING" x={960} y={170} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMeta + 0.1} metin="METABOLISM" x={960} y={280} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSteady} metin="STEADY" x={960} y={390} boyut={100} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tDozen} vurgu="< 12" not="CALORIES A DAY" x={1500} y={520} renk={RENK.altin} genislik={400} />
    </>
  );
};

export default S11;
